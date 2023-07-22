export default function mostProfitableDepartment(businessProfits){
    var departsAndProfits = {};
    for(let i = 0; i < businessProfits.length; i++){
      let currentObj = businessProfits[i];
      departsAndProfits[businessProfits[i].department] = 0;  
    }
    
    for(let i = 0; i < businessProfits.length; i++){
    let currentObj = businessProfits[i];
      let currDepartTotal = departsAndProfits[currentObj.department];
      currDepartTotal += currentObj.sales;
      departsAndProfits[currentObj.department] = currDepartTotal;
    }
  
    let maxProfit = 0;
    let maxProfitDepart = "";
    for(let department in departsAndProfits){
      if(maxProfit < departsAndProfits[department]){
        maxProfit = departsAndProfits[department];
        maxProfitDepart = department;
      }
    }
    return maxProfitDepart;
  }
  
  