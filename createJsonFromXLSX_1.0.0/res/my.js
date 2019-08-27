window.setTimeout(function() {
	/*
      FileReader共有4种读取方法：
      1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
      2.readAsBinaryString(file)：将文件读取为二进制字符串
      3.readAsDataURL(file)：将文件读取为Data URL
      4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
    */
    var xlsxData;//读取完成的数据
    var rABS = true; //是否将文件读取为二进制字符串
	
    /**
     * 表格文件文件上传
     * @param obj
     */
    function xlsxUpload(obj) {
		console.log(obj);
        if (!obj.files) {
            return;
        }
        var file = obj.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            if (rABS) {
                xlsxData = XLSX.read(btoa(fixData(data)), {//手动转化
                    type: 'base64'
                });
            } else {
                xlsxData = XLSX.read(data, {
                    type: 'binary'
                });
            }
            // xlsxData.SheetNames[0]是获取Sheets中第一个Sheet的名字
            // xlsxData.Sheets[Sheet名]获取第一个Sheet的数据
            var jsonData = XLSX.utils.sheet_to_json(xlsxData.Sheets[xlsxData.SheetNames[0]]);// 拿到表格对象。默认表格第一行是字段，从第二行开始是数据
			console.log(jsonData);
            if (fixData1(jsonData)['EN']) {
                document.getElementById('en-box').innerHTML = '<pre>' + JSON.stringify(fixData1(jsonData)['EN'], null, 4) + '</pre>';
                document.getElementById('en-box').parentNode.style.display = 'block';
            }

            if (fixData1(jsonData)['AR']) {
                document.getElementById('ar-box').innerHTML = '<pre>' + JSON.stringify(fixData1(jsonData)['AR'], null, 4) + '</pre>';
                document.getElementById('ar-box').parentNode.style.display = 'block';
            }

            if (fixData1(jsonData)['ID']) {
                document.getElementById('id-box').innerHTML = '<pre>' + JSON.stringify(fixData1(jsonData)['ID'], null, 4) + '</pre>';
                document.getElementById('id-box').parentNode.style.display = 'block';
            }
            if (fixData1(jsonData)['RU']) {
                document.getElementById('ru-box').innerHTML = '<pre>' + JSON.stringify(fixData1(jsonData)['RU'], null, 4) + '</pre>';
                document.getElementById('ru-box').parentNode.style.display = 'block';
            }

            if (fixData1(jsonData)['FR']) {
                document.getElementById('fr-box').innerHTML = '<pre>' + JSON.stringify(fixData1(jsonData)['FR'], null, 4) + '</pre>';
                document.getElementById('fr-box').parentNode.style.display = 'block';
            }

            if (fixData1(jsonData)['TR']) {
                document.getElementById('tr-box').innerHTML = '<pre>' + JSON.stringify(fixData1(jsonData)['TR'], null, 4) + '</pre>';
                document.getElementById('tr-box').parentNode.style.display = 'block';
            }

        };
        if (rABS) {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsBinaryString(file);
        }
    }

    function fixData1(jsonData) {
        var length = jsonData.length;
		console.log(length);
        var jsonNameArr = []; //用来存语言名字 如: [ 'EN', 'AR', 'FR' ]
        var jsonObj = {}; //用来存各个语言所拥有的词条
        for (var i = 0; i < length; i++) { //对词条进行循环读取
            for (var item in jsonData[i]) { //对同个词条不同语言进行遍历
                //若jsonNameArr中不存在改语言,就将该语言简写记录到数组中,并在jsonObj中写入 如:{ EN: {}, AR: {}, FR: {} }
                if (jsonNameArr.indexOf(item) == -1) {
                    jsonNameArr.push(item);
                    jsonObj[item] = {};
                }
            }
        }

        // 对jsonData数据进行操作, 取英语下的词条作为key
        for (var i = 0; i < length; i++) {
            var jsonKey = jsonData[i]['EN'].replace(/\r\n/g, '').replace(/\n/g, ' ').replace(/\r/g, ' ').replace(/[ ]+/g, ' ').trim();
            var jsonValue = jsonData[i]['EN'];

            jsonValue = jsonValue.replace(/\bX\b/g, '{value}').replace(/\r\n/g, '').replace(/\n/g, ' ').replace(/[ ]+/g, ' ').replace(/\r/g, ' ').trim();
            jsonObj['EN'][jsonKey] = jsonValue;

            jsonData[i]['AR'] && (jsonObj['AR'][jsonKey] = jsonData[i]['AR'].replace(/\n|\r/g, ' ')
                .replace(/\bX\b/g, '{value}')).replace(/[ ]+/g, ' ').trim();
            jsonData[i]['FR'] && (jsonObj['FR'][jsonKey] = jsonData[i]['FR'].replace(/\n|\r/g, ' ')
                .replace(/\bX\b/g, '{value}')).replace(/[ ]+/g, ' ').trim();
            jsonData[i]['TR'] && (jsonObj['TR'][jsonKey] = jsonData[i]['TR'].replace(/\n|\r/g, ' ')
                .replace(/\bX\b/g, '{value}')).replace(/[ ]+/g, ' ').trim();
            jsonData[i]['ID'] && (jsonObj['ID'][jsonKey] = jsonData[i]['ID'].replace(/\n|\r/g, ' ')
                .replace(/\bX\b/g, '{value}')).replace(/[ ]+/g, ' ').trim();
            jsonData[i]['RU'] && (jsonObj['RU'][jsonKey] = jsonData[i]['RU'].replace(/\n|\r/g, ' ')
                .replace(/\bX\b/g, '{value}')).replace(/[ ]+/g, ' ').trim();
        }

        return jsonObj;
    }

    /**
     * 文件流转BinaryString
     * @param data
     * @returns {string}
     */
    function fixData(data) {
        var o = '';
        var l = 0;
        var w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }

	document.getElementById('myInput').addEventListener ( 'change', function(){
		xlsxUpload(this);
	});
},500);
	

    