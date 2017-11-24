// Obj 2 atomicGL exporter 
// author: Remi COZOT - IRISA/University of Rennes 1
sol_sable=function(){
this.vertices =[
-22.2581,0,14.8768, // vertice0
-16.6612,-7.3128,13.8154, // vertice1
-23.2894,-7.3128,13.8154, // vertice2
-13.8161,0,15.9503, // vertice3
-16.6612,-7.3128,13.8154, // vertice4
-22.2581,0,14.8768, // vertice5
-13.8161,0,15.9503, // vertice6
-14.8474,-7.3128,13.8154, // vertice7
-16.6612,-7.3128,13.8154, // vertice8
-5.4661,0,15.9503, // vertice9
-5.2337,-0.62086,14.6797, // vertice10
-14.8474,-7.3128,13.8154, // vertice11
-5.4661,0,15.9503, // vertice12
-5.2337,-0.62086,14.6797, // vertice13
-4.458,-7.3128,13.8154, // vertice14
-14.8474,-7.3128,13.8154, // vertice15
4.4872,-7.3128,13.8154, // vertice16
11.4811,0,14.8768, // vertice17
4.4872,-7.3128,13.8154, // vertice18
-5.2337,-0.62086,14.6797, // vertice19
11.4811,0,14.8768, // vertice20
26.0612,-7.3128,13.8154, // vertice21
4.4872,-7.3128,13.8154, // vertice22
27.0925,0,14.8768, // vertice23
27.0925,0,14.8768, // vertice24
61.5699,-14.09,14.7711, // vertice25
26.0612,-7.3128,13.8154, // vertice26
27.0925,0,14.8768, // vertice27
108.002,-2.3102e-14,33.1257, // vertice28
61.5699,-14.09,14.7711, // vertice29
108.002,-2.3102e-14,33.1257, // vertice30
95.7242,-19,7.2605, // vertice31
61.5699,-14.09,14.7711, // vertice32
154.29,-17.47,9.5231, // vertice33
95.7242,-19,7.2605, // vertice34
108.002,-2.3102e-14,33.1257, // vertice35
154.29,-17.47,9.5231, // vertice36
125.929,-17.8924,6.3617, // vertice37
95.7242,-19,7.2605, // vertice38
154.29,-17.47,9.5231, // vertice39
125.929,-23.04,-0.63203, // vertice40
125.929,-17.8924,6.3617, // vertice41
162.742,-23.04,-9.9348, // vertice42
125.929,-23.04,-0.63203, // vertice43
154.29,-17.47,9.5231, // vertice44
129.568,2.3099e-14,-11.8009, // vertice45
125.929,-23.04,-0.63203, // vertice46
162.742,-23.04,-9.9348, // vertice47
129.568,2.3099e-14,-11.8009, // vertice48
103.769,0,-17.5894, // vertice49
125.929,-23.04,-0.63203, // vertice50
103.769,0,-17.5894, // vertice51
125.929,-17.8924,6.3617, // vertice52
125.929,-23.04,-0.63203, // vertice53
125.929,-17.8924,6.3617, // vertice54
103.769,0,-17.5894, // vertice55
67.7226,-23.04,2.4452, // vertice56
73.876,0,-5.381, // vertice57
67.7226,-23.04,2.4452, // vertice58
103.769,0,-17.5894, // vertice59
27.0925,0,5.2221, // vertice60
67.7226,-23.04,2.4452, // vertice61
73.876,0,-5.381, // vertice62
27.0925,0,5.2221, // vertice63
26.0612,-7.3128,7.6907, // vertice64
67.7226,-23.04,2.4452, // vertice65
25.9464,0,5.2221, // vertice66
26.0612,-7.3128,7.6907, // vertice67
27.0925,0,5.2221, // vertice68
25.9464,0,5.2221, // vertice69
22.515,-7.3128,7.6907, // vertice70
16.423,-7.3128,7.6907, // vertice71
11.4811,0,5.2221, // vertice72
25.9464,0,5.2221, // vertice73
17.4544,-5.7753e-15,3.8448, // vertice74
11.4811,0,5.2221, // vertice75
22.3344,-5.7753e-15,3.8448, // vertice76
11.2908,-7.3128,7.6907, // vertice77
11.4811,0,5.2221, // vertice78
-5.1617,-7.3128,7.6907, // vertice79
-4.1304,0,5.2221, // vertice80
11.4811,0,5.2221, // vertice81
-11.9597,-7.3128,7.6907, // vertice82
-17.4897,-7.3128,7.6907, // vertice83
-19.5885,5.1638e-17,5.2221, // vertice84
-4.1304,0,5.2221, // vertice85
-16.4584,0,3.7809, // vertice86
-19.5885,5.1638e-17,5.2221, // vertice87
-10.9284,0,3.7809, // vertice88
-26.7988,-7.3128,7.6907, // vertice89
-19.5885,5.1638e-17,5.2221, // vertice90
-62.4462,-10.69,-1.8094, // vertice91
-26.7988,-7.3128,7.6907, // vertice92
-19.5885,5.1638e-17,5.2221, // vertice93
-47.1505,2.8864e-20,-10.5242, // vertice94
-62.4462,-10.69,-1.8094, // vertice95
-47.1505,2.8864e-20,-10.5242, // vertice96
-90.929,-9.19,-17.9967, // vertice97
-62.4462,-10.69,-1.8094, // vertice98
-47.1505,2.8864e-20,-10.5242, // vertice99
-86.2165,0,-22.0181, // vertice100
-90.929,-9.19,-17.9967, // vertice101
-104.778,0,-44.8272, // vertice102
-90.929,-9.19,-17.9967, // vertice103
-86.2165,0,-22.0181, // vertice104
-90.929,-9.19,-17.9967, // vertice105
-104.778,0,-44.8272, // vertice106
-115.385,-5.45,-38.4809, // vertice107
-104.778,0,-44.8272, // vertice108
-134.846,-5.45,-54.8808, // vertice109
-115.385,-5.45,-38.4809, // vertice110
-104.778,0,-44.8272, // vertice111
-133.072,0,-60.2761, // vertice112
-134.846,-5.45,-54.8808, // vertice113
-133.072,0,-60.2761, // vertice114
-159.258,0,-75.9597, // vertice115
-134.846,-5.45,-54.8808, // vertice116
-134.846,-5.45,-54.8808, // vertice117
-159.258,0,-75.9597, // vertice118
-186.163,-11.4305,-63.641, // vertice119
-159.258,0,-75.9597, // vertice120
-201.787,-15.59,-65.0097, // vertice121
-186.163,-11.4305,-63.641, // vertice122
-159.258,0,-75.9597, // vertice123
-201.787,0,-81.3697, // vertice124
-201.787,-15.59,-65.0097, // vertice125
-180.523,0,-78.6647, // vertice126
-169.89,0,-77.3122, // vertice127
-201.787,-15.59,-65.0097, // vertice128
-163.698,-5.45,-48.4948, // vertice129
-186.163,-11.4305,-63.641, // vertice130
-201.787,-15.59,-50.5648, // vertice131
-163.698,-5.45,-48.4948, // vertice132
-201.787,-15.59,-50.5648, // vertice133
-201.787,0,-28.5848, // vertice134
-159.258,0,-32.3948, // vertice135
-163.698,-5.45,-48.4948, // vertice136
-201.787,0,-28.5848, // vertice137
-141.604,0,-27.2539, // vertice138
-163.698,-5.45,-48.4948, // vertice139
-159.258,0,-32.3948, // vertice140
-134.652,-9.7456,-37.5011, // vertice141
-163.698,-5.45,-48.4948, // vertice142
-141.604,0,-27.2539, // vertice143
-163.698,-5.45,-48.4948, // vertice144
-134.652,-9.7456,-37.5011, // vertice145
-186.163,-11.4305,-63.641, // vertice146
-134.652,-9.7456,-37.5011, // vertice147
-134.846,-5.45,-54.8808, // vertice148
-186.163,-11.4305,-63.641, // vertice149
-115.385,-5.45,-38.4809, // vertice150
-134.846,-5.45,-54.8808, // vertice151
-134.652,-9.7456,-37.5011, // vertice152
-90.929,-9.19,-17.9967, // vertice153
-115.385,-5.45,-38.4809, // vertice154
-134.652,-9.7456,-37.5011, // vertice155
-90.929,-9.19,-17.9967, // vertice156
-134.652,-9.7456,-37.5011, // vertice157
-98.1884,-9.66,-10.6604, // vertice158
-98.1884,-9.66,-10.6604, // vertice159
-134.652,-9.7456,-37.5011, // vertice160
-141.604,0,-27.2539, // vertice161
-98.1884,-9.66,-10.6604, // vertice162
-141.604,0,-27.2539, // vertice163
-113.223,0,-7.1825, // vertice164
-87.5157,0,10.6828, // vertice165
-98.1884,-9.66,-10.6604, // vertice166
-113.223,0,-7.1825, // vertice167
-79.4988,-5.45,3.4921, // vertice168
-98.1884,-9.66,-10.6604, // vertice169
-87.5157,0,10.6828, // vertice170
-79.4988,-5.45,3.4921, // vertice171
-90.929,-9.19,-17.9967, // vertice172
-98.1884,-9.66,-10.6604, // vertice173
-63.8447,-8,13.1468, // vertice174
-90.929,-9.19,-17.9967, // vertice175
-79.4988,-5.45,3.4921, // vertice176
-62.4462,-10.69,-1.8094, // vertice177
-90.929,-9.19,-17.9967, // vertice178
-63.8447,-8,13.1468, // vertice179
-26.7988,-7.3128,7.6907, // vertice180
-62.4462,-10.69,-1.8094, // vertice181
-63.8447,-8,13.1468, // vertice182
-26.7988,-7.3128,7.6907, // vertice183
-63.8447,-8,13.1468, // vertice184
-26.7988,-7.3128,13.8154, // vertice185
-25.7675,0,14.8768, // vertice186
-26.7988,-7.3128,13.8154, // vertice187
-63.8447,-8,13.1468, // vertice188
-25.7675,0,14.8768, // vertice189
-26.7988,-7.3128,13.8154, // vertice190
-22.2581,0,14.8768, // vertice191
-23.2894,-7.3128,13.8154, // vertice192
-26.7988,-7.3128,7.6907, // vertice193
-26.7988,-7.3128,13.8154, // vertice194
-17.4897,-7.3128,7.6907, // vertice195
-16.6612,-7.3128,13.8154, // vertice196
-11.9597,-7.3128,7.6907, // vertice197
-14.8474,-7.3128,13.8154, // vertice198
-4.458,-7.3128,13.8154, // vertice199
-5.1617,-7.3128,7.6907, // vertice200
11.2908,-7.3128,7.6907, // vertice201
4.4872,-7.3128,13.8154, // vertice202
26.0612,-7.3128,13.8154, // vertice203
16.423,-7.3128,7.6907, // vertice204
22.515,-7.3128,7.6907, // vertice205
26.0612,-7.3128,7.6907, // vertice206
67.7226,-23.04,2.4452, // vertice207
26.0612,-7.3128,7.6907, // vertice208
26.0612,-7.3128,13.8154, // vertice209
67.7226,-23.04,2.4452, // vertice210
26.0612,-7.3128,13.8154, // vertice211
61.5699,-14.09,14.7711, // vertice212
95.7242,-19,7.2605, // vertice213
67.7226,-23.04,2.4452, // vertice214
61.5699,-14.09,14.7711, // vertice215
125.929,-17.8924,6.3617, // vertice216
67.7226,-23.04,2.4452, // vertice217
95.7242,-19,7.2605, // vertice218
-25.7675,0,14.8768, // vertice219
-63.8447,-8,13.1468, // vertice220
-63.8447,0,21.6268, // vertice221
-63.8447,-8,13.1468, // vertice222
-79.4988,-5.45,3.4921, // vertice223
-63.8447,0,21.6268, // vertice224
-63.8447,0,21.6268, // vertice225
-79.4988,-5.45,3.4921, // vertice226
-87.5157,0,10.6828, // vertice227
129.568,2.3099e-14,-11.8009, // vertice228
162.742,-23.04,-9.9348, // vertice229
161.976,6.8762e-19,-19.9609, // vertice230
161.976,6.8762e-19,-19.9609, // vertice231
162.742,-23.04,-9.9348, // vertice232
186.274,-1.6391e-23,-38.2636, // vertice233
186.274,-1.6391e-23,-38.2636, // vertice234
162.742,-23.04,-9.9348, // vertice235
184.909,-23.04,-23.0959, // vertice236
204.93,-17.3,11.9744, // vertice237
184.909,-23.04,-23.0959, // vertice238
162.742,-23.04,-9.9348, // vertice239
204.93,-17.3,11.9744, // vertice240
197.343,-23.04,-53.2316, // vertice241
184.909,-23.04,-23.0959, // vertice242
197.343,-23.04,-53.2316, // vertice243
186.274,-1.6391e-23,-38.2636, // vertice244
184.909,-23.04,-23.0959, // vertice245
198.606,0,-53.2316, // vertice246
186.274,-1.6391e-23,-38.2636, // vertice247
197.343,-23.04,-53.2316, // vertice248
204.93,-17.3,11.9744, // vertice249
162.742,-23.04,-9.9348, // vertice250
176.522,-16.28,6.8575, // vertice251
176.522,-16.28,6.8575, // vertice252
162.742,-23.04,-9.9348, // vertice253
154.29,-17.47,9.5231, // vertice254
176.522,-16.28,6.8575, // vertice255
154.29,-17.47,9.5231, // vertice256
137.523,-2.2576e-14,41.8698, // vertice257
154.29,-17.47,9.5231, // vertice258
130.167,-2.3101e-14,50.994, // vertice259
137.523,-2.2576e-14,41.8698, // vertice260
154.29,-17.47,9.5231, // vertice261
108.002,-2.3102e-14,33.1257, // vertice262
130.167,-2.3101e-14,50.994, // vertice263
176.522,-16.28,6.8575, // vertice264
137.523,-2.2576e-14,41.8698, // vertice265
150.419,-2.3101e-14,48.4097, // vertice266
176.522,-16.28,6.8575, // vertice267
150.419,-2.3101e-14,48.4097, // vertice268
166.563,-2.3101e-14,48.4097, // vertice269
204.93,-17.3,11.9744, // vertice270
176.522,-16.28,6.8575, // vertice271
166.563,-2.3101e-14,48.4097, // vertice272
204.93,-17.3,11.9744, // vertice273
166.563,-2.3101e-14,48.4097, // vertice274
181.857,-4.6203e-14,60.2967, // vertice275
204.93,-17.3,11.9744, // vertice276
181.857,-4.6203e-14,60.2967, // vertice277
197.343,-23.04,60.7233, // vertice278
197.343,-2.4742e-14,75.4133, // vertice279
197.343,-23.04,60.7233, // vertice280
181.857,-4.6203e-14,60.2967, // vertice281
11.4811,0,14.8768, // vertice282
-5.2337,-0.62086,14.6797, // vertice283
-4.1304,0,14.8768, // vertice284
-5.4661,0,14.8768, // vertice285
-4.1304,0,14.8768, // vertice286
-5.2337,-0.62086,14.6797, // vertice287
-5.4661,0,15.9503, // vertice288
-4.1304,0,14.8768, // vertice289
-5.4661,0,14.8768, // vertice290
-5.4661,0,15.9503 // vertice291
]
this.normals = [
0.061507,0.18931,-0.97999, // normal0
0.036559,0.49413,-0.86862, // normal1
0,0.54521,-0.8383, // normal2
0.061456,0.2576,-0.96429, // normal3
0.036559,0.49413,-0.86862, // normal4
0.061507,0.18931,-0.97999, // normal5
0.061456,0.2576,-0.96429, // normal6
-0.14722,0.66044,-0.73631, // normal7
0.036559,0.49413,-0.86862, // normal8
-0.24307,0.80902,-0.53516, // normal9
-0.1323,0.39973,-0.90704, // normal10
-0.14722,0.66044,-0.73631, // normal11
-0.24307,0.80902,-0.53516, // normal12
-0.1323,0.39973,-0.90704, // normal13
1.1349e-18,0.53504,-0.84483, // normal14
-0.14722,0.66044,-0.73631, // normal15
0.0027945,0.53812,-0.84286, // normal16
0.0032979,0.22081,-0.97531, // normal17
0.0027945,0.53812,-0.84286, // normal18
-0.1323,0.39973,-0.90704, // normal19
2.5896e-18,0.14364,-0.98963, // normal20
2.5896e-18,0.14364,-0.98963, // normal21
2.5896e-18,0.14364,-0.98963, // normal22
2.5896e-18,0.14364,-0.98963, // normal23
0.12533,0.31372,-0.94121, // normal24
0.083314,0.65173,-0.75386, // normal25
0.17413,0.87395,-0.45375, // normal26
0.12533,0.31372,-0.94121, // normal27
0.10416,0.7916,-0.6021, // normal28
0.083314,0.65173,-0.75386, // normal29
0.10416,0.7916,-0.6021, // normal30
-0.021701,0.89869,-0.43804, // normal31
0.083314,0.65173,-0.75386, // normal32
-0.10203,0.90661,-0.40944, // normal33
-0.021701,0.89869,-0.43804, // normal34
0.10416,0.7916,-0.6021, // normal35
-0.10203,0.90661,-0.40944, // normal36
0.16356,0.97458,-0.15313, // normal37
-0.021701,0.89869,-0.43804, // normal38
-0.10203,0.90661,-0.40944, // normal39
0.24642,0.95675,0.15462, // normal40
0.16356,0.97458,-0.15313, // normal41
0.22593,0.90725,0.35475, // normal42
0.24642,0.95675,0.15462, // normal43
-0.10203,0.90661,-0.40944, // normal44
0.01522,0.43421,0.90068, // normal45
0.24642,0.95675,0.15462, // normal46
0.22593,0.90725,0.35475, // normal47
0.01522,0.43421,0.90068, // normal48
0.29109,0.64668,0.70503, // normal49
0.24642,0.95675,0.15462, // normal50
0.29109,0.64668,0.70503, // normal51
0.16356,0.97458,-0.15313, // normal52
0.24642,0.95675,0.15462, // normal53
0.16356,0.97458,-0.15313, // normal54
0.29109,0.64668,0.70503, // normal55
0.21463,0.91481,0.34214, // normal56
0.29256,0.23658,0.92652, // normal57
0.21463,0.91481,0.34214, // normal58
0.29109,0.64668,0.70503, // normal59
0.14668,0.2902,0.94566, // normal60
0.21463,0.91481,0.34214, // normal61
0.29256,0.23658,0.92652, // normal62
0.14668,0.2902,0.94566, // normal63
0.14217,0.70373,0.6961, // normal64
0.21463,0.91481,0.34214, // normal65
-1.2549e-16,0.31984,0.94747, // normal66
0.14217,0.70373,0.6961, // normal67
0.14668,0.2902,0.94566, // normal68
-6.0634e-17,0.65434,0.7562, // normal69
-6.0634e-17,0.65434,0.7562, // normal70
4.2092e-17,0.65434,0.7562, // normal71
4.2092e-17,0.65434,0.7562, // normal72
-6.0634e-17,0.65434,0.7562, // normal73
1.2461e-32,1,-4.1934e-15, // normal74
4.2092e-17,0.65434,0.7562, // normal75
1.2461e-32,1,-4.1934e-15, // normal76
3.218e-17,0.65434,0.7562, // normal77
-1.9486e-17,0.31984,0.94747, // normal78
-1.8182e-17,0.56758,0.82332, // normal79
-1.6092e-17,0.65434,0.7562, // normal80
-4.3285e-17,0.31984,0.94747, // normal81
0,0.81236,0.58316, // normal82
-6.0724e-18,0.65434,0.7562, // normal83
-0.12478,0.67736,0.72499, // normal84
-1.6092e-17,0.65434,0.7562, // normal85
2.9615e-18,1,-2.1683e-17, // normal86
-0.12478,0.67736,0.72499, // normal87
2.9615e-18,1,-2.1683e-17, // normal88
-0.078939,0.9225,0.37784, // normal89
-0.12478,0.67736,0.72499, // normal90
-0.16055,0.92778,0.33682, // normal91
-0.078939,0.9225,0.37784, // normal92
-0.12478,0.67736,0.72499, // normal93
-0.27016,0.72157,0.63745, // normal94
-0.16055,0.92778,0.33682, // normal95
-0.27016,0.72157,0.63745, // normal96
-0.15602,0.94995,0.27065, // normal97
-0.16055,0.92778,0.33682, // normal98
-0.27016,0.72157,0.63745, // normal99
-0.45967,0.54317,0.70262, // normal100
-0.15602,0.94995,0.27065, // normal101
-0.3763,0.79095,0.48248, // normal102
-0.15602,0.94995,0.27065, // normal103
-0.45967,0.54317,0.70262, // normal104
-0.15602,0.94995,0.27065, // normal105
-0.3763,0.79095,0.48248, // normal106
-0.21665,0.91518,0.33987, // normal107
-0.3763,0.79095,0.48248, // normal108
-0.25472,0.87274,0.41646, // normal109
-0.21665,0.91518,0.33987, // normal110
-0.3763,0.79095,0.48248, // normal111
-0.34755,0.71437,0.60736, // normal112
-0.25472,0.87274,0.41646, // normal113
-0.34755,0.71437,0.60736, // normal114
-0.22884,0.82952,0.50943, // normal115
-0.25472,0.87274,0.41646, // normal116
-0.25472,0.87274,0.41646, // normal117
-0.22884,0.82952,0.50943, // normal118
-0.11377,0.99259,0.042708, // normal119
-0.22884,0.82952,0.50943, // normal120
-0.21567,0.91697,0.33564, // normal121
-0.11377,0.99259,0.042708, // normal122
-0.22884,0.82952,0.50943, // normal123
-0.087419,0.72117,0.68722, // normal124
-0.21567,0.91697,0.33564, // normal125
-0.087419,0.72117,0.68722, // normal126
-0.087419,0.72117,0.68722, // normal127
-0.21567,0.91697,0.33564, // normal128
0.056584,0.89111,-0.45024, // normal129
-0.11377,0.99259,0.042708, // normal130
-0.23042,0.92635,-0.29798, // normal131
0.056584,0.89111,-0.45024, // normal132
-0.23042,0.92635,-0.29798, // normal133
-0.10682,0.88792,-0.44741, // normal134
0.036073,0.94352,-0.32934, // normal135
0.056584,0.89111,-0.45024, // normal136
-0.10682,0.88792,-0.44741, // normal137
0.29183,0.82717,-0.48024, // normal138
0.056584,0.89111,-0.45024, // normal139
0.036073,0.94352,-0.32934, // normal140
0.080841,0.98559,-0.14856, // normal141
0.056584,0.89111,-0.45024, // normal142
0.29183,0.82717,-0.48024, // normal143
0.056584,0.89111,-0.45024, // normal144
0.080841,0.98559,-0.14856, // normal145
-0.11377,0.99259,0.042708, // normal146
0.080841,0.98559,-0.14856, // normal147
-0.25472,0.87274,0.41646, // normal148
-0.11377,0.99259,0.042708, // normal149
-0.21665,0.91518,0.33987, // normal150
-0.25472,0.87274,0.41646, // normal151
0.080841,0.98559,-0.14856, // normal152
-0.15602,0.94995,0.27065, // normal153
-0.21665,0.91518,0.33987, // normal154
0.080841,0.98559,-0.14856, // normal155
-0.15602,0.94995,0.27065, // normal156
0.080841,0.98559,-0.14856, // normal157
0.19142,0.91038,-0.36682, // normal158
0.19142,0.91038,-0.36682, // normal159
0.080841,0.98559,-0.14856, // normal160
0.29183,0.82717,-0.48024, // normal161
0.19142,0.91038,-0.36682, // normal162
0.29183,0.82717,-0.48024, // normal163
0.36963,0.7651,-0.52725, // normal164
0.24626,0.84007,-0.48336, // normal165
0.19142,0.91038,-0.36682, // normal166
0.36963,0.7651,-0.52725, // normal167
0.21763,0.88723,-0.40677, // normal168
0.19142,0.91038,-0.36682, // normal169
0.24626,0.84007,-0.48336, // normal170
0.21763,0.88723,-0.40677, // normal171
-0.15602,0.94995,0.27065, // normal172
0.19142,0.91038,-0.36682, // normal173
0.13038,0.86722,-0.48056, // normal174
-0.15602,0.94995,0.27065, // normal175
0.21763,0.88723,-0.40677, // normal176
-0.16055,0.92778,0.33682, // normal177
-0.15602,0.94995,0.27065, // normal178
0.13038,0.86722,-0.48056, // normal179
-0.078939,0.9225,0.37784, // normal180
-0.16055,0.92778,0.33682, // normal181
0.13038,0.86722,-0.48056, // normal182
-0.078939,0.9225,0.37784, // normal183
0.13038,0.86722,-0.48056, // normal184
-0.0010938,0.75583,-0.65477, // normal185
-0.037064,0.3538,-0.93459, // normal186
-0.0010938,0.75583,-0.65477, // normal187
0.13038,0.86722,-0.48056, // normal188
-0.037064,0.3538,-0.93459, // normal189
-0.0010938,0.75583,-0.65477, // normal190
0,0.14364,-0.98963, // normal191
0,0.54521,-0.8383, // normal192
-0.078939,0.9225,0.37784, // normal193
-0.0010938,0.75583,-0.65477, // normal194
-6.0724e-18,0.65434,0.7562, // normal195
0.036559,0.49413,-0.86862, // normal196
0,0.81236,0.58316, // normal197
-0.14722,0.66044,-0.73631, // normal198
1.1349e-18,0.53504,-0.84483, // normal199
-1.8182e-17,0.56758,0.82332, // normal200
3.218e-17,0.65434,0.7562, // normal201
0.0027945,0.53812,-0.84286, // normal202
0.17413,0.87395,-0.45375, // normal203
4.2092e-17,0.65434,0.7562, // normal204
-6.0634e-17,0.65434,0.7562, // normal205
0.14217,0.70373,0.6961, // normal206
0.21463,0.91481,0.34214, // normal207
0.14217,0.70373,0.6961, // normal208
0.17413,0.87395,-0.45375, // normal209
0.21463,0.91481,0.34214, // normal210
0.17413,0.87395,-0.45375, // normal211
0.083314,0.65173,-0.75386, // normal212
-0.021701,0.89869,-0.43804, // normal213
0.21463,0.91481,0.34214, // normal214
0.083314,0.65173,-0.75386, // normal215
0.16356,0.97458,-0.15313, // normal216
0.21463,0.91481,0.34214, // normal217
-0.021701,0.89869,-0.43804, // normal218
-0.037064,0.3538,-0.93459, // normal219
0.13038,0.86722,-0.48056, // normal220
0.19389,0.77734,-0.59846, // normal221
0.13038,0.86722,-0.48056, // normal222
0.21763,0.88723,-0.40677, // normal223
0.19389,0.77734,-0.59846, // normal224
0.19389,0.77734,-0.59846, // normal225
0.21763,0.88723,-0.40677, // normal226
0.24626,0.84007,-0.48336, // normal227
0.2243,0.39511,0.89083, // normal228
0.22593,0.90725,0.35475, // normal229
0.40152,0.37663,0.83483, // normal230
0.40152,0.37663,0.83483, // normal231
0.22593,0.90725,0.35475, // normal232
0.7066,0.25391,0.66049, // normal233
0.7066,0.25391,0.66049, // normal234
0.22593,0.90725,0.35475, // normal235
0.37148,0.87424,0.31257, // normal236
0.1784,0.96558,-0.18927, // normal237
0.37148,0.87424,0.31257, // normal238
0.22593,0.90725,0.35475, // normal239
0.1784,0.96558,-0.18927, // normal240
0.71645,0.53675,0.44564, // normal241
0.37148,0.87424,0.31257, // normal242
0.71645,0.53675,0.44564, // normal243
0.7066,0.25391,0.66049, // normal244
0.37148,0.87424,0.31257, // normal245
0.77111,-0.04227,0.6353, // normal246
0.7066,0.25391,0.66049, // normal247
0.71645,0.53675,0.44564, // normal248
0.1784,0.96558,-0.18927, // normal249
0.22593,0.90725,0.35475, // normal250
0.026239,0.92439,-0.38055, // normal251
0.026239,0.92439,-0.38055, // normal252
0.22593,0.90725,0.35475, // normal253
-0.10203,0.90661,-0.40944, // normal254
0.026239,0.92439,-0.38055, // normal255
-0.10203,0.90661,-0.40944, // normal256
-0.25603,0.81761,-0.51571, // normal257
-0.10203,0.90661,-0.40944, // normal258
-0.30452,0.80144,-0.51475, // normal259
-0.25603,0.81761,-0.51571, // normal260
-0.10203,0.90661,-0.40944, // normal261
0.10416,0.7916,-0.6021, // normal262
-0.30452,0.80144,-0.51475, // normal263
0.026239,0.92439,-0.38055, // normal264
-0.25603,0.81761,-0.51571, // normal265
0.071726,0.94317,-0.32447, // normal266
0.026239,0.92439,-0.38055, // normal267
0.071726,0.94317,-0.32447, // normal268
0.096447,0.94247,-0.32006, // normal269
0.1784,0.96558,-0.18927, // normal270
0.026239,0.92439,-0.38055, // normal271
0.096447,0.94247,-0.32006, // normal272
0.1784,0.96558,-0.18927, // normal273
0.096447,0.94247,-0.32006, // normal274
0.62662,0.73098,-0.27019, // normal275
0.1784,0.96558,-0.18927, // normal276
0.62662,0.73098,-0.27019, // normal277
0.80461,0.53608,-0.25538, // normal278
0.6355,0.41509,-0.65103, // normal279
0.80461,0.53608,-0.25538, // normal280
0.62662,0.73098,-0.27019, // normal281
0.0032979,0.22081,-0.97531, // normal282
-0.1323,0.39973,-0.90704, // normal283
-0.10912,0.70919,-0.69652, // normal284
-7.8014e-18,0.80702,-0.59053, // normal285
-0.10912,0.70919,-0.69652, // normal286
-0.1323,0.39973,-0.90704, // normal287
-0.24307,0.80902,-0.53516, // normal288
-0.10912,0.70919,-0.69652, // normal289
-7.8014e-18,0.80702,-0.59053, // normal290
-0.24307,0.80902,-0.53516 // normal291
]
this.uv = [
48.6835,4.6737, // uv0
36.4418,-11.4886, // uv1
50.9393,-11.4886, // uv2
25.5767,8.9848, // uv3
32.3389,-7.4661, // uv4
44.19,8.9848, // uv5
30.2189,9.7767, // uv6
32.4747,-6.8858, // uv7
36.4418,-6.8858, // uv8
11.9555,9.7767, // uv9
31.2028,9.391, // uv10
44.2663,-12.7291, // uv11
33.5722,11.4433, // uv12
11.4474,2.766, // uv13
9.7506,-11.9924, // uv14
32.4747,-11.9924, // uv15
-9.8145,-11.9924, // uv16
-25.3271,4.4502, // uv17
-10.0148,-11.6979, // uv18
11.2341,3.0792, // uv19
-25.1118,4.6737, // uv20
-57.0017,-11.4886, // uv21
-9.8145,-11.4886, // uv22
-59.2575,4.6737, // uv23
-60.902,3.9958, // uv24
-136.193,-27.1119, // uv25
-58.5261,-12.1493, // uv26
-64.9646,8.9593, // uv27
-246.378,8.9593, // uv28
-138.476,-26.1486, // uv29
-234.564,62.8155, // uv30
-208.968,-7.8497, // uv31
-133.919,10.4116, // uv32
-337.53,-6.7143, // uv33
-209.419,-12.3615, // uv34
-236.451,57.7671, // uv35
334.633,41.8247, // uv36
272.494,35.8849, // uv37
208.215,20.3119, // uv38
-337.964,-30.6871, // uv39
-274.171,-51.1844, // uv40
-275.561,-32.2417, // uv41
-350.429,46.9152, // uv42
-267.38,46.9152, // uv43
-322.079,85.6154, // uv44
281.081,-17.5867, // uv45
267.38,-72.4676, // uv46
350.429,-72.4676, // uv47
270.868,39.4805, // uv48
213.038,39.4805, // uv49
268.451,-17.0331, // uv50
-59.747,-109.645, // uv51
-127.58,-154.632, // uv52
-113.678,-167.574, // uv53
273.955,-2.4845, // uv54
217.504,56.1541, // uv55
146.976,-19.3545, // uv56
154.039,-10.4802, // uv57
135.107,-62.0095, // uv58
224.665,-10.4802, // uv59
55.2672,-6.3668, // uv60
143.279,-58.5946, // uv61
160.188,-6.3668, // uv62
54.9431,-7.0684, // uv63
51.4871,-23.7456, // uv64
142.766,-59.6124, // uv65
56.7508,-3.6532, // uv66
57.0017,-20.5348, // uv67
59.2575,-3.6532, // uv68
56.7508,-3.6532, // uv69
49.2455,-20.5348, // uv70
35.9209,-20.5348, // uv71
25.1118,-3.6532, // uv72
56.7508,-11.4219, // uv73
38.1767,-8.4095, // uv74
25.1118,-11.4219, // uv75
48.8503,-8.4095, // uv76
24.6954,-20.5348, // uv77
25.1118,-3.6532, // uv78
-11.2898,-20.5348, // uv79
-9.034,-3.6532, // uv80
25.1118,-3.6532, // uv81
-26.1586,-20.5348, // uv82
-38.254,-20.5348, // uv83
-42.8445,-3.6532, // uv84
-9.034,-11.4219, // uv85
-35.9982,-8.2696, // uv86
-42.8445,-11.4219, // uv87
-23.9028,-8.2696, // uv88
-58.6151,-20.5348, // uv89
-37.1237,-12.9099, // uv90
-130.971,-40.5319, // uv91
-50.4148,-31.8056, // uv92
-31.5355,-25.4715, // uv93
-100.964,-25.4715, // uv94
-120.557,-66.0348, // uv95
-102.766,-19.8132, // uv96
-195.975,-53.7542, // uv97
-124.458,-59.2941, // uv98
-105.433,-3.4537, // uv99
-194.501,-3.4537, // uv100
-201.906,-26.5361, // uv101
-220.701,-64.7535, // uv102
-156.064,-88.9927, // uv103
-156.38,-64.7535, // uv104
-195.132,-58.0836, // uv105
-248.724,-14.5719, // uv106
-263.117,-40.3759, // uv107
-238.427,-65.8955, // uv108
-302.886,-94.1023, // uv109
-247.222,-94.1023, // uv110
-248.13,-17.015, // uv111
-318.639,-17.015, // uv112
-316.389,-34.0836, // uv113
-317.439,-25.9826, // uv114
-384.201,-25.9826, // uv115
-314.704,-42.9803, // uv116
-318.429,-5.8973, // uv117
-385.291,19.5649, // uv118
-429.586,-33.8379, // uv119
-363.596,-119.621, // uv120
-412.314,-209.152, // uv121
-386.065,-185.265, // uv122
-366.514,87.158, // uv123
-460.285,87.158, // uv124
-455.77,37.9364, // uv125
-413.4,87.158, // uv126
-389.957,87.158, // uv127
-142.191,-435.272, // uv128
-106.069,-349.061, // uv129
-139.197,-399.908, // uv130
-110.597,-435.272, // uv131
308.495,-175.869, // uv132
386.435,-212.995, // uv133
401.128,-155.915, // uv134
340.622,-96.4846, // uv135
347.152,-134.35, // uv136
434.016,-96.4846, // uv137
314.034,27.4125, // uv138
373.422,-5.8891, // uv139
354.252,27.4125, // uv140
294.926,50.0473, // uv141
361.8,65.2232, // uv142
296.492,84.4772, // uv143
368.485,22.7084, // uv144
300.826,11.5393, // uv145
427.146,7.1586, // uv146
-292.349,-91.8124, // uv147
-313.171,-58.6471, // uv148
-418.074,-104.82, // uv149
-247.222,-97.1217, // uv150
-302.886,-97.1217, // uv151
-278.066,-127.412, // uv152
-196.489,-53.7654, // uv153
-264.045,-34.4862, // uv154
-301.174,-56.6297, // uv155
-179.786,-94.5271, // uv156
-281.082,-121.098, // uv157
-182.135,-117.002, // uv158
187.039,71.8393, // uv159
286.07,71.5365, // uv160
285.094,105.988, // uv161
188.805,66.8586, // uv162
287.291,99.7428, // uv163
211.261,99.7428, // uv164
143.852,98.1073, // uv165
189.662,65.3651, // uv166
212.324,98.1073, // uv167
161.853,49.4231, // uv168
210.599,31.0432, // uv169
173.29,73.2165, // uv170
93.8653,-146.35, // uv171
65.757,-192.295, // uv172
87.6043,-198.069, // uv173
76.256,96.625, // uv174
166.41,91.2893, // uv175
115.226,108.059, // uv176
104.886,80.4338, // uv177
175,95.5815, // uv178
85.492,107.599, // uv179
60.9407,-0.80361, // uv180
131.615,-40.4351, // uv181
142.458,-8.8678, // uv182
16.8213,-58.9016, // uv183
28.755,-139.943, // uv184
30.2174,-58.9016, // uv185
55.8517,4.7269, // uv186
58.143,-11.4305, // uv187
139.184,-12.9488, // uv188
56.3593,4.6737, // uv189
58.6151,-11.4886, // uv190
48.6835,4.6737, // uv191
-50.9393,-30.2174, // uv192
-58.6151,-16.8213, // uv193
-58.6151,-30.2174, // uv194
-38.254,-16.8213, // uv195
-36.4418,-30.2174, // uv196
-26.1586,-16.8213, // uv197
-32.4747,-30.2174, // uv198
-9.7506,-30.2174, // uv199
-11.2898,-16.8213, // uv200
24.6954,-16.8213, // uv201
9.8145,-30.2174, // uv202
57.0017,-30.2174, // uv203
35.9209,-16.8213, // uv204
49.2455,-16.8213, // uv205
57.0017,-16.8213, // uv206
-5.3483,-156.377, // uv207
-16.8213,-58.9773, // uv208
-30.2174,-58.9773, // uv209
-142.207,-62.5883, // uv210
-63.634,0.11243, // uv211
-137.971,-26.9067, // uv212
-208.922,-7.7252, // uv213
-147.951,-22.6422, // uv214
-133.842,10.4042, // uv215
-272.745,17.5096, // uv216
-146.887,-6.3213, // uv217
-206.806,12.3821, // uv218
61.1737,16.0313, // uv219
142.518,-9.2612, // uv220
145.756,16.0313, // uv221
91.789,56.3239, // uv222
131.748,63.5793, // uv223
80.2965,79.086, // uv224
106.901,88.9316, // uv225
154.625,64.2305, // uv226
163.94,88.9316, // uv227
281.119,-17.4502, // uv228
350.485,-72.3075, // uv229
354.216,-17.4502, // uv230
309.247,-61.5102, // uv231
297.391,-115.201, // uv232
375.783,-61.5102, // uv233
393.056,-64.2485, // uv234
317.166,-121.421, // uv235
373.553,-121.421, // uv236
-372.046,243.521, // uv237
-373.553,154.32, // uv238
-317.166,154.32, // uv239
-146.745,410.917, // uv240
-272.256,340.06, // uv241
-200.952,340.06, // uv242
272.256,-117.763, // uv243
232.758,-66.4071, // uv244
200.952,-117.763, // uv245
366.08,11.0421, // uv246
323.661,11.0421, // uv247
364.323,-39.3967, // uv248
-441.123,-91.7033, // uv249
-339.959,-118.806, // uv250
-378.133,-86.8872, // uv251
-367.327,102.048, // uv252
-348.36,56.0442, // uv253
-318.956,93.9493, // uv254
-374.922,60.7227, // uv255
-326.128,55.7744, // uv256
-275.796,128.419, // uv257
-195.585,70.3899, // uv258
-91.8532,111.758, // uv259
-117.487,111.758, // uv260
-275.798,-196.737, // uv261
-229.38,-86.1914, // uv262
-291.65,-86.1914, // uv263
-351.132,-164.233, // uv264
-309.689,-51.578, // uv265
-341.317,-51.578, // uv266
-386.094,0.97552, // uv267
-329.001,98.5864, // uv268
-364.312,98.5864, // uv269
-438.877,-102.031, // uv270
-376.015,-95.7688, // uv271
-379.36,4.1869, // uv272
-369.973,-253.406, // uv273
-352.623,-132.892, // uv274
-394.989,-132.892, // uv275
77.1641,-274.863, // uv276
-37.2765,-229.556, // uv277
-30.4272,-289.895, // uv278
-424.091,-76.1571, // uv279
-401.647,-131.548, // uv280
-376.757,-76.1571, // uv281
-25.1118,9.8448, // uv282
11.4474,8.42, // uv283
9.034,9.8448, // uv284
11.9555,9.8448, // uv285
27.4255,15.8773, // uv286
29.0366,13.5841, // uv287
31.1736,15.8773, // uv288
-9.034,-32.5389, // uv289
-11.9555,-32.5389, // uv290
-11.9555,-34.8869 // uv291
]
this.index=[
0,
1,
2,
3,
4,
5,
6,
7,
8,
7,
6,
9,
10,
11,
12,
13,
14,
15,
13,
16,
14,
17,
18,
19,
20,
21,
22,
21,
20,
23,
24,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
38,
39,
40,
41,
42,
43,
44,
45,
46,
47,
48,
49,
50,
51,
52,
53,
54,
55,
56,
57,
58,
59,
60,
61,
62,
63,
64,
65,
66,
67,
68,
69,
70,
67,
69,
71,
70,
71,
69,
72,
73,
74,
75,
74,
73,
76,
72,
77,
71,
78,
79,
77,
80,
79,
81,
80,
82,
79,
82,
80,
83,
83,
80,
84,
85,
86,
87,
86,
85,
88,
84,
89,
83,
90,
91,
92,
93,
94,
95,
96,
97,
98,
99,
100,
101,
102,
103,
104,
105,
106,
107,
108,
109,
110,
111,
112,
113,
114,
115,
116,
117,
118,
119,
120,
121,
122,
123,
124,
125,
124,
123,
126,
126,
123,
127,
128,
129,
130,
129,
128,
131,
132,
133,
134,
135,
136,
137,
138,
139,
140,
141,
142,
143,
144,
145,
146,
147,
148,
149,
150,
151,
152,
153,
154,
155,
156,
157,
158,
159,
160,
161,
162,
163,
164,
165,
166,
167,
168,
169,
170,
171,
172,
173,
174,
175,
176,
177,
178,
179,
180,
181,
182,
183,
184,
185,
186,
187,
188,
189,
2,
190,
2,
189,
191,
192,
193,
194,
193,
192,
195,
195,
192,
196,
195,
196,
197,
197,
196,
198,
197,
198,
199,
197,
199,
200,
200,
199,
201,
201,
199,
202,
201,
202,
203,
201,
203,
204,
204,
203,
205,
205,
203,
206,
207,
208,
209,
210,
211,
212,
213,
214,
215,
216,
217,
218,
219,
220,
221,
222,
223,
224,
225,
226,
227,
228,
229,
230,
231,
232,
233,
234,
235,
236,
237,
238,
239,
240,
241,
242,
243,
244,
245,
246,
247,
248,
249,
250,
251,
252,
253,
254,
255,
256,
257,
258,
259,
260,
261,
262,
263,
264,
265,
266,
267,
268,
269,
270,
271,
272,
273,
274,
275,
276,
277,
278,
279,
280,
281,
282,
283,
284,
284,
283,
285,
286,
287,
288,
289,
290,
291
]
}
