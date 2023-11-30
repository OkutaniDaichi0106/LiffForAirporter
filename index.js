class LIFF{
	constructor(){
		console.log("LIFF()...");
		let name;
		let idToken;
		const confirmButton = document.getElementById("confirm");
		const nameForm = document.getElementById("name");
		let message;
		liff.init({
			liffId: "2001929504-zbp7ajrv", 
			withLoginOnExternalBrowser: true,
		})
		.then(() => {
			confirmButton.addEventListener("click", ()=>{
				name = nameForm.value;
				idToken = liff.getIDToken();
				message = name + ":" + idToken;
				liff.sendMessages([
					{
						type: "text",
						text: message,
					},
				])
				.then(()=>{
					liff.closeWindow();
				});
			})
			
		})
		.catch((err) => {
			console.log(err);
		});
	}
}

new LIFF();