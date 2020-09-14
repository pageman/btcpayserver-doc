(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{641:function(t,e,r){"use strict";r.r(e);var o=r(26),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"try-it-out"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#try-it-out"}},[t._v("#")]),t._v(" Try it out")]),t._v(" "),r("p",[t._v("This section goes through the process of creating an account and store on our public BTCPay server. (For evaluation purpose)")]),t._v(" "),r("p",[t._v("You can also follow along in this video:")]),t._v(" "),r("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/xh3Eac66qc4/hqdefault.jpg)"},attrs:{href:"http://www.youtube.com/watch?v=xh3Eac66qc4","data-id":"xh3Eac66qc4"}},[r("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/xh3Eac66qc4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),r("h2",{attrs:{id:"create-your-first-invoice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-invoice"}},[t._v("#")]),t._v(" Create your first invoice")]),t._v(" "),r("p",[t._v("For an in production setup, skip to "),r("RouterLink",{attrs:{to:"/TryItOut/#mainnet"}},[t._v("Mainnet")])],1),t._v(" "),r("h3",{attrs:{id:"testnet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[t._v("#")]),t._v(" Testnet")]),t._v(" "),r("p",[t._v("First let's create a new store:")]),t._v(" "),r("ol",[r("li",[t._v("Go to the "),r("a",{attrs:{href:"https://testnet.demo.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testnet website"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("On the right side click on "),r("strong",[t._v("Create an account")]),t._v(" to "),r("a",{attrs:{href:"https://testnet.demo.btcpayserver.org/Account/Register",target:"_blank",rel:"noopener noreferrer"}},[t._v("create an account"),r("OutboundLink")],1),t._v(" or "),r("strong",[t._v("Sign In")]),t._v(" if you already have an account.")]),t._v(" "),r("li",[t._v("After having signed in, go to "),r("strong",[t._v("Stores")]),t._v(" and "),r("a",{attrs:{href:"https://testnet.demo.btcpayserver.org/stores",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a new store"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Let's use Electrum to create a testnet wallet for your store:")]),t._v(" "),r("ol",[r("li",[t._v("Download "),r("a",{attrs:{href:"https://electrum.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electrum"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Run Electrum with parameter "),r("code",[t._v("--testnet")]),t._v(" (i.e. on Mac OS using "),r("code",[t._v("open -a Electrum.app --args --testnet")]),t._v(")")]),t._v(" "),r("li",[t._v("Click through the wizard and create a test wallet, using the default settings Electrum proposes")]),t._v(" "),r("li",[t._v('After the wallet is set up, go to "Wallet" > "Information" in the Electrum menu.')]),t._v(" "),r("li",[t._v('Copy the "Master Public Key" string (starting by '),r("code",[t._v("*pub...")]),t._v(")")])]),t._v(" "),r("p",[t._v("Let's configure the store so it uses your Electrum wallet:")]),t._v(" "),r("ol",[r("li",[t._v("Go to the Settings page of your store in BTCPay")]),t._v(" "),r("li",[t._v('On the "General Settings" page you will find the "Derivation Scheme" section - click the "Modify" action for BTC')]),t._v(" "),r("li",[t._v('Paste the "Master Public Key" copied from Electrum into the "Derivation Scheme" text field and click "Continue"')]),t._v(" "),r("li",[t._v('Confirm the addresses by clicking on "Receive" in Electrum: The "Receiving address" should match the first address shown in BTCPay')]),t._v(" "),r("li",[t._v("After that your test wallet should appear on the "),r("a",{attrs:{href:"https://testnet.demo.btcpayserver.org/wallets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wallets page"),r("OutboundLink")],1),t._v(" of your BTCPay account")])]),t._v(" "),r("p",[t._v("Then you can create an invoice, either through")]),t._v(" "),r("ul",[r("li",[t._v('the "Invoice" menu on the website or')]),t._v(" "),r("li",[t._v("the process documented on the "),r("RouterLink",{attrs:{to:"/CustomIntegration/"}},[t._v("Custom integration")])],1)]),t._v(" "),r("h3",{attrs:{id:"mainnet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mainnet"}},[t._v("#")]),t._v(" Mainnet")]),t._v(" "),r("p",[t._v("First choose where to setup your store.\nEither:")]),t._v(" "),r("ul",[r("li",[t._v("Host your store on someone else's BTCPay Server. You can find a list of third-party hosts "),r("RouterLink",{attrs:{to:"/ThirdPartyHosting/#the-list-of-btcpay-third-party-hosts"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("li",[t._v("Or "),r("RouterLink",{attrs:{to:"/Deployment/"}},[t._v("deploy your own")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("Click on the following links for detailed instructions on how to "),r("RouterLink",{attrs:{to:"/RegisterAccount/"}},[t._v("Register an account")]),t._v(", "),r("RouterLink",{attrs:{to:"/CreateStore/"}},[t._v("Create your first store")]),t._v(" and "),r("RouterLink",{attrs:{to:"/WalletSetup/"}},[t._v("Connect your own wallet")])],1),t._v(" "),r("p",[t._v("Then you can create an invoice, either through")]),t._v(" "),r("ul",[r("li",[t._v('The "Invoice" menu on the website or')]),t._v(" "),r("li",[t._v("The process documented on the "),r("RouterLink",{attrs:{to:"/CustomIntegration/"}},[t._v("Custom integration")])],1)]),t._v(" "),r("p",[t._v("See the "),r("RouterLink",{attrs:{to:"/WhatsNext/"}},[t._v("What's Next")]),t._v(" page for other options on how to continue exploring BTCPay.")],1),t._v(" "),r("h2",{attrs:{id:"btcpay-server-demo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-demo"}},[t._v("#")]),t._v(" BTCPay Server Demo")]),t._v(" "),r("p",[t._v("To see BTCPay Server in action, visit our demo apps and stores or check out some of the stores using BTCPay Server in production.")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://store.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BTCPay Demo Store"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mainnet.demo.btcpayserver.org/apps/87kj5yKay8mB4UUZcJhZH5TqDKMD3CznjwLjiu1oYZXe/pos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Point of Sale Demo"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://directory.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("In-production stores"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);