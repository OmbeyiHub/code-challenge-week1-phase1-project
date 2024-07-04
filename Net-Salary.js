
const prompt =require('prompt-sync')()
let net_Pay= gross(prompt("Enter pay"))
function nssf(gross_income){
    if(gross_income <= 7000){
        return 420;
    } else{
        return 2160;
    }
}
let tta = gross_salary - nssf(gross_salary)
function paye(total_taxable_amount) {
    if (total_taxable_amount <= 24000){
        return(total_taxable_amount * 0.1)
    }else if(total_taxable_amount > 24000 && total_taxable_amount <= 32333) {
        return (total_taxable_amount * 0.25)
    }else if (total_taxable_amount > 32333 && total_taxable_amount <= 500000){
        return(total_taxable_amount * 0.3)
    }else if(total_taxable_amount > 500000 && total_taxable_amount <= 800000){
        return(total_taxable_amount * 0.325)
    }else if (total_taxable_amount > 800000){
        return(total_taxable_amount * 0.35)
    }else{
        return 'Invalid Total Amount Entry'
    }
    
}
let NTA =TTA - PAYE (TTA)
let nhif = gross_salary =0.0275
let housing_levy =gross_salary * 0.015
let Net_Pay =NTA - (nhif + housing_levy)
console.log('The Net Pay is : $(Net_Pay)')