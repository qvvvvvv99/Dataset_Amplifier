const imgName = document.getElementById('imgfileName');
const labName = document.getElementById('labfileName');
let imgFile, labFile;

function loadImgFile(input) {
    imgFile = input.files[0];

    imgName.value = imgFile.name;
    var newImage = document.getElementById("preview-image");
    newImage.src = URL.createObjectURL(imgFile);

    newImage.style.objectFit = "contain";
};

function loadLabFile(input){
    labFile = input.files[0];

    labName.value = labFile.name;
}

function labelingImg(){
    if(!imgName.textContent){
        alert('이미지 파일이 비었습니다!');
    }
    else if(!labName.textContent){
        alert('라벨링 파일이 비었습니다!');
    }
    else if(imgName.textContent.replace(".jpg", "") != labName.textContent.replace(".txt", "")){
        alert('파일 이름이 다릅니다!')
    }
    else{
        //showTextFile();
        createLabelFile();
       // createImageFile();
        document.getElementById("wrapper2").style.display='block';
    }
}

function createLabelFile() {
    let reader = new FileReader();
    reader.onload = function () {
        // 일단 라벨링 파일 끝에 엔터 없는 경우
        var text = reader.result;
        var copy = text.slice();
        // 라벨링 증폭 7가지 경우
        var newText90 = rotate90(copy);
        var newText180 = rotate180(copy);
        var newText270 = rotate270(copy);
        var newTextReverseUD = reverseUD(copy);
        var newTextReverseRL = reverseRL(copy);
        var newTextReverseUD90 = reverseUD90(copy);
        var newTextReverseRL90 = reverseRL90(copy);
        //saveToFile_Chrome(labFile.name, newText);

        // 화면에 결과 보여주기
        console.log(text);
        console.log(newText90);
        console.log(newText180);
        console.log(newText270);
        console.log(newTextReverseUD);
        console.log(newTextReverseRL);
        console.log(newTextReverseUD90);
        console.log(newTextReverseRL90);
    };
    reader.readAsText(labFile, "UTF-8");
}

function createImageFile(){
    var reader = new FileReader();
    reader.readAsDataURL(imgFile); //파일을 읽는 메서드 

    reader.onload = function(){
        
    }
}

function checkDisable(checkbox)
{
    let text = document.getElementById('DSname');
    if(checkbox.checked == true ){
        text.disabled = false;
        upload = 1;
	} else 
	{
        text.disabled = true;
        upload = 0;
	}
}

function showTextFile() {
    let reader = new FileReader();
    reader.onload = function () {
        document.getElementById("preview").innerText = reader.result;
    };
    reader.readAsText(labFile, "UTF-8");
 }

 // txt 파일 저장 함수
 function saveToFile_Chrome(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });
    objURL = window.URL.createObjectURL(blob);
            
    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
    var a = document.createElement('a');
    a.download = fileName;
    a.href = objURL;
    a.click();
}

function rotate90(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+(1-words[2])+" "+words[1]+" "+words[4]+" "+words[3]+"\n";
    }
    return res;
}

function rotate180(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+(1-words[1])+" "+(1-words[2])+" "+words[3]+" "+words[4]+"\n";
    }
    return res;
}

function rotate270(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+words[2]+" "+(1-words[1])+" "+words[4]+" "+words[3]+"\n";
    }
    return res;
}

function reverseUD(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+words[1]+" "+(1-words[2])+" "+words[3]+" "+words[4]+"\n";
    }
    return res;
}

function reverseRL(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+(1-words[1])+" "+words[2]+" "+words[3]+" "+words[4]+"\n";
    }
    return res;
}

function reverseUD90(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+words[2]+" "+words[1]+" "+words[4]+" "+words[3]+"\n";
    }
    return res;
}

function reverseRL90(copy){
    var res = '';
    var lines = copy.split(/\r\n|\n/);
    for(var line = 0; line < lines.length; line++){
        var words = lines[line].split(' ');
        res += words[0]+" "+(1-words[2])+" "+(1-words[1])+" "+words[4]+" "+words[3]+"\n";
    }
    return res;
}
