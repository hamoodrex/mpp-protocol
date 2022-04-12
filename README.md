<div class=WordSection1>

<p class=MsoNormal><b><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>A big-endian UTF-16 protocol for MPP</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span
style='font-size:9.0pt;line-height:107%;font-family:"Comic Sans MS"'>&nbsp;</span></b></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Original message structure:</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Hi msg: [{m: “hi”}]</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Time msg: [{m: ”t”,e: ”date.now”}]</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Channel msg: [{m: &quot;ch&quot;,_id:
“channel-name”, set: {channel settings} }]</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Channel settings msg: [{m: &quot;chset&quot;, set: {channel
settings} }]</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Channel settings: {chat: true, color: '#3b5054',
color2: '#001014', visible: false, limit: 50}  </span><span style='font-size:
9.0pt;line-height:107%;font-family:Wingdings;color:red'>ß</span><span
style='font-size:9.0pt;line-height:107%;font-family:"Comic Sans MS";color:red'> 
ex.</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Note msg: [{m: &quot;n&quot;,t: self.noteBufferTime
+ self.serverTimeOffset, n: self.noteBuffer}]</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Etc…</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Each message has a “p” / “id” attached on receive from server.
We append that to the end of the entire message</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>data-type: (“Array”, “Object”, “String”, “JS Float (64 bits)”,
“Boolean”)</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>IDs: (0,1,2,3,4,5,6,7,8,9,a,b,c,d){24} 16 chars </span><span
style='font-size:9.0pt;line-height:107%;font-family:Wingdings'>as</span><span
style='font-size:9.0pt;line-height:107%;font-family:"Comic Sans MS"'> 4 bits </span><span
style='font-size:9.0pt;line-height:107%;font-family:Wingdings'>as</span><span
style='font-size:9.0pt;line-height:107%;font-family:"Comic Sans MS"'> Total
length = 24 chars </span><span style='font-size:9.0pt;line-height:107%;
font-family:Wingdings'>as</span><span style='font-size:9.0pt;line-height:107%;
font-family:"Comic Sans MS"'> 24x4 = 96 bits </span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
Wingdings'>as</span><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'> 96 / 16 = 6 </span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Etc…</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Representations</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=156 valign=top style='width:116.75pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Note</span></p>
  </td>
  <td width=471 valign=top style='width:353.05pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>2 byte 1<sup>st</sup>
  byte note,on/off, 2<sup>nd</sup> byte vel <b>(1 utf</b> <b>char)</b></span></p>
  </td>
 </tr>
 <tr>
  <td width=156 valign=top style='width:116.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Time/Coords (floats)</span></p>
  </td>
  <td width=471 valign=top style='width:353.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>64 bits <b>(4 utf</b> <b>chars)</b>
  for each x,y as well</span></p>
  </td>
 </tr>
 <tr>
  <td width=156 valign=top style='width:116.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Text</span></p>
  </td>
  <td width=471 valign=top style='width:353.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Keep default</span></b><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'> (eliminate JSON extras)</span></p>
  </td>
 </tr>
 <tr>
  <td width=156 valign=top style='width:116.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>IDs</span></p>
  </td>
  <td width=471 valign=top style='width:353.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>(6 utf</span></b><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'> <b>chars)</b></span></p>
  </td>
 </tr>
 <tr>
  <td width=156 valign=top style='width:116.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Color</span></p>
  </td>
  <td width=471 valign=top style='width:353.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><b><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>(2 utf</span></b><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'> <b>chars)</b>
  technically 1.5 but we need to ceil the number</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>We will be applying the protocol to just 3 messages: “n”, “t”,
“m”</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>The code will automatically decide which messages to pass as
they or and which to convert for compression of data.<br clear=all
style='page-break-before:always'>
</span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=210 valign=top style='width:157.25pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Note:</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:black'>00000000 00000000</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>&nbsp;</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Difference (optional):</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>00000000 00000000</span></p>
  </td>
  <td width=417 valign=top style='width:312.55pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:red'>8 - 16</span><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>: actual note, from 0 </span><span
  style='font-size:9.0pt;font-family:Wingdings'>as</span><span style='font-size:
  9.0pt;font-family:"Comic Sans MS"'> 87 in decimal</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:#2E74B5'>1 - 7</span><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>: Note vel 2^7 values
  mapped (1,100), if all 0’s then note off</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>0: ‘1’ note has buffer
  time, ‘0’ note has no buffer time</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>&nbsp;</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>If there is a buffer time
  diff in the note we append 1 utf to represent difference</span></p>
  </td>
 </tr>
 <tr>
  <td width=210 valign=top style='width:157.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Float: </span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:black'>00000000 00000000<br>00000000 00000000<br>00000000 00000000<br>00000000 00000000</span></p>
  </td>
  <td width=417 valign=top style='width:312.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>\x0000\x0000\x0000\x0000
  to \xFFFF\xFFFF\xFFFF\xFFFF</span></p>
  <p class=MsoNormal style='margin-top:6.0pt;margin-right:0in;margin-bottom:
  6.0pt;margin-left:0in;line-height:normal;background:white'><span
  style='color:black'><a
  href="https://en.wikipedia.org/wiki/File:IEEE_754_Double_Floating_Point_Format.svg"><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:#0645AD;text-decoration:
  none'><img border=0 width=398 height=51 id="Picture 4" style="background-color: white;"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/IEEE_754_Double_Floating_Point_Format.svg/927px-IEEE_754_Double_Floating_Point_Format.svg.png"></span></a></span></p>
  </td>
 </tr>
 <tr>
  <td width=210 valign=top style='width:157.25pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>ID<span style='color:
  #A5A5A5'> </span></span></p>
  </td>
  <td width=417 valign=top style='width:312.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>Each utf (2 bytes)
  represents 4 chars of the 24 char uuid</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>\x0000 as “0000”</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS"'>\x0af3 as “0af3”</span></p>
  </td>
 </tr>
 <tr>
  <td width=210 valign=top style='width:157.25pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:black'>Color:</span></p>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:black'>00000000 00000000<br>00000000 00000000</span></p>
  </td>
  <td width=417 valign=top style='width:312.55pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;line-height:normal'><span
  style='font-size:9.0pt;font-family:"Comic Sans MS";color:black'>0-7: is not
  used we need only 3 bytes for RGB \xRRGGBB</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Message protocol</span></p>

<p class=MsoNormal><b><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Msg : “t”</span></b></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>“t”</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>e-part-1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>e-part-2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>e-part-3</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>e-part-4</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>t-part-1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>t-part-2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>t-part-3</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>t-part-4</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:black'>Msg size = 18 (bytes)</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:black'>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Msg: “n”</span></b></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>“n”</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>Amount
  of notes utf part 1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>Amount
  of notes utf part 2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>Note
  1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>Note
  1 diff</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>Note
  ..</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS"'>Note
  N</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>p-part-1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>p-part-2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>p-part-3</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>p-part-4</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>Note: Length of an array is represented by 32 bits,
so we use 2 utf-16 chars instead of a float representation with N being the
amount of notes.</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:black'>Msg min size = 14 + 2*N (bytes)</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:black'>Msg max size = 14 + 4*N (bytes)</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:black'>&nbsp;</span></p>

<p class=MsoNormal><b><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS"'>Msg: “m”</span></b></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>“m”</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>x-part-1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>x-part-2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>x-part-3</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>x-part-4</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>y-part-1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>y-part-2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>y-part-3</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>y-part-4</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>id-part-1</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>id-part-2</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>id-part-3</span></p>
  </td>
 </tr>
 <tr>
  <td width=626 valign=top style='width:469.8pt;border:solid windowtext 1.0pt;
  border-top:none;background:#D9D9D9;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0in;text-align:center;
  line-height:normal'><span style='font-size:9.0pt;font-family:"Comic Sans MS";
  color:black'>id-part-4</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:red'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-size:9.0pt;line-height:107%;font-family:
"Comic Sans MS";color:black'>Msg size = 26 bytes</span></p>

</div>
