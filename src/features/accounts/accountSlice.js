

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };

  export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
        if (state.loan > 0) return state;
        // LATER
        return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose,balance: state.balance + action.payload.amount };
      case 'account/payLoan':
        return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan }
      default:
        return state;
    }
  }


// ============test===============
// store.dispatch({type : 'account/deposit', payload : 500});
// store.dispatch({type : 'account/withdraw', payload : 200});
// store.dispatch({type : 'account/requestLoan',payload : {amount: 1000, purpose: 'By a Car'}})
// store.dispatch({type : 'account/payLoan'})
// console.log(store.getState());
// ============test===============





// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   console.log(currency)

//   return async function (dispatch, getState) {
//     // api call

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     console.log(data)
//     // const converted = data.rates.USD;

//     // dispatch({ type: "account/deposit", payload: converted });

//     // return action
//   }
//   }





// action creator => simply create one function for each action
  export function deposit (amount, currency){
    return { type: "account/deposit", payload: amount };
  }


  export function withdraw (amount){
    return {type : 'account/withdraw', payload : amount}
  }
  
  export function requestLoan (amount,purpose){
    return {type : 'account/requestLoan',payload : {amount, purpose}}
  }
  
  export function payLoan (){
    return {type : 'account/payLoan'};
  }