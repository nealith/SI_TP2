Cylinder = function(){
this.vertices = [
0.0,3.05816,-2.420768, // vertice0
0.19509,-3.05816,-2.374253, // vertice1
0.0,-3.05816,-2.420768, // vertice2
0.19509,3.05816,-2.374253, // vertice3
0.382683,-3.05816,-2.236497, // vertice4
0.19509,-3.05816,-2.374253, // vertice5
0.382683,3.05816,-2.236497, // vertice6
0.55557,-3.05816,-2.012794, // vertice7
0.382683,-3.05816,-2.236497, // vertice8
0.55557,3.05816,-2.012794, // vertice9
0.707107,-3.05816,-1.711741, // vertice10
0.55557,-3.05816,-2.012794, // vertice11
0.707107,3.05816,-1.711741, // vertice12
0.83147,-3.05816,-1.344906, // vertice13
0.707107,-3.05816,-1.711741, // vertice14
0.83147,3.05816,-1.344906, // vertice15
0.92388,-3.05816,-0.926388, // vertice16
0.83147,-3.05816,-1.344906, // vertice17
0.92388,3.05816,-0.926388, // vertice18
0.980785,-3.05816,-0.472268, // vertice19
0.92388,-3.05816,-0.926388, // vertice20
0.980785,3.05816,-0.472268, // vertice21
1.0,-3.05816,-0.0, // vertice22
0.980785,-3.05816,-0.472268, // vertice23
1.0,3.05816,-0.0, // vertice24
0.980785,-3.05816,0.472268, // vertice25
1.0,-3.05816,-0.0, // vertice26
0.980785,3.05816,0.472268, // vertice27
0.92388,-3.05816,0.926387, // vertice28
0.980785,-3.05816,0.472268, // vertice29
0.92388,3.05816,0.926387, // vertice30
0.83147,-3.05816,1.344906, // vertice31
0.92388,-3.05816,0.926387, // vertice32
0.83147,3.05816,1.344906, // vertice33
0.707107,-3.05816,1.711741, // vertice34
0.83147,-3.05816,1.344906, // vertice35
0.707107,3.05816,1.711741, // vertice36
0.55557,-3.05816,2.012795, // vertice37
0.707107,-3.05816,1.711741, // vertice38
0.55557,3.05816,2.012795, // vertice39
0.382683,-3.05816,2.236498, // vertice40
0.55557,-3.05816,2.012795, // vertice41
0.382683,3.05816,2.236498, // vertice42
0.19509,-3.05816,2.374253, // vertice43
0.382683,-3.05816,2.236498, // vertice44
0.19509,3.05816,2.374253, // vertice45
-0.0,-3.05816,2.420768, // vertice46
0.19509,-3.05816,2.374253, // vertice47
-0.0,3.05816,2.420768, // vertice48
-0.195091,-3.05816,2.374253, // vertice49
-0.0,-3.05816,2.420768, // vertice50
-0.195091,3.05816,2.374253, // vertice51
-0.382684,-3.05816,2.236497, // vertice52
-0.195091,-3.05816,2.374253, // vertice53
-0.382684,3.05816,2.236497, // vertice54
-0.555571,-3.05816,2.012794, // vertice55
-0.382684,-3.05816,2.236497, // vertice56
-0.555571,3.05816,2.012794, // vertice57
-0.707107,-3.05816,1.71174, // vertice58
-0.555571,-3.05816,2.012794, // vertice59
-0.707107,3.05816,1.71174, // vertice60
-0.83147,-3.05816,1.344905, // vertice61
-0.707107,-3.05816,1.71174, // vertice62
-0.83147,3.05816,1.344905, // vertice63
-0.92388,-3.05816,0.926386, // vertice64
-0.83147,-3.05816,1.344905, // vertice65
-0.92388,3.05816,0.926386, // vertice66
-0.980785,-3.05816,0.472266, // vertice67
-0.92388,-3.05816,0.926386, // vertice68
-0.980785,3.05816,0.472266, // vertice69
-1.0,-3.05816,-2e-06, // vertice70
-0.980785,-3.05816,0.472266, // vertice71
-1.0,3.05816,-2e-06, // vertice72
-0.980785,-3.05816,-0.472271, // vertice73
-1.0,-3.05816,-2e-06, // vertice74
-0.980785,3.05816,-0.472271, // vertice75
-0.923879,-3.05816,-0.92639, // vertice76
-0.980785,-3.05816,-0.472271, // vertice77
-0.923879,3.05816,-0.92639, // vertice78
-0.831469,-3.05816,-1.344909, // vertice79
-0.923879,-3.05816,-0.92639, // vertice80
-0.831469,3.05816,-1.344909, // vertice81
-0.707106,-3.05816,-1.711743, // vertice82
-0.831469,-3.05816,-1.344909, // vertice83
-0.707106,3.05816,-1.711743, // vertice84
-0.555569,-3.05816,-2.012796, // vertice85
-0.707106,-3.05816,-1.711743, // vertice86
-0.555569,3.05816,-2.012796, // vertice87
-0.382682,-3.05816,-2.236499, // vertice88
-0.555569,-3.05816,-2.012796, // vertice89
0.83147,3.05816,1.344906, // vertice90
-0.83147,3.05816,1.344905, // vertice91
-0.707107,3.05816,1.71174, // vertice92
-0.382682,3.05816,-2.236499, // vertice93
-0.195089,-3.05816,-2.374254, // vertice94
-0.382682,-3.05816,-2.236499, // vertice95
-0.195089,3.05816,-2.374254, // vertice96
0.0,-3.05816,-2.420768, // vertice97
-0.195089,-3.05816,-2.374254, // vertice98
-0.92388,-3.05816,0.926386, // vertice99
0.92388,-3.05816,0.926387, // vertice100
0.83147,-3.05816,1.344906, // vertice101
0.19509,3.05816,-2.374253, // vertice102
0.382683,3.05816,-2.236497, // vertice103
0.55557,3.05816,-2.012794, // vertice104
0.707107,3.05816,-1.711741, // vertice105
0.83147,3.05816,-1.344906, // vertice106
0.92388,3.05816,-0.926388, // vertice107
0.980785,3.05816,-0.472268, // vertice108
1.0,3.05816,-0.0, // vertice109
0.980785,3.05816,0.472268, // vertice110
0.92388,3.05816,0.926387, // vertice111
0.83147,3.05816,1.344906, // vertice112
0.707107,3.05816,1.711741, // vertice113
0.55557,3.05816,2.012795, // vertice114
0.382683,3.05816,2.236498, // vertice115
0.19509,3.05816,2.374253, // vertice116
-0.0,3.05816,2.420768, // vertice117
-0.195091,3.05816,2.374253, // vertice118
-0.382684,3.05816,2.236497, // vertice119
-0.555571,3.05816,2.012794, // vertice120
-0.707107,3.05816,1.71174, // vertice121
-0.83147,3.05816,1.344905, // vertice122
-0.92388,3.05816,0.926386, // vertice123
-0.980785,3.05816,0.472266, // vertice124
-1.0,3.05816,-2e-06, // vertice125
-0.980785,3.05816,-0.472271, // vertice126
-0.923879,3.05816,-0.92639, // vertice127
-0.831469,3.05816,-1.344909, // vertice128
-0.707106,3.05816,-1.711743, // vertice129
-0.555569,3.05816,-2.012796, // vertice130
-0.382682,3.05816,-2.236499, // vertice131
0.382683,3.05816,-2.236497, // vertice132
0.19509,3.05816,-2.374253, // vertice133
-0.382682,3.05816,-2.236499, // vertice134
0.0,3.05816,-2.420768, // vertice135
-0.195089,3.05816,-2.374254, // vertice136
-0.555569,3.05816,-2.012796, // vertice137
-0.707106,3.05816,-1.711743, // vertice138
-0.831469,3.05816,-1.344909, // vertice139
0.707107,3.05816,-1.711741, // vertice140
-0.923879,3.05816,-0.92639, // vertice141
-0.980785,3.05816,-0.472271, // vertice142
0.980785,3.05816,-0.472268, // vertice143
-1.0,3.05816,-2e-06, // vertice144
-0.980785,3.05816,0.472266, // vertice145
0.980785,3.05816,0.472268, // vertice146
-0.92388,3.05816,0.926386, // vertice147
0.92388,3.05816,0.926387, // vertice148
-0.555571,3.05816,2.012794, // vertice149
0.707107,3.05816,1.711741, // vertice150
-0.382684,3.05816,2.236497, // vertice151
-0.195091,3.05816,2.374253, // vertice152
0.19509,3.05816,2.374253, // vertice153
-0.0,3.05816,2.420768, // vertice154
0.382683,3.05816,2.236498, // vertice155
0.55557,3.05816,2.012795, // vertice156
1.0,3.05816,-0.0, // vertice157
0.92388,3.05816,-0.926388, // vertice158
0.83147,3.05816,-1.344906, // vertice159
0.55557,3.05816,-2.012794, // vertice160
-0.195089,3.05816,-2.374254, // vertice161
0.0,3.05816,-2.420768, // vertice162
-0.195089,-3.05816,-2.374254, // vertice163
0.0,-3.05816,-2.420768, // vertice164
0.19509,-3.05816,-2.374253, // vertice165
0.382683,-3.05816,-2.236497, // vertice166
0.55557,-3.05816,-2.012794, // vertice167
0.707107,-3.05816,-1.711741, // vertice168
-0.707106,-3.05816,-1.711743, // vertice169
0.83147,-3.05816,-1.344906, // vertice170
0.92388,-3.05816,-0.926388, // vertice171
-0.831469,-3.05816,-1.344909, // vertice172
0.980785,-3.05816,-0.472268, // vertice173
1.0,-3.05816,-0.0, // vertice174
-1.0,-3.05816,-2e-06, // vertice175
0.980785,-3.05816,0.472268, // vertice176
-0.980785,-3.05816,0.472266, // vertice177
0.707107,-3.05816,1.711741, // vertice178
-0.707107,-3.05816,1.71174, // vertice179
0.55557,-3.05816,2.012795, // vertice180
0.382683,-3.05816,2.236498, // vertice181
-0.555571,-3.05816,2.012794, // vertice182
0.19509,-3.05816,2.374253, // vertice183
-0.0,-3.05816,2.420768, // vertice184
-0.195091,-3.05816,2.374253, // vertice185
-0.382684,-3.05816,2.236497, // vertice186
-0.83147,-3.05816,1.344905, // vertice187
-0.980785,-3.05816,-0.472271, // vertice188
-0.923879,-3.05816,-0.92639, // vertice189
-0.555569,-3.05816,-2.012796, // vertice190
-0.382682,-3.05816,-2.236499 // vertice191
]
this.normals = [
0.2319,0.0,-0.9727, // normal0
0.2319,0.0,-0.9727, // normal1
0.2319,0.0,-0.9727, // normal2
0.5919,0.0,-0.806, // normal3
0.5919,0.0,-0.806, // normal4
0.5919,0.0,-0.806, // normal5
0.7912,0.0,-0.6115, // normal6
0.7912,0.0,-0.6115, // normal7
0.7912,0.0,-0.6115, // normal8
0.8932,0.0,-0.4496, // normal9
0.8932,0.0,-0.4496, // normal10
0.8932,0.0,-0.4496, // normal11
0.9471,0.0,-0.3211, // normal12
0.9471,0.0,-0.3211, // normal13
0.9471,0.0,-0.3211, // normal14
0.9765,0.0,-0.2156, // normal15
0.9765,0.0,-0.2156, // normal16
0.9765,0.0,-0.2156, // normal17
0.9922,0.0,-0.1243, // normal18
0.9922,0.0,-0.1243, // normal19
0.9922,0.0,-0.1243, // normal20
0.9992,0.0,-0.0407, // normal21
0.9992,0.0,-0.0407, // normal22
0.9992,0.0,-0.0407, // normal23
0.9992,0.0,0.0407, // normal24
0.9992,0.0,0.0407, // normal25
0.9992,0.0,0.0407, // normal26
0.9922,0.0,0.1243, // normal27
0.9922,0.0,0.1243, // normal28
0.9922,0.0,0.1243, // normal29
0.9765,0.0,0.2156, // normal30
0.9765,0.0,0.2156, // normal31
0.9765,0.0,0.2156, // normal32
0.9471,0.0,0.3211, // normal33
0.9471,0.0,0.3211, // normal34
0.9471,0.0,0.3211, // normal35
0.8932,0.0,0.4496, // normal36
0.8932,0.0,0.4496, // normal37
0.8932,0.0,0.4496, // normal38
0.7912,0.0,0.6115, // normal39
0.7912,0.0,0.6115, // normal40
0.7912,0.0,0.6115, // normal41
0.5919,0.0,0.806, // normal42
0.5919,0.0,0.806, // normal43
0.5919,0.0,0.806, // normal44
0.2319,0.0,0.9727, // normal45
0.2319,0.0,0.9727, // normal46
0.2319,0.0,0.9727, // normal47
-0.2319,0.0,0.9727, // normal48
-0.2319,0.0,0.9727, // normal49
-0.2319,0.0,0.9727, // normal50
-0.5919,0.0,0.806, // normal51
-0.5919,0.0,0.806, // normal52
-0.5919,0.0,0.806, // normal53
-0.7912,0.0,0.6115, // normal54
-0.7912,0.0,0.6115, // normal55
-0.7912,0.0,0.6115, // normal56
-0.8932,0.0,0.4496, // normal57
-0.8932,0.0,0.4496, // normal58
-0.8932,0.0,0.4496, // normal59
-0.9471,0.0,0.3211, // normal60
-0.9471,0.0,0.3211, // normal61
-0.9471,0.0,0.3211, // normal62
-0.9765,0.0,0.2156, // normal63
-0.9765,0.0,0.2156, // normal64
-0.9765,0.0,0.2156, // normal65
-0.9922,0.0,0.1243, // normal66
-0.9922,0.0,0.1243, // normal67
-0.9922,0.0,0.1243, // normal68
-0.9992,0.0,0.0407, // normal69
-0.9992,0.0,0.0407, // normal70
-0.9992,0.0,0.0407, // normal71
-0.9992,0.0,-0.0407, // normal72
-0.9992,0.0,-0.0407, // normal73
-0.9992,0.0,-0.0407, // normal74
-0.9922,0.0,-0.1243, // normal75
-0.9922,0.0,-0.1243, // normal76
-0.9922,0.0,-0.1243, // normal77
-0.9765,0.0,-0.2156, // normal78
-0.9765,0.0,-0.2156, // normal79
-0.9765,0.0,-0.2156, // normal80
-0.9471,0.0,-0.3211, // normal81
-0.9471,0.0,-0.3211, // normal82
-0.9471,0.0,-0.3211, // normal83
-0.8932,0.0,-0.4496, // normal84
-0.8932,0.0,-0.4496, // normal85
-0.8932,0.0,-0.4496, // normal86
-0.7912,0.0,-0.6115, // normal87
-0.7912,0.0,-0.6115, // normal88
-0.7912,0.0,-0.6115, // normal89
0.0,1.0,0.0, // normal90
0.0,1.0,0.0, // normal91
0.0,1.0,0.0, // normal92
-0.5919,0.0,-0.806, // normal93
-0.5919,0.0,-0.806, // normal94
-0.5919,0.0,-0.806, // normal95
-0.2319,0.0,-0.9727, // normal96
-0.2319,0.0,-0.9727, // normal97
-0.2319,0.0,-0.9727, // normal98
0.0,-1.0,0.0, // normal99
0.0,-1.0,0.0, // normal100
0.0,-1.0,0.0, // normal101
0.2319,0.0,-0.9727, // normal102
0.5919,0.0,-0.806, // normal103
0.7912,0.0,-0.6115, // normal104
0.8932,0.0,-0.4496, // normal105
0.9471,0.0,-0.3211, // normal106
0.9765,0.0,-0.2156, // normal107
0.9922,0.0,-0.1243, // normal108
0.9992,0.0,-0.0407, // normal109
0.9992,0.0,0.0407, // normal110
0.9922,0.0,0.1243, // normal111
0.9765,0.0,0.2156, // normal112
0.9471,0.0,0.3211, // normal113
0.8932,0.0,0.4496, // normal114
0.7912,0.0,0.6115, // normal115
0.5919,0.0,0.806, // normal116
0.2319,0.0,0.9727, // normal117
-0.2319,0.0,0.9727, // normal118
-0.5919,0.0,0.806, // normal119
-0.7912,0.0,0.6115, // normal120
-0.8932,0.0,0.4496, // normal121
-0.9471,0.0,0.3211, // normal122
-0.9765,0.0,0.2156, // normal123
-0.9922,0.0,0.1243, // normal124
-0.9992,0.0,0.0407, // normal125
-0.9992,0.0,-0.0407, // normal126
-0.9922,0.0,-0.1243, // normal127
-0.9765,0.0,-0.2156, // normal128
-0.9471,0.0,-0.3211, // normal129
-0.8932,0.0,-0.4496, // normal130
-0.7912,0.0,-0.6115, // normal131
0.0,1.0,0.0, // normal132
0.0,1.0,0.0, // normal133
0.0,1.0,0.0, // normal134
0.0,1.0,0.0, // normal135
0.0,1.0,0.0, // normal136
0.0,1.0,0.0, // normal137
0.0,1.0,0.0, // normal138
0.0,1.0,0.0, // normal139
0.0,1.0,0.0, // normal140
0.0,1.0,0.0, // normal141
0.0,1.0,0.0, // normal142
0.0,1.0,0.0, // normal143
0.0,1.0,0.0, // normal144
0.0,1.0,0.0, // normal145
0.0,1.0,0.0, // normal146
0.0,1.0,0.0, // normal147
0.0,1.0,0.0, // normal148
0.0,1.0,0.0, // normal149
0.0,1.0,0.0, // normal150
0.0,1.0,0.0, // normal151
0.0,1.0,0.0, // normal152
0.0,1.0,0.0, // normal153
0.0,1.0,0.0, // normal154
0.0,1.0,0.0, // normal155
0.0,1.0,0.0, // normal156
0.0,1.0,0.0, // normal157
0.0,1.0,0.0, // normal158
0.0,1.0,0.0, // normal159
0.0,1.0,0.0, // normal160
-0.5919,0.0,-0.806, // normal161
-0.2319,0.0,-0.9727, // normal162
0.0,-1.0,0.0, // normal163
0.0,-1.0,0.0, // normal164
0.0,-1.0,0.0, // normal165
0.0,-1.0,0.0, // normal166
0.0,-1.0,0.0, // normal167
0.0,-1.0,0.0, // normal168
0.0,-1.0,0.0, // normal169
0.0,-1.0,0.0, // normal170
0.0,-1.0,0.0, // normal171
0.0,-1.0,0.0, // normal172
0.0,-1.0,0.0, // normal173
0.0,-1.0,0.0, // normal174
0.0,-1.0,0.0, // normal175
0.0,-1.0,0.0, // normal176
0.0,-1.0,0.0, // normal177
0.0,-1.0,0.0, // normal178
0.0,-1.0,0.0, // normal179
0.0,-1.0,0.0, // normal180
0.0,-1.0,0.0, // normal181
0.0,-1.0,0.0, // normal182
0.0,-1.0,0.0, // normal183
0.0,-1.0,0.0, // normal184
0.0,-1.0,0.0, // normal185
0.0,-1.0,0.0, // normal186
0.0,-1.0,0.0, // normal187
0.0,-1.0,0.0, // normal188
0.0,-1.0,0.0, // normal189
0.0,-1.0,0.0, // normal190
0.0,-1.0,0.0 // normal191
]
this.uv = [
0.498978,0.531771, // uv0
0.999816,0.580625, // uv1
0.999816,0.531771, // uv2
0.498978,0.580625, // uv3
0.999816,0.627602, // uv4
0.999816,0.580625, // uv5
0.498978,0.627602, // uv6
0.999816,0.670896, // uv7
0.999816,0.627602, // uv8
0.498978,0.670896, // uv9
0.999816,0.708844, // uv10
0.999816,0.670896, // uv11
0.498978,0.708844, // uv12
0.999816,0.670896, // uv13
0.999816,0.708844, // uv14
0.498978,0.670896, // uv15
0.999816,0.627602, // uv16
0.999816,0.670896, // uv17
0.498978,0.627602, // uv18
0.999816,0.580625, // uv19
0.999816,0.627602, // uv20
0.498978,0.580625, // uv21
0.999816,0.531771, // uv22
0.999816,0.580625, // uv23
0.498978,0.531771, // uv24
0.999816,0.482917, // uv25
0.999816,0.531771, // uv26
0.498978,0.482917, // uv27
0.999816,0.43594, // uv28
0.999816,0.482917, // uv29
0.498978,0.43594, // uv30
0.999816,0.392646, // uv31
0.999816,0.43594, // uv32
0.498978,0.392646, // uv33
0.999816,0.354698, // uv34
0.999816,0.392646, // uv35
0.498978,0.35433, // uv36
0.999816,0.316382, // uv37
0.999816,0.35433, // uv38
0.498978,0.316382, // uv39
0.999816,0.273088, // uv40
0.999816,0.316382, // uv41
0.498978,0.273088, // uv42
0.999816,0.226111, // uv43
0.999816,0.273088, // uv44
0.498978,0.226111, // uv45
0.999816,0.177257, // uv46
0.999816,0.226111, // uv47
0.498978,0.177257, // uv48
0.999816,0.128403, // uv49
0.999816,0.177257, // uv50
0.498978,0.128403, // uv51
0.999816,0.081426, // uv52
0.999816,0.128403, // uv53
0.498978,0.081426, // uv54
0.999816,0.038131, // uv55
0.999816,0.081426, // uv56
0.498978,0.038131, // uv57
0.999816,0.000184, // uv58
0.999816,0.038131, // uv59
0.498978,0.000184, // uv60
0.999816,0.038132, // uv61
0.999816,0.000184, // uv62
0.498978,0.038132, // uv63
0.999816,0.081426, // uv64
0.999816,0.038132, // uv65
0.498978,0.081426, // uv66
0.999816,0.128403, // uv67
0.999816,0.081426, // uv68
0.498978,0.128403, // uv69
0.999816,0.177257, // uv70
0.999816,0.128403, // uv71
0.498978,0.177257, // uv72
0.999816,0.226112, // uv73
0.999816,0.177257, // uv74
0.498978,0.226111, // uv75
0.999816,0.273088, // uv76
0.999816,0.226112, // uv77
0.498978,0.273088, // uv78
0.999816,0.316382, // uv79
0.999816,0.273088, // uv80
0.498978,0.316382, // uv81
0.999816,0.35433, // uv82
0.999816,0.316382, // uv83
0.498978,0.354698, // uv84
0.999816,0.392646, // uv85
0.999816,0.354698, // uv86
0.498978,0.392646, // uv87
0.999816,0.43594, // uv88
0.999816,0.392646, // uv89
0.028547,0.13135, // uv90
0.224852,0.49861, // uv91
0.176704,0.489033, // uv92
0.498978,0.43594, // uv93
0.999816,0.482917, // uv94
0.999816,0.43594, // uv95
0.498978,0.482917, // uv96
0.999816,0.531771, // uv97
0.999816,0.482917, // uv98
0.49861,0.723646, // uv99
0.090533,0.941768, // uv100
0.13135,0.969041, // uv101
0.498978,0.580625, // uv102
0.498978,0.627602, // uv103
0.498978,0.670896, // uv104
0.498978,0.708844, // uv105
0.498978,0.670896, // uv106
0.498978,0.627602, // uv107
0.498978,0.580625, // uv108
0.498978,0.531771, // uv109
0.498978,0.482917, // uv110
0.498978,0.43594, // uv111
0.498978,0.392646, // uv112
0.498978,0.354698, // uv113
0.498978,0.316382, // uv114
0.498978,0.273088, // uv115
0.498978,0.226111, // uv116
0.498978,0.177257, // uv117
0.498978,0.128403, // uv118
0.498978,0.081426, // uv119
0.498978,0.038131, // uv120
0.498978,0.000184, // uv121
0.498978,0.038132, // uv122
0.498978,0.081426, // uv123
0.498978,0.128403, // uv124
0.498978,0.177257, // uv125
0.498978,0.226111, // uv126
0.498978,0.273088, // uv127
0.498978,0.316382, // uv128
0.498978,0.35433, // uv129
0.498978,0.392646, // uv130
0.498978,0.43594, // uv131
0.408261,0.055821, // uv132
0.442974,0.090533, // uv133
0.49861,0.224852, // uv134
0.470247,0.131351, // uv135
0.489033,0.176704, // uv136
0.49861,0.273942, // uv137
0.489033,0.32209, // uv138
0.470247,0.367444, // uv139
0.32209,0.009761, // uv140
0.442974,0.408261, // uv141
0.408261,0.442974, // uv142
0.176705,0.009761, // uv143
0.367444,0.470247, // uv144
0.32209,0.489033, // uv145
0.090533,0.05582, // uv146
0.273942,0.49861, // uv147
0.055821,0.090533, // uv148
0.13135,0.470247, // uv149
0.009761,0.176704, // uv150
0.090533,0.442973, // uv151
0.05582,0.408261, // uv152
0.009761,0.32209, // uv153
0.028547,0.367444, // uv154
0.000184,0.273942, // uv155
0.000184,0.224851, // uv156
0.131351,0.028547, // uv157
0.224852,0.000184, // uv158
0.273943,0.000184, // uv159
0.367444,0.028547, // uv160
0.498978,0.482917, // uv161
0.498978,0.531771, // uv162
0.176704,0.508555, // uv163
0.131351,0.527341, // uv164
0.090533,0.554615, // uv165
0.055821,0.589327, // uv166
0.028547,0.630144, // uv167
0.009761,0.675498, // uv168
0.32209,0.508555, // uv169
0.000184,0.723646, // uv170
0.000184,0.772736, // uv171
0.367444,0.527341, // uv172
0.009761,0.820884, // uv173
0.028547,0.866238, // uv174
0.470247,0.630145, // uv175
0.05582,0.907055, // uv176
0.489033,0.675498, // uv177
0.176704,0.987827, // uv178
0.489033,0.820884, // uv179
0.224852,0.997404, // uv180
0.273942,0.997404, // uv181
0.470247,0.866238, // uv182
0.32209,0.987827, // uv183
0.367444,0.969041, // uv184
0.408261,0.941768, // uv185
0.442973,0.907055, // uv186
0.49861,0.772737, // uv187
0.442974,0.589327, // uv188
0.408261,0.554615, // uv189
0.273942,0.498978, // uv190
0.224852,0.498978 // uv191
]
this.index = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20,
21,
22,
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
71,
72,
73,
74,
75,
76,
77,
78,
79,
80,
81,
82,
83,
84,
85,
86,
87,
88,
89,
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
0,
1,
102,
3,
4,
103,
6,
7,
104,
9,
10,
105,
12,
13,
106,
15,
16,
107,
18,
19,
108,
21,
22,
109,
24,
25,
110,
27,
28,
111,
30,
31,
112,
33,
34,
113,
36,
37,
114,
39,
40,
115,
42,
43,
116,
45,
46,
117,
48,
49,
118,
51,
52,
119,
54,
55,
120,
57,
58,
121,
60,
61,
122,
63,
64,
123,
66,
67,
124,
69,
70,
125,
72,
73,
126,
75,
76,
127,
78,
79,
128,
81,
82,
129,
84,
85,
130,
87,
88,
131,
132,
133,
134,
133,
135,
136,
132,
134,
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
91,
147,
148,
92,
149,
150,
151,
152,
153,
152,
153,
154,
151,
155,
156,
90,
92,
150,
145,
146,
148,
142,
143,
157,
141,
158,
159,
138,
140,
160,
133,
134,
136,
132,
137,
160,
142,
144,
157,
90,
91,
148,
151,
153,
155,
149,
151,
156,
144,
146,
157,
139,
141,
159,
137,
138,
160,
145,
147,
148,
149,
150,
156,
141,
143,
158,
139,
140,
159,
93,
94,
161,
96,
97,
162,
163,
164,
165,
163,
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
100,
176,
177,
101,
178,
179,
180,
181,
182,
183,
184,
185,
183,
185,
186,
178,
179,
182,
99,
101,
187,
174,
175,
177,
173,
188,
189,
168,
169,
172,
167,
190,
191,
163,
166,
191,
168,
170,
172,
174,
176,
177,
178,
180,
182,
181,
183,
186,
101,
179,
187,
173,
175,
188,
167,
169,
190,
166,
167,
191,
99,
100,
177,
181,
182,
186,
171,
173,
189,
171,
172,
189,
]
}