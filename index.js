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
			liff.sendMessages([
				{
					type: "text",
					text: "aaaa",
				},
			])
			.then(()=>{
				liff.closeWindow();
			});
		})
		.catch((err) => {
			console.log(err);
		});
	}
}

new LIFF();