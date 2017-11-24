// Obj 2 atomicGL exporter 
// author: Remi COZOT - IRISA/University of Rennes 1
donjonSol=function(){
this.vertices =[
-0.57977,10.99,-2.9137, // vertice0
0.47272,10.99,-2.8585, // vertice1
-0.58029,10.99,-2.9008, // vertice2
0,10.99,-2.99, // vertice3
0.47549,10.99,-2.9274, // vertice4
0.47272,10.99,-2.8585, // vertice5
0.77387,10.99,2.8881, // vertice6
0.47549,10.99,-2.9274, // vertice7
0.46009,10.99,2.8608, // vertice8
0.45732,10.99,2.9298, // vertice9
3.6617e-16,10.99,2.99, // vertice10
0.46009,10.99,2.8608, // vertice11
0.45732,10.99,2.9298, // vertice12
-0.59292,10.99,2.8185, // vertice13
-0.59666,10.99,2.9114, // vertice14
-0.58029,10.99,-2.9008, // vertice15
-0.59666,10.99,2.9114, // vertice16
-0.59292,10.99,2.8185, // vertice17
-0.77387,10.99,2.8881, // vertice18
-0.77387,10.99,-2.8881, // vertice19
-1.495,10.99,2.5894, // vertice20
-1.495,10.99,-2.5894, // vertice21
-2.1143,10.99,2.1143, // vertice22
-2.1143,10.99,-2.1143, // vertice23
-2.5894,10.99,1.495, // vertice24
-2.5894,10.99,-1.495, // vertice25
-2.8298,10.99,0.7546, // vertice26
-2.8881,10.99,0.77387, // vertice27
-2.8907,10.99,0.7546, // vertice28
-2.8907,10.99,0.7546, // vertice29
-2.8298,10.99,-0.29927, // vertice30
-2.8298,10.99,0.7546, // vertice31
-2.9506,10.99,-0.29927, // vertice32
-2.99,10.99,5.4925e-16, // vertice33
-2.8298,10.99,-0.29927, // vertice34
-2.8881,10.99,-0.77387, // vertice35
-2.9506,10.99,-0.29927, // vertice36
-0.57977,10.99,-2.9137, // vertice37
0.77387,10.99,-2.8881, // vertice38
1.495,10.99,-2.5894, // vertice39
1.495,10.99,2.5894, // vertice40
2.1143,10.99,-2.1143, // vertice41
2.1143,10.99,2.1143, // vertice42
2.5894,10.99,-1.495, // vertice43
2.5894,10.99,1.495, // vertice44
2.8881,10.99,-0.77387, // vertice45
2.8853,10.99,-0.51617, // vertice46
2.8853,10.99,0.5377, // vertice47
2.8881,10.99,0.77387, // vertice48
2.9192,10.99,0.5377, // vertice49
2.8853,10.99,0.5377, // vertice50
2.9221,10.99,-0.51617, // vertice51
2.9192,10.99,0.5377, // vertice52
2.8853,10.99,-0.51617, // vertice53
2.9221,10.99,-0.51617, // vertice54
2.99,10.99,-1.8309e-16, // vertice55
-0.028085,19.26,0.0075253, // vertice56
-0.028085,19.26,-0.0075253, // vertice57
-0.029075,19.26,3.7412e-16, // vertice58
-0.02518,19.26,0.014538, // vertice59
-0.02518,19.26,-0.014538, // vertice60
-0.020559,19.26,0.020559, // vertice61
-0.020559,19.26,-0.020559, // vertice62
-0.014538,19.26,-0.02518, // vertice63
-0.014538,19.26,0.02518, // vertice64
-0.0075253,19.26,-0.028085, // vertice65
-0.0075253,19.26,0.028085, // vertice66
-2.6987e-16,19.26,-0.029075, // vertice67
-2.2332e-16,19.26,0.029075, // vertice68
0.0075253,19.26,-0.028085, // vertice69
0.0075253,19.26,0.028085, // vertice70
0.014538,19.26,-0.02518, // vertice71
0.014538,19.26,0.02518, // vertice72
0.020559,19.26,-0.020559, // vertice73
0.020559,19.26,0.020559, // vertice74
0.02518,19.26,-0.014538, // vertice75
0.02518,19.26,0.014538, // vertice76
0.028085,19.26,0.0075253, // vertice77
0.028085,19.26,-0.0075253, // vertice78
0.029075,19.26,3.2991e-16, // vertice79
-5.8043,0.1,1.5553, // vertice80
-5.8043,0.1,-1.5553, // vertice81
-6.0091,0.1,-7.359e-16, // vertice82
-5.204,0.1,3.0045, // vertice83
-5.204,0.1,-3.0045, // vertice84
-4.2491,0.1,4.2491, // vertice85
-4.2491,0.1,-4.2491, // vertice86
-3.0045,0.1,5.204, // vertice87
-3.0045,0.1,-5.204, // vertice88
-1.5553,0.1,5.8043, // vertice89
-1.5553,0.1,-5.8043, // vertice90
-1.1039e-15,0.1,6.0091, // vertice91
3.6795e-16,0.1,-6.0091, // vertice92
1.5553,0.1,5.8043, // vertice93
1.5553,0.1,-5.8043, // vertice94
3.0045,0.1,5.204, // vertice95
3.0045,0.1,-5.204, // vertice96
4.2491,0.1,4.2491, // vertice97
4.2491,0.1,-4.2491, // vertice98
4.9862,0.1,1.6005, // vertice99
5.204,0.1,3.0045, // vertice100
5.7588,0.1,1.6005, // vertice101
5.7856,0.1,1.6005, // vertice102
4.9862,0.1,-1.6195, // vertice103
5.204,0.1,-3.0045, // vertice104
5.7509,0.1,-1.6195, // vertice105
5.7777,0.1,-1.6195, // vertice106
4.9862,0.1,1.203, // vertice107
4.9862,0.1,1.6005, // vertice108
4.9862,-3.7524e-19,1.203, // vertice109
4.9862,0.1,1.203, // vertice110
4.9862,0,1.6005, // vertice111
4.9862,0.1,-1.2219, // vertice112
5.8257,0.1,1.203, // vertice113
5.8232,0.1,-1.2219, // vertice114
5.8482,0.1,-1.2219, // vertice115
5.8507,0.1,1.203, // vertice116
6.3662,0.1,-1.2219, // vertice117
6.3662,0.1,1.203, // vertice118
6.3662,0.1,1.203, // vertice119
5.8507,-1.8762e-19,1.203, // vertice120
5.8507,0.1,1.203, // vertice121
6.3662,-3.7524e-19,1.203, // vertice122
5.8482,-6.6954e-19,-1.2219, // vertice123
6.3662,0.1,-1.2219, // vertice124
5.8482,0.1,-1.2219, // vertice125
6.3662,-1.3391e-18,-1.2219, // vertice126
4.9862,0.1,-1.2219, // vertice127
4.9862,0,-1.6195, // vertice128
4.9862,0.1,-1.6195, // vertice129
4.9862,-1.3391e-18,-1.2219 // vertice130
]
this.normals = [
3.418e-16,-1,-2.3167e-14, // normal0
3.418e-16,-1,-2.3167e-14, // normal1
3.418e-16,-1,-2.3167e-14, // normal2
3.418e-16,-1,-2.3167e-14, // normal3
3.418e-16,-1,-2.3167e-14, // normal4
1.6961e-16,1,-2.4866e-16, // normal5
1.6961e-16,1,-2.4866e-16, // normal6
1.6961e-16,1,-2.4866e-16, // normal7
1.6961e-16,1,-2.4866e-16, // normal8
1.6961e-16,1,-2.4866e-16, // normal9
0,-1,0, // normal10
0,-1,0, // normal11
0,-1,0, // normal12
0,-1,0, // normal13
0,-1,0, // normal14
1.6961e-16,1,-2.4866e-16, // normal15
1.6961e-16,1,-2.4866e-16, // normal16
1.6961e-16,1,-2.4866e-16, // normal17
1.6961e-16,1,-2.4866e-16, // normal18
1.6961e-16,1,-2.4866e-16, // normal19
1.6961e-16,1,-2.4866e-16, // normal20
1.6961e-16,1,-2.4866e-16, // normal21
1.6961e-16,1,-2.4866e-16, // normal22
1.6961e-16,1,-2.4866e-16, // normal23
1.6961e-16,1,-2.4866e-16, // normal24
1.6961e-16,1,-2.4866e-16, // normal25
1.6961e-16,1,-2.4866e-16, // normal26
1.6961e-16,1,-2.4866e-16, // normal27
1.6961e-16,1,-2.4866e-16, // normal28
3.5557e-14,-1,1.2442e-16, // normal29
3.5557e-14,-1,1.2442e-16, // normal30
3.5557e-14,-1,1.2442e-16, // normal31
3.5557e-14,-1,1.2442e-16, // normal32
3.5557e-14,-1,1.2442e-16, // normal33
1.6961e-16,1,-2.4866e-16, // normal34
1.6961e-16,1,-2.4866e-16, // normal35
1.6961e-16,1,-2.4866e-16, // normal36
1.6961e-16,1,-2.4866e-16, // normal37
1.6961e-16,1,-2.4866e-16, // normal38
1.6961e-16,1,-2.4866e-16, // normal39
1.6961e-16,1,-2.4866e-16, // normal40
1.6961e-16,1,-2.4866e-16, // normal41
1.6961e-16,1,-2.4866e-16, // normal42
1.6961e-16,1,-2.4866e-16, // normal43
1.6961e-16,1,-2.4866e-16, // normal44
1.6961e-16,1,-2.4866e-16, // normal45
1.6961e-16,1,-2.4866e-16, // normal46
1.6961e-16,1,-2.4866e-16, // normal47
1.6961e-16,1,-2.4866e-16, // normal48
1.6961e-16,1,-2.4866e-16, // normal49
-4.1289e-14,-1,-4.9783e-17, // normal50
-4.1289e-14,-1,-4.9783e-17, // normal51
-4.1289e-14,-1,-4.9783e-17, // normal52
-4.1289e-14,-1,-4.9783e-17, // normal53
1.6961e-16,1,-2.4866e-16, // normal54
-4.1289e-14,-1,-4.9783e-17, // normal55
0,1,0, // normal56
0,1,0, // normal57
0,1,0, // normal58
0,1,0, // normal59
0,1,0, // normal60
0,1,0, // normal61
0,1,0, // normal62
0,1,0, // normal63
0,1,0, // normal64
0,1,0, // normal65
0,1,0, // normal66
0,1,0, // normal67
0,1,0, // normal68
0,1,0, // normal69
0,1,0, // normal70
0,1,0, // normal71
0,1,0, // normal72
0,1,0, // normal73
0,1,0, // normal74
0,1,0, // normal75
0,1,0, // normal76
0,1,0, // normal77
0,1,0, // normal78
0,1,0, // normal79
0,1,0, // normal80
0,1,0, // normal81
0,1,0, // normal82
0,1,0, // normal83
0,1,0, // normal84
0,1,0, // normal85
0,1,0, // normal86
0,1,0, // normal87
0,1,0, // normal88
0,1,0, // normal89
0,1,0, // normal90
0,1,0, // normal91
0,1,0, // normal92
0,1,0, // normal93
0,1,0, // normal94
0,1,0, // normal95
0,1,0, // normal96
0,1,0, // normal97
0,1,0, // normal98
0,1,0, // normal99
0,1,0, // normal100
0,1,0, // normal101
0,1,0, // normal102
0,1,0, // normal103
0,1,0, // normal104
0,1,0, // normal105
0,1,0, // normal106
0,1,0, // normal107
1,0,0, // normal108
1,0,0, // normal109
1,0,0, // normal110
1,0,0, // normal111
0,1,0, // normal112
0,1,0, // normal113
0,1,0, // normal114
0,1,0, // normal115
0,1,0, // normal116
0,1,0, // normal117
0,1,0, // normal118
0,0,-1, // normal119
0,0,-1, // normal120
0,0,-1, // normal121
0,0,-1, // normal122
0,0,1, // normal123
0,0,1, // normal124
0,0,1, // normal125
0,0,1, // normal126
1,0,0, // normal127
1,0,0, // normal128
1,0,0, // normal129
1,0,0 // normal130
]
this.uv = [
0.47554,3.5847, // uv0
-0.38773,3.5168, // uv1
0.47596,3.5689, // uv2
-3.081e-15,3.6786, // uv3
-0.39,3.6016, // uv4
0.38773,3.5168, // uv5
0.63474,-3.5533, // uv6
0.39,3.6016, // uv7
0.37737,-3.5196, // uv8
0.3751,-3.6046, // uv9
-3.0034e-16,-3.6786, // uv10
-0.37737,-3.5196, // uv11
-0.3751,-3.6046, // uv12
0.48632,-3.4676, // uv13
0.48938,-3.582, // uv14
-0.47596,3.5689, // uv15
-0.48938,-3.582, // uv16
-0.48632,-3.4676, // uv17
-0.63474,-3.5533, // uv18
-0.63474,3.5533, // uv19
-1.2262,-3.1858, // uv20
-1.2262,3.1858, // uv21
-1.7341,-2.6012, // uv22
-1.7341,2.6012, // uv23
-2.1239,-1.8393, // uv24
-2.1239,1.8393, // uv25
-2.321,-0.92839, // uv26
-2.3689,-0.9521, // uv27
-2.3709,-0.92839, // uv28
2.3709,-0.92839, // uv29
2.321,0.36819, // uv30
2.321,-0.92839, // uv31
2.4201,0.36819, // uv32
2.4524,-2.358e-15, // uv33
-2.321,0.36819, // uv34
-2.3689,0.9521, // uv35
-2.4201,0.36819, // uv36
-0.47554,3.5847, // uv37
0.63474,3.5533, // uv38
1.2262,3.1858, // uv39
1.2262,-3.1858, // uv40
1.7341,2.6012, // uv41
1.7341,-2.6012, // uv42
2.1239,1.8393, // uv43
2.1239,-1.8393, // uv44
2.3689,0.9521, // uv45
2.3666,0.63505, // uv46
2.3666,-0.66153, // uv47
2.3689,-0.9521, // uv48
2.3944,-0.66153, // uv49
-2.3666,-0.66153, // uv50
-2.3967,0.63505, // uv51
-2.3944,-0.66153, // uv52
-2.3666,0.63505, // uv53
2.3967,0.63505, // uv54
-2.4524,8.9837e-16, // uv55
-1.1057,-0.29627, // uv56
-1.1057,0.29627, // uv57
-1.1447,-1.4729e-14, // uv58
-0.99134,-0.57235, // uv59
-0.99134,0.57235, // uv60
-0.80943,-0.80943, // uv61
-0.80943,0.80943, // uv62
-0.57235,0.99134, // uv63
-0.57235,-0.99134, // uv64
-0.29627,1.1057, // uv65
-0.29627,-1.1057, // uv66
-1.0625e-14,1.1447, // uv67
-8.7923e-15,-1.1447, // uv68
0.29627,1.1057, // uv69
0.29627,-1.1057, // uv70
0.57235,0.99134, // uv71
0.57235,-0.99134, // uv72
0.80943,0.80943, // uv73
0.80943,-0.80943, // uv74
0.99134,0.57235, // uv75
0.99134,-0.57235, // uv76
1.1057,-0.29627, // uv77
1.1057,0.29627, // uv78
1.1447,-1.2989e-14, // uv79
-4.7608,-1.9135, // uv80
-4.7608,1.9135, // uv81
-4.9287,9.0539e-16, // uv82
-4.2684,-3.6965, // uv83
-4.2684,3.6965, // uv84
-3.4851,-5.2277, // uv85
-3.4851,5.2277, // uv86
-2.4644,-6.4026, // uv87
-2.4644,6.4026, // uv88
-1.2756,-7.1411, // uv89
-1.2756,7.1411, // uv90
-9.0539e-16,-7.3931, // uv91
3.018e-16,7.3931, // uv92
1.2756,-7.1411, // uv93
1.2756,7.1411, // uv94
2.4644,-6.4026, // uv95
2.4644,6.4026, // uv96
3.4851,-5.2277, // uv97
3.4851,5.2277, // uv98
4.0897,-1.9691, // uv99
4.2684,-3.6965, // uv100
4.7234,-1.9691, // uv101
4.7454,-1.9691, // uv102
4.0897,1.9925, // uv103
4.2684,3.6965, // uv104
4.717,1.9925, // uv105
4.7389,1.9925, // uv106
4.0897,-1.48, // uv107
-63.0125,3.937, // uv108
-47.3604,-1.4773e-17, // uv109
-47.3604,3.937, // uv110
-63.0125,0, // uv111
4.0897,1.5033, // uv112
4.7783,-1.48, // uv113
4.7763,1.5033, // uv114
4.7968,1.5033, // uv115
4.7988,-1.48, // uv116
5.2216,1.5033, // uv117
5.2216,-1.48, // uv118
-250.637,3.937, // uv119
-230.343,-7.3866e-18, // uv120
-230.343,3.937, // uv121
-250.637,-1.4773e-17, // uv122
230.244,-2.636e-17, // uv123
250.637,3.937, // uv124
230.244,3.937, // uv125
250.637,-5.2719e-17, // uv126
48.107,3.937, // uv127
63.7591,0, // uv128
63.7591,3.937, // uv129
48.107,-5.2719e-17 // uv130
]
this.index=[
0,
1,
2,
1,
0,
3,
1,
3,
4,
5,
6,
7,
8,
6,
5,
6,
8,
9,
10,
11,
12,
10,
13,
11,
13,
10,
14,
15,
16,
17,
15,
18,
16,
19,
18,
15,
19,
20,
18,
21,
20,
19,
21,
22,
20,
23,
22,
21,
23,
24,
22,
25,
24,
23,
26,
24,
25,
26,
27,
24,
27,
26,
28,
29,
30,
31,
29,
32,
30,
32,
29,
33,
34,
35,
36,
35,
34,
25,
25,
34,
26,
19,
15,
37,
8,
15,
17,
15,
8,
5,
7,
6,
38,
38,
6,
39,
39,
6,
40,
39,
40,
41,
41,
40,
42,
41,
42,
43,
43,
42,
44,
43,
44,
45,
45,
44,
46,
46,
44,
47,
48,
47,
44,
47,
48,
49,
50,
51,
52,
51,
50,
53,
45,
46,
54,
52,
51,
55,
56,
57,
58,
57,
56,
59,
57,
59,
60,
60,
59,
61,
60,
61,
62,
62,
61,
63,
63,
61,
64,
63,
64,
65,
65,
64,
66,
65,
66,
67,
67,
66,
68,
67,
68,
69,
69,
68,
70,
69,
70,
71,
71,
70,
72,
71,
72,
73,
73,
72,
74,
73,
74,
75,
75,
74,
76,
75,
76,
77,
75,
77,
78,
78,
77,
79,
80,
81,
82,
81,
80,
83,
81,
83,
84,
84,
83,
85,
84,
85,
86,
86,
85,
87,
86,
87,
88,
88,
87,
89,
88,
89,
90,
90,
89,
91,
90,
91,
92,
92,
91,
93,
92,
93,
94,
94,
93,
95,
94,
95,
96,
96,
95,
97,
96,
97,
98,
98,
97,
99,
99,
97,
100,
99,
100,
101,
101,
100,
102,
103,
98,
99,
98,
103,
104,
104,
103,
105,
104,
105,
106,
103,
99,
107,
108,
109,
110,
109,
108,
111,
103,
107,
112,
113,
112,
107,
112,
113,
114,
114,
113,
115,
115,
113,
116,
115,
116,
117,
117,
116,
118,
119,
120,
121,
120,
119,
122,
123,
124,
125,
124,
123,
126,
127,
128,
129,
128,
127,
130
]
}
