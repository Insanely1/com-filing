import React from 'react'

const IncomeTax12 = () => {
  return (
    <div>
       <br/>
      <br/>
      <br/>
        <div className="p-6 space-y-6 max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8 text-gray-800 font-sans">
         
      <h1 className="text-3xl font-bold">TDS Return Filing</h1>
      <p>
        Tax Deduction at Source (TDS) refers to the deduction of tax at the point of income payment.
        Individuals and entities responsible for such deductions must file TDS returns quarterly before the due date.
        <strong> ComFilings </strong> offers expert guidance for accurate, compliant, and timely TDS return filing.
      </p>

      <h2 className="text-2xl font-semibold">TDS - Tax Deducted at Source</h2>
      <p>
        TDS is a mechanism by which the payer deducts tax while making certain payments like salaries, rent, interest, or professional fees.
        The deducted amount must then be deposited online and reported through TDS returns.
      </p>

      <h2 className="text-2xl font-semibold">Common Payments Attracting TDS</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Salaries</li>
        <li>Rent</li>
        <li>Contractor/Sub-contractor fees</li>
        <li>Professional Fees</li>
        <li>Commission</li>
        <li>Interest (other than securities)</li>
      </ul>

      <h2 className="text-2xl font-semibold">TDS Thresholds</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Rent: ₹2,40,000/year</li>
        <li>Contractor: ₹30,000 single or ₹1,00,000 aggregate/year</li>
        <li>Professional Fees: ₹30,000/year</li>
        <li>Interest: ₹40,000/year (₹50,000 for senior citizens)</li>
      </ul>

      <h2 className="text-2xl font-semibold">TDS Rates & Key Sections</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Section</th>
              <th className="border px-4 py-2">Nature of Payment</th>
              <th className="border px-4 py-2">Basic Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">192</td>
              <td className="border px-4 py-2">Salary</td>
              <td className="border px-4 py-2">As per Slab</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">194A</td>
              <td className="border px-4 py-2">Interest (other than on securities)</td>
              <td className="border px-4 py-2">10%</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">194C</td>
              <td className="border px-4 py-2">Contractor/Sub-contractor</td>
              <td className="border px-4 py-2">1% (Ind./HUF), 2% (Others)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">194I</td>
              <td className="border px-4 py-2">Rent (Land/Building/Machinery)</td>
              <td className="border px-4 py-2">2% / 10%</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">194J</td>
              <td className="border px-4 py-2">Professional/Technical Services</td>
              <td className="border px-4 py-2">10%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold">TDS Return Filing Due Date</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-left mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Quarter</th>
              <th className="border px-4 py-2">Period</th>
              <th className="border px-4 py-2">TDS Return Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Quarter 1</td>
              <td className="border px-4 py-2">April to June</td>
              <td className="border px-4 py-2">31st July</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Quarter 2</td>
              <td className="border px-4 py-2">July to September</td>
              <td className="border px-4 py-2">31st October</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Quarter 3</td>
              <td className="border px-4 py-2">October to December</td>
              <td className="border px-4 py-2">31st January</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Quarter 4</td>
              <td className="border px-4 py-2">January to March</td>
              <td className="border px-4 py-2">31st May</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8">Who is Required to File a TDS Return?</h2>
      <p>TDS filing obligations extend to employers and organizations that possess a TAN (Tax Deduction and Collection Account Number). This requirement also applies to individuals subject to audit under Section 44AB, and those in government or corporate positions who are expected to do the TDS quarterly return filing. The TDS return quarterly due date must be met in order to avoid penalties and legal complications.
  <br/>
A wide array of entities, including individuals, collectives, Hindu Undivided Families (HUFs), corporations, local authorities, partnerships, and other associations, are eligible as deductors, deposit TDS online and does TDS quarterly return filing. It must be filed with the right forms before the TDS return filing due date to avoid legal problems.
<br/>
Under the provisions of the Income Tax Act, TDS paid online, and the TDS returns must be filed for transactions before the prescribed TDS due date involving:</p>
          
      <ul className="list-disc pl-6 space-y-2 text-base">
  <li>Salary Payment</li>
  <li>Income on securities</li>
  <li>Income by winning lotteries, puzzles, and similar games</li>
  <li>Income from winning horseraces</li>
  <li>Insurance commissions</li>
  <li>Payment concerning the National Saving Scheme</li>
  <li>And many other specified payments under the Income Tax Act</li>
</ul>

  <h2 className="text-2xl font-semibold mt-8">TDS Return Filing Due Date</h2>
  <p></p>
    </div>

    </div>
  )
}

export default IncomeTax12
