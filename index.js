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
		}).then(() => {
			//start program
			// confirmButton.addEventListener("click", function(){
			// 	name = nameForm.value;
			// 	idToken = liff.getIDToken();
			// 	message = `名前：${name}、ID：${idToken}`
			// 	console.log(message);

			// 	liff.sendMessages([{
			// 		type: "text", 
			// 		text: message
			// 	}]).then(()=>{
			// 		//liff.closeWindow();
			// 	});
			// });

		}).catch((err) => {
			console.log(err);
		});
		
		liff.sendMessages([{
			type: "text",
			text: "aaaa"
		}]).then(()=>{
			liff.closeWindow();
		});
	}
}

new LIFF();