class LIFF{
	constructor(){
		console.log("LIFF()...");

		liff.init({
			liffId: "2001929504-zbp7ajrv", 
			withLoginOnExternalBrowser: true,
		}).then(() => {
			//start program
			let name;
			let idToken;
			const confirmButton = document.getElementById("confirm");
			const nameForm = document.getElementById("name");
			confirmButton.addEventListener("click", ()=>{
				liff.sendMessages([{
					type: text, 
					tsxt: "click!"
				}]);
				name = nameForm.value;
				idToken = liff.getIDToken();
				const message = `名前：${name}、ID：${idToken}`
				console.log(message);
				liff.sendMessages([{
					type: "text", 
					text: message
				}]);
				liff.closeWindow();
			});
			
		}).catch((err) => {
			console.log(err);
		})
	}
}

new LIFF();