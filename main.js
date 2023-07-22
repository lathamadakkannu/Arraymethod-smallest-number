var a=[];
var n=parseInt(prompt("Enter the value"));
for (let i=0; i<n; i++){
	a[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given array =" +a+"<br><br>");

var b=[];
var c=0;

for (let i=0; i<a.length; i++){
	for(let j=i+1; j<a.length; j++){
		if(a[i]>a[j]){
			c=a[i];
			a[i]=a[j];
			a[j]=c;
		}
	}
	b.push(a[i]);
}
document.write("ascending order = "+b+"<br>"+"<br>");
document.write("the 3rd smallest number"+"<br>"+"<br>"+b[2])
