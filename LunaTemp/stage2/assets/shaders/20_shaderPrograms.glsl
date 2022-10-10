["#version 100\n\nuniform \tmediump vec4 unity_SHAr;\nuniform \tmediump vec4 unity_SHAg;\nuniform \tmediump vec4 unity_SHAb;\nuniform \tmediump vec4 unity_SHBr;\nuniform \tmediump vec4 unity_SHBg;\nuniform \tmediump vec4 unity_SHBb;\nuniform \tmediump vec4 unity_SHC;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute highp vec3 in_NORMAL0;\nattribute highp vec4 in_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec3 vs_TEXCOORD1;\nvarying highp vec3 vs_TEXCOORD2;\nvarying mediump vec3 vs_TEXCOORD3;\nvarying highp vec4 vs_TEXCOORD5;\nvec4 u_xlat0;\nvec4 u_xlat1;\nmediump vec4 u_xlat16_1;\nmediump vec3 u_xlat16_2;\nmediump vec3 u_xlat16_3;\nfloat u_xlat12;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat1 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    vs_TEXCOORD2.xyz = hlslcc_mtx4x4unity_ObjectToWorld[3].xyz * in_POSITION0.www + u_xlat0.xyz;\n    u_xlat0 = u_xlat1.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat0 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat1.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat1.zzzz + u_xlat0;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat1.wwww + u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0.x = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[0].xyz);\n    u_xlat0.y = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[1].xyz);\n    u_xlat0.z = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[2].xyz);\n    u_xlat12 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat12 = inversesqrt(u_xlat12);\n    u_xlat0.xyz = vec3(u_xlat12) * u_xlat0.xyz;\n    vs_TEXCOORD1.xyz = u_xlat0.xyz;\n    u_xlat16_2.x = u_xlat0.y * u_xlat0.y;\n    u_xlat16_2.x = u_xlat0.x * u_xlat0.x + (-u_xlat16_2.x);\n    u_xlat16_1 = u_xlat0.yzzx * u_xlat0.xyzz;\n    u_xlat16_3.x = dot(unity_SHBr, u_xlat16_1);\n    u_xlat16_3.y = dot(unity_SHBg, u_xlat16_1);\n    u_xlat16_3.z = dot(unity_SHBb, u_xlat16_1);\n    u_xlat16_2.xyz = unity_SHC.xyz * u_xlat16_2.xxx + u_xlat16_3.xyz;\n    u_xlat0.w = 1.0;\n    u_xlat16_3.x = dot(unity_SHAr, u_xlat0);\n    u_xlat16_3.y = dot(unity_SHAg, u_xlat0);\n    u_xlat16_3.z = dot(unity_SHAb, u_xlat0);\n    u_xlat16_2.xyz = u_xlat16_2.xyz + u_xlat16_3.xyz;\n    u_xlat16_2.xyz = max(u_xlat16_2.xyz, vec3(0.0, 0.0, 0.0));\n    u_xlat0.xyz = log2(u_xlat16_2.xyz);\n    u_xlat0.xyz = u_xlat0.xyz * vec3(0.416666657, 0.416666657, 0.416666657);\n    u_xlat0.xyz = exp2(u_xlat0.xyz);\n    u_xlat0.xyz = u_xlat0.xyz * vec3(1.05499995, 1.05499995, 1.05499995) + vec3(-0.0549999997, -0.0549999997, -0.0549999997);\n    u_xlat0.xyz = max(u_xlat0.xyz, vec3(0.0, 0.0, 0.0));\n    vs_TEXCOORD3.xyz = u_xlat0.xyz;\n    vs_TEXCOORD5 = vec4(0.0, 0.0, 0.0, 0.0);\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _WorldSpaceLightPos0;\nuniform \tmediump vec4 _LightColor0;\nuniform \tmediump vec4 _Color;\nuniform lowp sampler2D _MainTex;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec3 vs_TEXCOORD1;\nvarying mediump vec3 vs_TEXCOORD3;\n#define SV_Target0 gl_FragData[0]\nmediump float u_xlat16_0;\nvec3 u_xlat1;\nlowp vec3 u_xlat10_1;\nmediump vec3 u_xlat16_2;\nmediump vec3 u_xlat16_3;\nvoid main()\n{\n    u_xlat16_0 = dot(vs_TEXCOORD1.xyz, _WorldSpaceLightPos0.xyz);\n    u_xlat16_0 = max(u_xlat16_0, 0.0);\n    u_xlat10_1.xyz = texture2D(_MainTex, vs_TEXCOORD0.xy).xyz;\n    u_xlat1.xyz = u_xlat10_1.xyz * _Color.xyz;\n    u_xlat16_3.xyz = u_xlat1.xyz * _LightColor0.xyz;\n    u_xlat16_2.xyz = u_xlat1.xyz * vs_TEXCOORD3.xyz;\n    SV_Target0.xyz = u_xlat16_3.xyz * vec3(u_xlat16_0) + u_xlat16_2.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n"]