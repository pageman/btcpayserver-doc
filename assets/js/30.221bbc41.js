(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{448:function(t,e,i){t.exports=i.p+"assets/img/Invoices.9727bbc0.png"},449:function(t,e,i){t.exports=i.p+"assets/img/InvoiceFiltering.4c42d63f.gif"},614:function(t,e,i){"use strict";i.r(e);var a=i(26),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"invoices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoices"}},[t._v("#")]),t._v(" Invoices")]),t._v(" "),a("p",[t._v("The invoices page lists the invoices from all stores and "),a("RouterLink",{attrs:{to:"/Apps/"}},[t._v("apps")]),t._v(" and "),a("RouterLink",{attrs:{to:"/PaymentRequests/"}},[t._v("payment requests")]),t._v(". It cumulatively sorts invoices by date and allows plenty of customization options for a better invoice management.")],1),t._v(" "),a("h2",{attrs:{id:"managing-invoices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-invoices"}},[t._v("#")]),t._v(" Managing Invoices")]),t._v(" "),a("figure",[a("img",{attrs:{src:i(448),alt:"Invoices Interface"}})]),t._v(" "),a("h3",{attrs:{id:"invoice-filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-filtering"}},[t._v("#")]),t._v(" Invoice Filtering")]),t._v(" "),a("p",[t._v("Invoices can be filtered via the quick filters located next to the search button or via the advanced filters which can be toggled by clicking the (Help) link on the top of the page. Users can filter invoices by store, order id, item id, status or a date.")]),t._v(" "),a("figure",[a("img",{attrs:{src:i(449),alt:"Invoice Filtering"}})]),t._v(" "),a("h3",{attrs:{id:"invoice-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-export"}},[t._v("#")]),t._v(" Invoice Export")]),t._v(" "),a("p",[t._v("Invoices can be exported in CSV or JSON format. For more information about invoice export and accounting, "),a("RouterLink",{attrs:{to:"/Accounting/"}},[t._v("see this page")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"invoice-statuses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-statuses"}},[t._v("#")]),t._v(" Invoice Statuses")]),t._v(" "),a("p",[t._v("Table below lists and describes common invoice statuses in BTCPay and suggests common actions. Actions are just recommendations. It's up to users to define best course of action for their use-case and business.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Invoice Status")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Action")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("New")]),t._v(" "),a("td",[t._v("Not paid, invoice timer still has not expired")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("New (paidPartial)")]),t._v(" "),a("td",[t._v("Not paid in full, invoice timer still has not expired")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("Expired")]),t._v(" "),a("td",[t._v("Not paid, invoice timer expired")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("Paid")]),t._v(" "),a("td",[t._v("Paid, but has not received sufficient amount of confirmations specified in the Store Settings")]),t._v(" "),a("td",[t._v("Wait for confirmations (The invoice should become - complete)")])]),t._v(" "),a("tr",[a("td",[t._v("Confirmed*")]),t._v(" "),a("td",[t._v("Paid, confirmed, by reaching the number of confirmations in store settings but has not received the default number (6) of confirmations in BTCPay.")]),t._v(" "),a("td",[t._v("Wait for remaining confirmations, or proceed if store settings confirmations is acceptable")])]),t._v(" "),a("tr",[a("td",[t._v("Complete")]),t._v(" "),a("td",[t._v("Paid, completed, received sufficient amount of confirmations in store")]),t._v(" "),a("td",[t._v("Fulfil the order")])]),t._v(" "),a("tr",[a("td",[t._v("Complete (marked)")]),t._v(" "),a("td",[t._v("Status was manually changed to complete from an invalid or expired status")]),t._v(" "),a("td",[t._v("Store admin has marked the payment as complete")])]),t._v(" "),a("tr",[a("td",[t._v("Expired (paidPartial)**")]),t._v(" "),a("td",[t._v("Paid, not in full amount, and expired")]),t._v(" "),a("td",[t._v("Contact buyer to arrange a refund or ask for them to pay their due. Optionally mark invoice as complete or invalid")])]),t._v(" "),a("tr",[a("td",[t._v("Expired (paidLate)")]),t._v(" "),a("td",[t._v("Paid, in full amount, after expired")]),t._v(" "),a("td",[t._v("Contact buyer to arrange a refund or process order if late confirmations are acceptable.")])]),t._v(" "),a("tr",[a("td",[t._v("Paid (paidOver)")]),t._v(" "),a("td",[t._v("Paid more than the invoice amount, but has not received sufficient amount of confirmations specified in the Store Settings")]),t._v(" "),a("td",[t._v("Wait for confirmations. The invoice should become - Complete (Paid Over)")])]),t._v(" "),a("tr",[a("td",[t._v("Complete (paidOver)")]),t._v(" "),a("td",[t._v("Paid more than the invoice amount, completed, received sufficient amount of confirmations")]),t._v(" "),a("td",[t._v("Contact buyer to arrange a refund for the extra amount, or optionally wait for buyer to contact you")])]),t._v(" "),a("tr",[a("td",[t._v("Invalid***")]),t._v(" "),a("td",[t._v("Paid, but failed to receive sufficient amount of confirmations within the time specified in store settings")]),t._v(" "),a("td",[t._v("Check the transaction on a blockchain explorer, if it received sufficient confirmations, mark as complete")])]),t._v(" "),a("tr",[a("td",[t._v("Invalid (marked)")]),t._v(" "),a("td",[t._v("Status was manually changed to invalid from a complete or expired status")]),t._v(" "),a("td",[t._v("Store admin has marked the payment as invalid")])]),t._v(" "),a("tr",[a("td",[t._v("Invalid (paidOver)")]),t._v(" "),a("td",[t._v("Paid more than the invoice amount, but failed to receive sufficient amount of confirmations within the time specified in store settings")]),t._v(" "),a("td",[t._v("Check the transaction on a blockchain explorer, if it received sufficient confirmations, mark as complete")])])])]),t._v(" "),a("ul",[a("li",[t._v("*Invoices paid via the "),a("RouterLink",{attrs:{to:"/LightningNetwork/"}},[t._v("Lightning Network")]),t._v(" immediately go to a completed state, as their confirmation is instant.")],1),t._v(" "),a("li",[t._v("**Paid Partial invoice usually happens when a buyer pays the invoice from the exchange wallet  which takes a fee for their service and deducts it from a total. In some cases, it happens when buyer enters an  incorrect amount in their wallet.")]),t._v(" "),a("li",[t._v("***Invalid - If you're receiving a lot of invalid invoices in your store, you may want to "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[t._v("adjust invalid invoice time in store settings")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);