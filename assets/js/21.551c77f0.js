(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{393:function(e,t,o){e.exports=o.p+"assets/img/vs-solution-explorer.71213904.png"},394:function(e,t,o){e.exports=o.p+"assets/img/docker-compose-up-dev.82514a01.png"},395:function(e,t,o){e.exports=o.p+"assets/img/vs-debug-console.9b8e7386.png"},396:function(e,t,o){e.exports=o.p+"assets/img/regtest-btcpay.b26d507a.png"},577:function(e,t,o){"use strict";o.r(t);var a=o(26),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"setup-developer-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-developer-environment"}},[e._v("#")]),e._v(" Setup Developer Environment")]),e._v(" "),a("p",[e._v("Table of content:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#setup-developer-environment"}},[e._v("Setup Developer Environment")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#developer-resources"}},[e._v("Developer Resources")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#windows-setup-software"}},[e._v("Windows Setup Software")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#git-setup"}},[e._v("Git Setup")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#fork-btcpay-server-repository"}},[e._v("Fork BTCPay Server Repository")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#clone-btcpay-server-repository"}},[e._v("Clone BTCPay Server Repository")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#create-a-development-feature-branch"}},[e._v("Create a Development Feature Branch")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#visual-studio-setup"}},[e._v("Visual Studio Setup")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#bitcoin-regtest-network-setup"}},[e._v("Bitcoin Regtest Network Setup")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#build-local-btcpay-server"}},[e._v("Build Local BTCPay Server")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#visual-studio-code-changes-in-your-local-btcpay-server"}},[e._v("Visual Studio Code Changes In Your Local BTCPay Server")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#sync-forked-btcpay-server-repository"}},[e._v("Sync Forked BTCPay Server Repository")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#commit-code-to-make-pull-request"}},[e._v("Commit Code To Make Pull Request")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#create-a-branch-of-a-pull-request"}},[e._v("Create a Branch of a Pull Request")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#delete-local-branch"}},[e._v("Delete Local Branch")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#working-with-docker-containers"}},[e._v("Working with Docker Containers")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#questions"}},[e._v("Questions")])])])])]),e._v(" "),a("p",[e._v("This guide will help you set up your developer environment to prepare you for later contributions to the BTCPay Server repositories. A variety of beginner tools are used in the guide below to help you get started with development. Once you understand the general setup process, feel free to use any tools that you like.")]),e._v(" "),a("p",[e._v("If you are looking for how to make a simple code change such as fixing a typo or copy change, check out the simplified "),a("RouterLink",{attrs:{to:"/Contribute/ContributeWrite/WriteSoftware/"}},[e._v("WriteSoftware")]),e._v(" tutorial instead. If you are an advanced developer with a local environment already set up for development, you can skip ahead to the "),a("RouterLink",{attrs:{to:"/LocalDev/"}},[e._v("LocalDevelopment")]),e._v(" documentation.")],1),e._v(" "),a("h2",{attrs:{id:"developer-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-resources"}},[e._v("#")]),e._v(" Developer Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://guides.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Guides"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/LocalDev/"}},[e._v("BTCPay Commands and Concepts")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/LocalDev/#videos"}},[e._v("Environment Setup Videos (Linux, Mac, Windows)")])],1)]),e._v(" "),a("h2",{attrs:{id:"windows-setup-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-setup-software"}},[e._v("#")]),e._v(" Windows Setup Software")]),e._v(" "),a("p",[e._v("Software to install to follow this guide:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Community Edition"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dotnet.microsoft.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core SDK 3.1+"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("PowerShell (included in Windows OS)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitBash"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Desktop"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.Github.com account"),a("OutboundLink")],1),e._v(" (sign up)")])]),e._v(" "),a("p",[e._v("Note: "),a("em",[e._v("This guide assumes installations in default locations. Take note if you have a different file directory structure.")])]),e._v(" "),a("h2",{attrs:{id:"git-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-setup"}},[e._v("#")]),e._v(" Git Setup")]),e._v(" "),a("h3",{attrs:{id:"fork-btcpay-server-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-btcpay-server-repository"}},[e._v("#")]),e._v(" Fork BTCPay Server Repository")]),e._v(" "),a("ul",[a("li",[e._v("Open a web browser and login to your www.Github.com account.")]),e._v(" "),a("li",[e._v("Navigate to the "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Repository"),a("OutboundLink")],1),e._v(" and press the "),a("code",[e._v("Fork")]),e._v(" button to create your own copy of the BTCPay Server repository on Github.")]),e._v(" "),a("li",[e._v("Next open Github Desktop and login so that Github Desktop knows about your www.Github.com account and connects to it.")])]),e._v(" "),a("h3",{attrs:{id:"clone-btcpay-server-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-btcpay-server-repository"}},[e._v("#")]),e._v(" Clone BTCPay Server Repository")]),e._v(" "),a("ul",[a("li",[e._v("In GitHub Desktop, use the "),a("code",[e._v("Add")]),e._v(" button and see the option clone repository.")]),e._v(" "),a("li",[e._v("If you are using your www.Github.com credentials in GitHub Desktop, you will see your BTCPay Server repository that you just forked on www.Github.com. Select it and take note of the local path shown below. (by default it will be something like "),a("code",[e._v("C:\\Users\\SatoshisComputer\\Documents\\GitHub\\btcpayserver")]),e._v(" for clarity, lets call it our: "),a("em",[e._v("clone local path")]),e._v(") then press clone.")]),e._v(" "),a("li",[e._v("Now you will see the BTCPay Server repository has been cloned in your GitHub Desktop and you will be on the "),a("em",[e._v("master branch")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"create-a-development-feature-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-development-feature-branch"}},[e._v("#")]),e._v(" Create a Development Feature Branch")]),e._v(" "),a("ul",[a("li",[e._v("Next we will practice working with our BTCPay Server repository that we just cloned to our computer using Github Desktop.")]),e._v(" "),a("li",[e._v("When developing, you may want to work on different features at once. To do that, we typically want to create multiple feature branches instead of making all changes to the master branch.")]),e._v(" "),a("li",[e._v("We're using GitBash and some Git commands, so open GitBash. (If you prefer to only use GitHub desktop instead of GitBash, you can create branches there instead.)")]),e._v(" "),a("li",[e._v("Once you have a GitBash terminal open, we need to change directory to our clone of BTCPay Server repository.")]),e._v(" "),a("li",[e._v("To do this, navigate to our "),a("em",[e._v("clone local path")]),e._v(" with the change directory command: "),a("code",[e._v("$ cd Documents/Github/btcpayserver")])]),e._v(" "),a("li",[e._v("You can see your clone of BTCPay Server is on the branch called "),a("code",[e._v("master")])]),e._v(" "),a("li",[e._v("Make a copy of your master branch to do some development on it, with the command: "),a("code",[e._v("$ git branch OurNewDevelopmentBranch")])]),e._v(" "),a("li",[e._v("Let's view all the branches we have now, with the command: "),a("code",[e._v("$ git branch")]),e._v(" you can see we have master and OurNewDevelopmentBranch")]),e._v(" "),a("li",[e._v("In Git, we now have a copy of our forked BTCPay Server repository (our clone). When we want to switch between branches (copies of our clone), we need to tell Git which branch our development code changes should be assigned to. We do this by checking out our branch, with the command: "),a("code",[e._v("$ git checkout OurNewDevelopmentBranch")])]),e._v(" "),a("li",[e._v("Now you are now on OurNewDevelopmentBranch in GitBash.")]),e._v(" "),a("li",[e._v("Open your GitHub Desktop and you can see you are no longer on master and you are now on "),a("code",[e._v("OurNewDevelopmentBranch")])]),e._v(" "),a("li",[e._v("In the top menu in Github Desktop click: "),a("code",[e._v("Repository > Show In Explorer")])])]),e._v(" "),a("h2",{attrs:{id:"visual-studio-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-setup"}},[e._v("#")]),e._v(" Visual Studio Setup")]),e._v(" "),a("ul",[a("li",[e._v("It will open a File Explorer to the BTCPay Server repository folder. Without opening any of the folders shown, look for the "),a("code",[e._v("btcpayserver.sln")]),e._v(" item and right click it to "),a("code",[e._v("Open with > Visual Studio")]),e._v(". You may need to choose Open with > Choose another app ... and look for Visual Studio if you have never opened this kind of file before.")]),e._v(" "),a("li",[e._v("To get your Visual Studio set up choose "),a("code",[e._v("View > Solution Explorer")]),e._v(" from the top menu. In this solution explorer you will see all the BTCPay Server files and folders.")]),e._v(" "),a("li",[e._v("The top project is BTCPay Server, make sure it's in bold. If it isn't, right click it and choose Set as StartUp Project.")]),e._v(" "),a("li",[e._v("Your Visual Studio is now set up and ready.")])]),e._v(" "),a("figure",[a("img",{attrs:{src:o(393),alt:"VS Solution Explorer"}})]),e._v(" "),a("h2",{attrs:{id:"bitcoin-regtest-network-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-regtest-network-setup"}},[e._v("#")]),e._v(" Bitcoin Regtest Network Setup")]),e._v(" "),a("ul",[a("li",[e._v("For the next step make sure that you have Docker-Compose installed (included with Docker Desktop). Open a PowerShell terminal and navigate to your "),a("em",[e._v("clone local path")]),e._v(" and into the BTCPay Server.Tests directory with the command: "),a("code",[e._v("$ cd Documents/Github/btcpayserver/BTCPayServer.Tests")])]),e._v(" "),a("li",[e._v("The BTCPay Server.Tests project contains the docker files needed to run our docker commands that will start all the project dependencies and create a local Regtest network.")]),e._v(" "),a("li",[e._v("In Powershell, start the docker services with the command: "),a("code",[e._v("docker-compose up dev")]),e._v("(you must be in the BTCPay Server.Tests to run this command).")]),e._v(" "),a("li",[e._v("In your PowerShell terminal you will first see the necessary docker images being pulled, then containers being built. If the build is successful the containers will all show as done.")])]),e._v(" "),a("figure",[a("img",{attrs:{src:o(394),alt:"BTCPayServer.Tests powershell terminal"}})]),e._v(" "),a("h2",{attrs:{id:"build-local-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-local-btcpay-server"}},[e._v("#")]),e._v(" Build Local BTCPay Server")]),e._v(" "),a("ul",[a("li",[e._v("Back in Visual Studio, click: "),a("code",[e._v("Build > Build Solution")])]),e._v(" "),a("li",[e._v("In the output window, a successful build will look something like this: "),a("code",[e._v("========== Build: 6 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========")])]),e._v(" "),a("li",[e._v("Next press "),a("code",[e._v("Debug > Start Debugging")])]),e._v(" "),a("li",[e._v("First a Visual Studio debug console will open which shows information about the status of your local BTCPay Server.")]),e._v(" "),a("li",[e._v("Next a local BTCPay Server will be created in a web browser, showing on the home page that it's in "),a("code",[e._v("REGTEST")]),e._v(" mode.")]),e._v(" "),a("li",[e._v("You now will have three windows to view: BTCPay Server browser session, our Visual Studio debug console and our BTCPay Server.Tests powershell terminal.")]),e._v(" "),a("li",[e._v("Register a new user in your BTCPay Server and see the registration event is shown in your Visual Studio debug console.")])]),e._v(" "),a("figure",[a("img",{attrs:{src:o(395),alt:"VS Debug Console"}})]),e._v(" "),a("figure",[a("img",{attrs:{src:o(396),alt:"Local Regtest BTCPay"}})]),e._v(" "),a("h2",{attrs:{id:"visual-studio-code-changes-in-your-local-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-changes-in-your-local-btcpay-server"}},[e._v("#")]),e._v(" Visual Studio Code Changes In Your Local BTCPay Server")]),e._v(" "),a("ul",[a("li",[e._v("Make changes to code in Visual Studio (Ex: modify the "),a("code",[e._v("Welcome to your BTCPay")]),e._v(" text in the "),a("code",[e._v("~\\BTCPayServer\\Views\\Account\\Login.cshtml")]),e._v(" file)")]),e._v(" "),a("li",[e._v("Refresh the page to see your text changes on the home page.")]),e._v(" "),a("li",[e._v("Some code changes require re-start of Debugging for changes to take effect.")]),e._v(" "),a("li",[e._v("Add breakpoints in Visual Studio and see those breakpoints get hit when you try to use a feature in your local BTCPay Server instance.")])]),e._v(" "),a("h2",{attrs:{id:"sync-forked-btcpay-server-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sync-forked-btcpay-server-repository"}},[e._v("#")]),e._v(" Sync Forked BTCPay Server Repository")]),e._v(" "),a("ul",[a("li",[e._v("With many contributors adding code changes to the Master BTCPay Server Repository, sometimes your forked copy can fall behind, unless you merge new changes into your fork.")]),e._v(" "),a("li",[e._v("If you go to your Fork of BTCPay Server on www.Github.com you will see a message saying that your branch is behind by some commits. Example: "),a("code",[e._v("This branch is 32 commits behind btcpayserver:master")]),e._v(".")]),e._v(" "),a("li",[e._v("To update, you can use GitBash or simply use Github Desktop by clicking through the synchronization prompts.")]),e._v(" "),a("li",[e._v("Open a GitBash terminal and update your BTCPay Server repository with the following commands.")]),e._v(" "),a("li",[e._v("First always navigate to your "),a("em",[e._v("clone local path")]),e._v(" with the command: "),a("code",[e._v("$ cd Documents/Github/btcpayserver")]),e._v(" and make sure you are on "),a("code",[e._v("master")]),e._v(" branch.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge upstream/master\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("SomeCommitMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\nMessage prompt: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".your branch is ahead of origin master by "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"X"')]),e._v(" commits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". use "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push to publish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin master \n")])])]),a("h2",{attrs:{id:"commit-code-to-make-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-code-to-make-pull-request"}},[e._v("#")]),e._v(" Commit Code To Make Pull Request")]),e._v(" "),a("ul",[a("li",[e._v("After you have made some code changes on a feature branch (Example: A feature branch called "),a("code",[e._v("Fix/BugBranch")]),e._v(") and you want to make a Pull Request to the BTCPay Server Repository. Open a GitBash terminal and navigate to your "),a("em",[e._v("clone local path")]),e._v(" with the command: "),a("code",[e._v("$ cd Documents/Github/btcpayserver")]),e._v(" and make sure you are on the "),a("strong",[e._v("correct branch")]),e._v(" that you want to commit and use git status to check the files changed are the ones you want to commit.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" status \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit\n\nText Editor appears to "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" your commit message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nExample Commit Message: Fix bug "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" update button\n\nAccept Changes: Ctrl + x\nSave Changes: Shift + y\nClose Editor with: Enter\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin Fix/BugBranch\n")])])]),a("p",[e._v("See your new branch has been created on you www.Github.com BTCPay Server Fork, review changes and create Pull Request.")]),e._v(" "),a("h2",{attrs:{id:"create-a-branch-of-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-branch-of-a-pull-request"}},[e._v("#")]),e._v(" Create a Branch of a Pull Request")]),e._v(" "),a("p",[e._v("A great way to contribute without having to be an advanced developer is by testing other contributor's pull requests. Manual testing is a great way to help other's and ensure that BTCPay Server code changes are working properly. Here is an example of how to make a branch of someone else's pull request, using this previous PoS Pull Request https://github.com/btcpayserver/btcpayserver/pull/454. Open a GitBash terminal and navigate to your "),a("em",[e._v("clone local path")]),e._v(" with the command: "),a("code",[e._v("$ cd Documents/Github/btcpayserver")]),e._v(" and use "),a("code",[e._v("git status")]),e._v(" to check you don't have any other staged commits (git status is clear).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" status\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream pull/454/head:pos-new-design\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("to your new testing branch called pos-new-design"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("Note: Be sure to change the /454/ pull request number to the number of the one you would like to test. You can typically leave /head: as is, and add the name of the pull request branch after it.")]),e._v(" "),a("h2",{attrs:{id:"delete-local-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-local-branch"}},[e._v("#")]),e._v(" Delete Local Branch")]),e._v(" "),a("p",[e._v("If you delete a branch on your forked BTCPay repository on Github.com, your local copy on your machine will still remain, unless you delete it:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -D "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Note: You can't delete a branch if you have it checked out, so checkout another branch like "),a("code",[e._v("master")]),e._v(" first, as shown in the example above.")]),e._v(" "),a("h2",{attrs:{id:"working-with-docker-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-docker-containers"}},[e._v("#")]),e._v(" Working with Docker Containers")]),e._v(" "),a("p",[e._v("If you want to use Docker Commands when developing locally, you can run the following commands in the "),a("code",[e._v("BTCPayServer.Tests")]),e._v(" directory.")]),e._v(" "),a("ul",[a("li",[e._v("Show running containers "),a("code",[e._v("docker ps")])]),e._v(" "),a("li",[e._v("Show logs for a container "),a("code",[e._v("docker ps logs <container>")])]),e._v(" "),a("li",[e._v("Start Docker containers "),a("code",[e._v("docker-compose up dev")])]),e._v(" "),a("li",[e._v("Stop Docker containers "),a("code",[e._v("docker-compose down")])]),e._v(" "),a("li",[e._v("Destroy Docker containers "),a("code",[e._v("docker-compoose down --v")])])]),e._v(" "),a("h2",{attrs:{id:"questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions")]),e._v(" "),a("p",[e._v("If you have questions about the BTCPay Server local development setup, you can join the "),a("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),a("OutboundLink")],1),e._v(". If you have questions about any of the other tools or commands, etc. it's likely you can find answers to your questions by doing a search on the internet or on "),a("a",{attrs:{href:"https://stackoverflow.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("StackOverflow"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);