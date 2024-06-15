import React from 'react';

const data = [
  ['Name', 'Abasalon'],
  ['Gender', 'Male'],
  ['Is Married', 'Yes'],
  ['Relationship', 'Husband'],
  ['Address', '76 Chamin Challet,LRLE Nord-Parl-de-calate 560068'],
  ['Date of Birth', '16-Nov-1995'],
  ['Anniversary', '26-Sep-2016'],
];

const data1 = [
  ['Email-ID', 'abcd@gmail.com'],
  ['Skype-ID', 'abcd@gmail.com'],
  ['Facebook-ID ', 'abcd@facebook.com'],
  ['Instagram-ID', 'abcd@insta.com'],
  ['Twitter-ID ', 'abcd@twitter.com'],
  ['Contact Number', '+91-9876543210'],
  ['Whatsapp', '+91-9876543210'],
];

const data2 = [
  ['Tax Number', 'N/A'],
  ['Lead source', 'Email Marketing'],
  ['Last Enquired', '3 months ago'],
  ['Created On', '16-Sep-2023'],
  ['Website', 'N/A'],
  ['Service Type ', 'Greece Wedding Tour'],
  ['Last Purchased ', 'N/A'],
];

const B2C_ClientsPage = () => {
  return (
    <div className='section'>
      <div className='nav'>
        <h4>B2C Clients/Client Profile</h4>
        <div className='client'>
          <a href='#'>Create New Itinerary</a>
          <a href='#'>Edit Itinerary</a>
        </div>
      </div>
      <div className='top'>
        <div className='search'>
          <span className='pro'>K</span>
          <span className='font'>Abaslon</span>
        </div>

        <div className='search s1'>
          <span className='number'>1</span>
          <span className='font'>Enquiries</span>
        </div>
        <div className='search s1'>
          <span className='number'>1</span>
          <span className='font'>Quotation Sent</span>
        </div>
        <div className='search s1'>
          <span className='number'>1</span>
          <span className='font'>Invoice Sent</span>
        </div>
        <div className='search s1'>
          <span className='number'>INR 12,000</span>
          <span className='font'>Business Revenue (Paid)</span>
        </div>
      </div>
      <div className='center'>
        <button className='btn btn-primary'>Client Details</button>
        <button className='btn'>Enquired</button>
        <button className='btn'>Quotation Sent</button>
        <button className='btn'>Invoice Sent</button>
        <button className='btn'>Payment History</button>
        <button className='btn'>Documents/Files</button>
        <button className='btn'>Family Members</button>
      </div>
      <div className='bottom'>
        <div className='left'>
          <table>
            {data.map(([key, value]) => (
              <tr key={key}>
                <th>{key} </th>
                <td>: {value}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className='middle'>
          <table>
            {data1.map(([key, value]) => (
              <tr key={key}>
                <th>{key} </th>
                <td>: {value}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className='right'>
          <table>
            {data2.map(([key, value]) => (
              <tr key={key}>
                <th>{key} </th>
                <td>: {value}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default B2C_ClientsPage;
