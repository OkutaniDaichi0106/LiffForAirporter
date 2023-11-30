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
				name = nameForm.value;
				idToken = new LIFF().getIdToken();
				const message = `名前：${name}、ID：${idToken}`
				console.log(message);
				liff.sendMessages([
				{
					type: "text", 
					text: message,
				},
				]);
				liff.closeWindow();
			});
			
		}).catch((err) => {
			console.log(err);
		})
	}
	getIdToken(){
		const idToken = liff.getIDToken();
		return idToken;
	}
}

new LIFF();