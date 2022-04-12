let mpp_notes = ['a-1', 'as-1', 'b-1', 'c0', 'cs0', 'd0', 'ds0', 'e0', 'f0', 'fs0', 'g0', 'gs0', 'a0', 'as0', 'b0', 'c1', 'cs1', 'd1', 'ds1', 'e1', 'f1', 'fs1', 'g1', 'gs1', 'a1', 'as1', 'b1', 'c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2', 'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a4', 'as4', 'b4', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a5', 'as5', 'b5', 'c6', 'cs6', 'd6', 'ds6', 'e6', 'f6', 'fs6', 'g6', 'gs6', 'a6', 'as6', 'b6', 'c7'];
let notes = {
	"a-1": "0",
	"as-1": "1",
	"b-1": "2",
	"c0": "3",
	"cs0": "4",
	"d0": "5",
	"ds0": "6",
	"e0": "7",
	"f0": "8",
	"fs0": "9",
	"g0": "10",
	"gs0": "11",
	"a0": "12",
	"as0": "13",
	"b0": "14",
	"c1": "15",
	"cs1": "16",
	"d1": "17",
	"ds1": "18",
	"e1": "19",
	"f1": "20",
	"fs1": "21",
	"g1": "22",
	"gs1": "23",
	"a1": "24",
	"as1": "25",
	"b1": "26",
	"c2": "27",
	"cs2": "28",
	"d2": "29",
	"ds2": "30",
	"e2": "31",
	"f2": "32",
	"fs2": "33",
	"g2": "34",
	"gs2": "35",
	"a2": "36",
	"as2": "37",
	"b2": "38",
	"c3": "39",
	"cs3": "40",
	"d3": "41",
	"ds3": "42",
	"e3": "43",
	"f3": "44",
	"fs3": "45",
	"g3": "46",
	"gs3": "47",
	"a3": "48",
	"as3": "49",
	"b3": "50",
	"c4": "51",
	"cs4": "52",
	"d4": "53",
	"ds4": "54",
	"e4": "55",
	"f4": "56",
	"fs4": "57",
	"g4": "58",
	"gs4": "59",
	"a4": "60",
	"as4": "61",
	"b4": "62",
	"c5": "63",
	"cs5": "64",
	"d5": "65",
	"ds5": "66",
	"e5": "67",
	"f5": "68",
	"fs5": "69",
	"g5": "70",
	"gs5": "71",
	"a5": "72",
	"as5": "73",
	"b5": "74",
	"c6": "75",
	"cs6": "76",
	"d6": "77",
	"ds6": "78",
	"e6": "79",
	"f6": "80",
	"fs6": "81",
	"g6": "82",
	"gs6": "83",
	"a6": "84",
	"as6": "85",
	"b6": "86",
	"c7": "87"
}

/*
 * 0xFFFF <- hex representation of utf-16
 *
 * 0b1111111111111111 <- binary representation of utf-16
 */

function bin2utf(str){
	let result = "";
	for (let i = 0; i < parseInt(str.length/16); i++){
		result += String.fromCharCode("0b" + str.slice(i*16,(i+1)*16));
	}
	return result;
}

function id2utf(id) {
	let result = "";
	for (let i = 0; i < 24; i += 4) {
		let code = "0x" + id.slice(i, i + 4);
		result += String.fromCharCode(code);
	}
	return result;
}
function utf2id(utf) {
	let result = "";
	for (let i = 0; i < utf.length; i++)
		result += utf.charCodeAt(i).toString(16).padStart(4, "0");
	return result;
}

/* 
 * Input would be #000000 to #ffffff
 * 
 * Colors are optional
 * 
 */
function color2utf(color) {
	let c = color.slice(1, color.length);
	return String.fromCharCode("0x00" + c.slice(0, 2)) + String.fromCharCode("0x" + c.slice(2, 6));
}

function utf2color(utf) {
	return "#" + utf.charCodeAt(0).toString(16).padStart(2, "0") + utf.charCodeAt(1).toString(16).padStart(4, "0");
}

function find_note(note) {
	return parseInt(notes[note]);
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
	return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
String.prototype.setChar = function (index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
// [{"m":"n","t":1649460746787,"n":[{"n":"gs0","v":0.697},{"d":136,"n":"cs2","v":0.697}],"p":"ead8a96b1e86280966d909d1"}]

// ex. [{"n":"d4","s":1},{"d":0,"n":"d4","v":0.539}]
// ex.2 [{"n": "d4","s": 1}, {"d": 0,"n": "d4","v": 0.539}, {"d": 185,"n": "fs4","v": 0.539}]
function note_buffer2utf(note_buffer) {
	let result = "";
	let length = 0;
	for (let note of note_buffer) {
		let n_part = find_note(note.n).toString(16).padStart(2, "0");
		let vel = parseInt(parseFloat(note.s ? 0 : note.v).map(0, 1, 0, 127)).toString(2).padStart(8, "0");
		let second_char = "";
		if (note.d) {
			second_char = "0x" + parseInt(note.d).toString(16).padStart(4, "0");
			vel = vel.setChar(0, '1');
		}
		let vel_part = parseInt(vel, 2).toString(16);
		let first_char = "0x" + vel_part + n_part;
		result += String.fromCharCode(first_char) + (second_char ? String.fromCharCode(second_char):"");
		length++;
	}
	let length_char = length.toString(16).padStart(8, "0");
	let length_1 = String.fromCharCode("0x" + length_char.slice(0, 4));
	let length_2 = String.fromCharCode("0x" + length_char.slice(4, 8));
	return length_1 + length_2 + result;
}

function utf2note_buffer(utf) {
	let note_buffer = [];
	let length = parseInt(utf.charCodeAt(0).toString(16).padStart(4, "0") + utf.charCodeAt(1).toString(16).padStart(4, "0"), 16);
	let i = 2;
	let note = {};
	let has_diff = false;
	while (note_buffer.length < length) {
		let bin_str = utf.charCodeAt(i).toString(2).padStart(16, "0");
		if (!has_diff) {
			let note_index = parseInt(bin_str.slice(8, 16), 2);
			note["n"] = mpp_notes[note_index];
			vel = parseInt(bin_str.slice(1, 8), 2);
			if (vel == 0)
				note["s"] = 1;
			else
				note["v"] = parseFloat(vel.map(0,127,0,1).toPrecision(3));
			if (bin_str[0] == "1") {
				has_diff = true;
			} else {
				note_buffer.push(note);
				note = {};
			}
		} else {
			note["d"] = parseInt(bin_str, 2);
			note_buffer.push(note);
			note = {};
			has_diff = false;
		}
		i++;
	}
	return {note_buffer,i};
}



function float2utf(num){
	if (num === 0)
		return "\x00\x00\x00\x00";
	if (num === Infinity)
		return bin2utf("0111111111110000000000000000000000000000000000000000000000000000");
	if (num === -Infinity)
		return bin2utf("1111111111110000000000000000000000000000000000000000000000000000");
	if (isNaN(num))
		return bin2utf("0111111111111111111111111111111111111111111111111111111111111111");
	let sign = num >= 0 ? "0" : "1";
	let exponent = (Math.abs(Math.floor(Math.log(num)/Math.log(2))+1023)).toString(2).padStart(11,"0");
	let tmp = num.toString(2).replace(".","");
	let mantissa = tmp.slice(tmp.indexOf('1')+1,tmp.lastIndexOf('1')+1).padEnd(52,"0");
	let str = sign+exponent+mantissa;
	return bin2utf(str);
}

function utf2float(utf){
	if (utf == "\x00\x00\x00\x00")
		return 0;
	let bin_str = "";
	for (let i = 0; i < utf.length; i++){
		bin_str += utf.charCodeAt(i).toString(2).padStart(16,"0");
	}
	if (bin_str.endsWith("111111111110000000000000000000000000000000000000000000000000000"))
		return bin_str[0] == "0" ? Infinity : -Infinity;
	if (bin_str == "0111111111111111111111111111111111111111111111111111111111111111")
		return NaN;
	let sign = bin_str[0] == "0" ? 1 : -1;
	let exponent = parseInt(bin_str.slice(1,12),2);
	let mantissa = 0;
	for (let i = 12; i < 64; i++)
		mantissa += parseInt(bin_str[i])*Math.pow(2,-(i-11));
	return sign*Math.pow(2,exponent-1023)*(1+mantissa);
}


// The messages compatible with this protocol
let valid_messages = ["n","t","m"];

// Client side
function construct_msg(arr){
	let obj = arr[0];
	let m = obj.m;
	if (!valid_messages.includes(m))
		return JSON.stringify(arr);
	let msg = m;
	if (m == "n"){
		msg += float2utf(parseFloat(obj.t));
		msg += note_buffer2utf(obj.n);
		msg += obj.p ? id2utf(obj.p):"";
	}
	else if (m == "t"){
		msg += float2utf(obj.e);
		msg += obj.t ? float2utf(obj.t):"";
	}
	else if (m == "m"){
		msg += float2utf(obj.x);
		msg += float2utf(obj.y);
		msg += obj.id ? id2utf(obj.id):"";
	}
	return msg;
}

function deconstruct_msg(utf){
	if (utf.length < 1) return undefined;
	let m = utf[0];
	if (!valid_messages.includes(m)) return JSON.parse(utf);
	let msg = {m};
	if (m == "n"){
		msg["t"] = utf2float(utf.slice(1,5));
		let {note_buffer,i} = utf2note_buffer(utf.slice(5,utf.length));
		msg["n"] = note_buffer;
		msg["p"] = utf.slice(5+i,utf.length) ? utf2id(utf.slice(5+i,utf.length)):"";
	}
	else if (m == "t"){
		msg["e"] = utf2float(utf.slice(1,5));
		msg["t"] = utf.slice(5,9) ? utf2float(utf.slice(5,9)):"";
	}
	else if (m == "m"){
		msg["x"] = utf2float(utf.slice(1,5));
		msg["y"] = utf2float(utf.slice(5,9));
		msg["id"] = utf.slice(9,13) ? utf2id(utf.slice(9,13)):"";
	}
	return [msg];
}
canread = false;
MPP.client.on("n", (msg) => {
	if (canread){
		arr = [msg];
		console.log(JSON.stringify(arr));
		console.log(JSON.stringify(deconstruct_msg(construct_msg(arr))));
		console.log("\n\n");
	}
});