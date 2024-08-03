import { calculateInvestmentResults } from "../helpers/investment"
export default function Results({obj}){
    const resultData = calculateInvestmentResults(obj)
    return <table id="result">
        <thead>
            <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(({year,interest,valueEndOfYear,totalInterest,investedCapital})=>{
                return <tr key={year}>
                    <th>{year}</th>
                    <th>{valueEndOfYear}</th>
                    <th>{interest}</th>
                    <th>{totalInterest}</th>
                    <th>{investedCapital}</th>
                </tr>
            })}
        </tbody>
    </table>
}