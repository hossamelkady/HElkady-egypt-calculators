(function(root){
const r2=n=>Math.round((n+Number.EPSILON)*100)/100;
const NISAB_GRAMS=85,ZAKAT_RATE=0.025;
function zakatMoney(total,debts,goldPricePerGram24,heldYear){total=+total||0;debts=+debts||0;const net=Math.max(0,total-debts);const nisab=NISAB_GRAMS*goldPricePerGram24;
 const due=heldYear!==false&&net>=nisab&&nisab>0;return {net:r2(net),nisab:r2(nisab),due,zakat:due?r2(net*ZAKAT_RATE):0};}
function zakatGold(grams,karat,goldPricePerGram24,heldYear){const pure=grams*karat/24;const nisab=NISAB_GRAMS;const due=heldYear!==false&&pure>=nisab;
 const value=pure*goldPricePerGram24;return {pureGrams:r2(pure),value:r2(value),due,zakat:due?r2(value*ZAKT()):0};}
function ZAKT(){return ZAKAT_RATE;}
const TARIFF=[{upTo:50,pt:68},{upTo:100,pt:87},{upTo:200,pt:106},{upTo:350,pt:174},{upTo:650,pt:218},{upTo:1000,pt:235},{upTo:Infinity,pt:289}];
function electricity(kwh,tariff,mode){tariff=tariff||TARIFF;kwh=Math.max(0,+kwh||0);
 if(mode==='whole'){const t=tariff.find(x=>kwh<=x.upTo)||tariff[tariff.length-1];return r2(kwh*t.pt/100);}
 let prev=0,sum=0;for(const t of tariff){if(kwh<=prev)break;const used=Math.min(kwh,t.upTo)-prev;sum+=used*t.pt/100;prev=t.upTo;}return r2(sum);}
function percentOf(p,x){return r2(x*p/100);}
function whatPercent(a,b){return b===0?NaN:r2(a/b*100);}
function pctChange(from,to){return from===0?NaN:r2((to-from)/from*100);}
function discount(price,pct){const off=price*pct/100;return {off:r2(off),final:r2(price-off)};}
function vat(amount,rate,mode){rate=rate==null?14:rate;if(mode==='included'){const base=amount/(1+rate/100);return {base:r2(base),vat:r2(amount-base),total:r2(amount)};}
 const v=amount*rate/100;return {base:r2(amount),vat:r2(v),total:r2(amount+v)};}
function loan(principal,annualPct,months,type){if(!(principal>0&&months>0))return null;
 if(type==='flat'){const interest=principal*annualPct/100*(months/12);const total=principal+interest;return {monthly:r2(total/months),total:r2(total),interest:r2(interest)};}
 const i=annualPct/100/12;const m=i===0?principal/months:principal*i/(1-Math.pow(1+i,-months));return {monthly:r2(m),total:r2(m*months),interest:r2(m*months-principal)};}
function bmi(kg,cm){const m=cm/100;const v=kg/(m*m);let c=v<18.5?'نحافة':v<25?'وزن طبيعي':v<30?'وزن زائد':'سمنة';return {bmi:Math.round(v*10)/10,category:c};}
function ageBetween(from,to){let y=to.getFullYear()-from.getFullYear(),m=to.getMonth()-from.getMonth(),d=to.getDate()-from.getDate();
 if(d<0){m--;d+=new Date(to.getFullYear(),to.getMonth(),0).getDate();}if(m<0){y--;m+=12;}return {years:y,months:m,days:d,totalDays:Math.floor((to-from)/86400000)};}
function splitBill(total,people,tipPct){const t=total*(1+(tipPct||0)/100);return {total:r2(t),perPerson:r2(t/people)};}
const api={zakatMoney,zakatGold,electricity,TARIFF,percentOf,whatPercent,pctChange,discount,vat,loan,bmi,ageBetween,splitBill,NISAB_GRAMS,ZAKAT_RATE};
if(typeof module!=='undefined')module.exports=api;else root.CALC=api;
})(typeof window!=='undefined'?window:globalThis);
