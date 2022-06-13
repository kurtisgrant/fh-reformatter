import React from 'react';

function TradeConfirmation(props) {
  const d = props.data;
  return (
    <div>
      <h4>Order Id: {d.get("Order Id")} ({d.get("Client Name")})</h4>
      <h5>Fund Account: {d.get("Fund Account:")}</h5>
      <table style={{ width: "100%", fontSize: 10 }}>
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "30%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td><b>&#8226; Rep</b></td>
            <td>{d.get("Rep")}</td>
            <td><b>&#8226; Client Name</b></td>
            <td>{d.get("Client Name")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Plan #</b></td>
            <td>{d.get("Plan #")}</td>
            <td><b>&#8226; Fund Account:</b></td>
            <td>{d.get("Fund Account:")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Product</b></td>
            <td>{d.get("Product")}</td>
            <td><b>&#8226; Price</b></td>
            <td>{d.get("Price")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Trade Date</b></td>
            <td>{d.get("Trade Date")}</td>
            <td><b>&#8226; Amount Type</b></td>
            <td>{d.get("Amount Type")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Trx Type</b></td>
            <td>{d.get("Trx Type")}</td>
            <td><b>&#8226; Amount Value</b></td>
            <td>{d.get("Amount Value")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Commission Rate</b></td>
            <td>{d.get("Commission Rate")}</td>
            <td><b>&#8226; Commission Est</b></td>
            <td>{d.get("Commission Est")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Net/Gross</b></td>
            <td>{d.get("Net/Gross")}</td>
            <td><b>&#8226; Approval</b></td>
            <td>{d.get("Approval")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Contribution/Withdrawl Code</b></td>
            <td>{d.get("Contribution/Withdrawl Code")}</td>
            <td><b>&#8226; Order Status</b></td>
            <td>{d.get("Order Status")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Order Source Id</b></td>
            <td>{d.get("Order Source Id")}</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td><b>&#8226; Settlement Source</b></td>
            <td>{d.get("Settlement Source")}</td>
            <td></td>
            <td></td>
          </tr>

          <tr><td colSpan="4"><hr /></td></tr>

          <tr>
            <td><b>&#8226; Source Id</b></td>
            <td>{d.get("Source Id")}</td>
            <td><b>&#8226; Order Id</b></td>
            <td>{d.get("Order Id")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Response From</b></td>
            <td>{d.get("Response From")}</td>
            <td><b>&#8226; Response Time</b></td>
            <td>{d.get("Response Time")}</td>
          </tr>

          <tr>
            <td><b>&#8226; Response Code</b></td>
            <td>{d.get("Response Code")}</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td><b>&#8226; Response Message</b></td>
            <td colSpan="3"><b>{d.get("Response Message")}</b></td>
          </tr>

        </tbody>

      </table>
      <br />
    </div>
  );
}

export default TradeConfirmation;