var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6102 = root || request.c( 'UnityEngine.JointSpring' )
  var i6103 = data
  i6102.spring = i6103[0]
  i6102.damper = i6103[1]
  i6102.targetPosition = i6103[2]
  return i6102
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6104 = root || request.c( 'UnityEngine.JointMotor' )
  var i6105 = data
  i6104.m_TargetVelocity = i6105[0]
  i6104.m_Force = i6105[1]
  i6104.m_FreeSpin = i6105[2]
  return i6104
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6106 = root || request.c( 'UnityEngine.JointLimits' )
  var i6107 = data
  i6106.m_Min = i6107[0]
  i6106.m_Max = i6107[1]
  i6106.m_Bounciness = i6107[2]
  i6106.m_BounceMinVelocity = i6107[3]
  i6106.m_ContactDistance = i6107[4]
  i6106.minBounce = i6107[5]
  i6106.maxBounce = i6107[6]
  return i6106
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6108 = root || request.c( 'UnityEngine.JointDrive' )
  var i6109 = data
  i6108.m_PositionSpring = i6109[0]
  i6108.m_PositionDamper = i6109[1]
  i6108.m_MaximumForce = i6109[2]
  return i6108
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6110 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6111 = data
  i6110.m_Spring = i6111[0]
  i6110.m_Damper = i6111[1]
  return i6110
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6112 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6113 = data
  i6112.m_Limit = i6113[0]
  i6112.m_Bounciness = i6113[1]
  i6112.m_ContactDistance = i6113[2]
  return i6112
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6114 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6115 = data
  i6114.m_ExtremumSlip = i6115[0]
  i6114.m_ExtremumValue = i6115[1]
  i6114.m_AsymptoteSlip = i6115[2]
  i6114.m_AsymptoteValue = i6115[3]
  i6114.m_Stiffness = i6115[4]
  return i6114
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6116 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6117 = data
  i6116.m_LowerAngle = i6117[0]
  i6116.m_UpperAngle = i6117[1]
  return i6116
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6118 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6119 = data
  i6118.m_MotorSpeed = i6119[0]
  i6118.m_MaximumMotorTorque = i6119[1]
  return i6118
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6120 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6121 = data
  i6120.m_DampingRatio = i6121[0]
  i6120.m_Frequency = i6121[1]
  i6120.m_Angle = i6121[2]
  return i6120
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6122 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6123 = data
  i6122.m_LowerTranslation = i6123[0]
  i6122.m_UpperTranslation = i6123[1]
  return i6122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6124 = root || new pc.UnityMaterial()
  var i6125 = data
  i6124.name = i6125[0]
  request.r(i6125[1], i6125[2], 0, i6124, 'shader')
  i6124.renderQueue = i6125[3]
  i6124.enableInstancing = !!i6125[4]
  var i6127 = i6125[5]
  var i6126 = []
  for(var i = 0; i < i6127.length; i += 1) {
    i6126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6127[i + 0]) );
  }
  i6124.floatParameters = i6126
  var i6129 = i6125[6]
  var i6128 = []
  for(var i = 0; i < i6129.length; i += 1) {
    i6128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6129[i + 0]) );
  }
  i6124.colorParameters = i6128
  var i6131 = i6125[7]
  var i6130 = []
  for(var i = 0; i < i6131.length; i += 1) {
    i6130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6131[i + 0]) );
  }
  i6124.vectorParameters = i6130
  var i6133 = i6125[8]
  var i6132 = []
  for(var i = 0; i < i6133.length; i += 1) {
    i6132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6133[i + 0]) );
  }
  i6124.textureParameters = i6132
  var i6135 = i6125[9]
  var i6134 = []
  for(var i = 0; i < i6135.length; i += 1) {
    i6134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6135[i + 0]) );
  }
  i6124.materialFlags = i6134
  return i6124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6139 = data
  i6138.name = i6139[0]
  i6138.value = i6139[1]
  return i6138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6143 = data
  i6142.name = i6143[0]
  i6142.value = new pc.Color(i6143[1], i6143[2], i6143[3], i6143[4])
  return i6142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6147 = data
  i6146.name = i6147[0]
  i6146.value = new pc.Vec4( i6147[1], i6147[2], i6147[3], i6147[4] )
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6151 = data
  i6150.name = i6151[0]
  request.r(i6151[1], i6151[2], 0, i6150, 'value')
  return i6150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6155 = data
  i6154.name = i6155[0]
  i6154.enabled = !!i6155[1]
  return i6154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6157 = data
  i6156.name = i6157[0]
  i6156.width = i6157[1]
  i6156.height = i6157[2]
  i6156.mipmapCount = i6157[3]
  i6156.anisoLevel = i6157[4]
  i6156.filterMode = i6157[5]
  i6156.hdr = !!i6157[6]
  i6156.format = i6157[7]
  i6156.wrapMode = i6157[8]
  i6156.alphaIsTransparency = !!i6157[9]
  i6156.alphaSource = i6157[10]
  return i6156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6159 = data
  i6158.position = new pc.Vec3( i6159[0], i6159[1], i6159[2] )
  i6158.scale = new pc.Vec3( i6159[3], i6159[4], i6159[5] )
  i6158.rotation = new pc.Quat(i6159[6], i6159[7], i6159[8], i6159[9])
  return i6158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6161 = data
  i6160.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6161[0], i6160.main)
  i6160.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6161[1], i6160.colorBySpeed)
  i6160.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6161[2], i6160.colorOverLifetime)
  i6160.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6161[3], i6160.emission)
  i6160.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6161[4], i6160.rotationBySpeed)
  i6160.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6161[5], i6160.rotationOverLifetime)
  i6160.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6161[6], i6160.shape)
  i6160.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6161[7], i6160.sizeBySpeed)
  i6160.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6161[8], i6160.sizeOverLifetime)
  i6160.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6161[9], i6160.textureSheetAnimation)
  i6160.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6161[10], i6160.velocityOverLifetime)
  i6160.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6161[11], i6160.noise)
  i6160.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6161[12], i6160.inheritVelocity)
  i6160.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6161[13], i6160.forceOverLifetime)
  i6160.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6161[14], i6160.limitVelocityOverLifetime)
  i6160.useAutoRandomSeed = !!i6161[15]
  i6160.randomSeed = i6161[16]
  return i6160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6162 = root || new pc.ParticleSystemMain()
  var i6163 = data
  i6162.duration = i6163[0]
  i6162.loop = !!i6163[1]
  i6162.prewarm = !!i6163[2]
  i6162.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[3], i6162.startDelay)
  i6162.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[4], i6162.startLifetime)
  i6162.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[5], i6162.startSpeed)
  i6162.startSize3D = !!i6163[6]
  i6162.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[7], i6162.startSizeX)
  i6162.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[8], i6162.startSizeY)
  i6162.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[9], i6162.startSizeZ)
  i6162.startRotation3D = !!i6163[10]
  i6162.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[11], i6162.startRotationX)
  i6162.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[12], i6162.startRotationY)
  i6162.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[13], i6162.startRotationZ)
  i6162.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6163[14], i6162.startColor)
  i6162.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6163[15], i6162.gravityModifier)
  i6162.simulationSpace = i6163[16]
  request.r(i6163[17], i6163[18], 0, i6162, 'customSimulationSpace')
  i6162.simulationSpeed = i6163[19]
  i6162.useUnscaledTime = !!i6163[20]
  i6162.scalingMode = i6163[21]
  i6162.playOnAwake = !!i6163[22]
  i6162.maxParticles = i6163[23]
  i6162.emitterVelocityMode = i6163[24]
  i6162.stopAction = i6163[25]
  return i6162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6164 = root || new pc.MinMaxCurve()
  var i6165 = data
  i6164.mode = i6165[0]
  i6164.curveMin = new pc.AnimationCurve( { keys_flow: i6165[1] } )
  i6164.curveMax = new pc.AnimationCurve( { keys_flow: i6165[2] } )
  i6164.curveMultiplier = i6165[3]
  i6164.constantMin = i6165[4]
  i6164.constantMax = i6165[5]
  return i6164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6166 = root || new pc.MinMaxGradient()
  var i6167 = data
  i6166.mode = i6167[0]
  i6166.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6167[1], i6166.gradientMin)
  i6166.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6167[2], i6166.gradientMax)
  i6166.colorMin = new pc.Color(i6167[3], i6167[4], i6167[5], i6167[6])
  i6166.colorMax = new pc.Color(i6167[7], i6167[8], i6167[9], i6167[10])
  return i6166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6169 = data
  i6168.mode = i6169[0]
  var i6171 = i6169[1]
  var i6170 = []
  for(var i = 0; i < i6171.length; i += 1) {
    i6170.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6171[i + 0]) );
  }
  i6168.colorKeys = i6170
  var i6173 = i6169[2]
  var i6172 = []
  for(var i = 0; i < i6173.length; i += 1) {
    i6172.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6173[i + 0]) );
  }
  i6168.alphaKeys = i6172
  return i6168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6174 = root || new pc.ParticleSystemColorBySpeed()
  var i6175 = data
  i6174.enabled = !!i6175[0]
  i6174.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6175[1], i6174.color)
  i6174.range = new pc.Vec2( i6175[2], i6175[3] )
  return i6174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6179 = data
  i6178.color = new pc.Color(i6179[0], i6179[1], i6179[2], i6179[3])
  i6178.time = i6179[4]
  return i6178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6183 = data
  i6182.alpha = i6183[0]
  i6182.time = i6183[1]
  return i6182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6184 = root || new pc.ParticleSystemColorOverLifetime()
  var i6185 = data
  i6184.enabled = !!i6185[0]
  i6184.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6185[1], i6184.color)
  return i6184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6186 = root || new pc.ParticleSystemEmitter()
  var i6187 = data
  i6186.enabled = !!i6187[0]
  i6186.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6187[1], i6186.rateOverTime)
  i6186.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6187[2], i6186.rateOverDistance)
  var i6189 = i6187[3]
  var i6188 = []
  for(var i = 0; i < i6189.length; i += 1) {
    i6188.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6189[i + 0]) );
  }
  i6186.bursts = i6188
  return i6186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6192 = root || new pc.ParticleSystemBurst()
  var i6193 = data
  i6192.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6193[0], i6192.count)
  i6192.cycleCount = i6193[1]
  i6192.minCount = i6193[2]
  i6192.maxCount = i6193[3]
  i6192.repeatInterval = i6193[4]
  i6192.time = i6193[5]
  return i6192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6194 = root || new pc.ParticleSystemRotationBySpeed()
  var i6195 = data
  i6194.enabled = !!i6195[0]
  i6194.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6195[1], i6194.x)
  i6194.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6195[2], i6194.y)
  i6194.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6195[3], i6194.z)
  i6194.separateAxes = !!i6195[4]
  i6194.range = new pc.Vec2( i6195[5], i6195[6] )
  return i6194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6196 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6197 = data
  i6196.enabled = !!i6197[0]
  i6196.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[1], i6196.x)
  i6196.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[2], i6196.y)
  i6196.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6197[3], i6196.z)
  i6196.separateAxes = !!i6197[4]
  return i6196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6198 = root || new pc.ParticleSystemShape()
  var i6199 = data
  i6198.enabled = !!i6199[0]
  i6198.shapeType = i6199[1]
  i6198.randomDirectionAmount = i6199[2]
  i6198.sphericalDirectionAmount = i6199[3]
  i6198.randomPositionAmount = i6199[4]
  i6198.alignToDirection = !!i6199[5]
  i6198.radius = i6199[6]
  i6198.radiusMode = i6199[7]
  i6198.radiusSpread = i6199[8]
  i6198.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6199[9], i6198.radiusSpeed)
  i6198.radiusThickness = i6199[10]
  i6198.angle = i6199[11]
  i6198.length = i6199[12]
  i6198.boxThickness = new pc.Vec3( i6199[13], i6199[14], i6199[15] )
  i6198.meshShapeType = i6199[16]
  request.r(i6199[17], i6199[18], 0, i6198, 'mesh')
  request.r(i6199[19], i6199[20], 0, i6198, 'meshRenderer')
  request.r(i6199[21], i6199[22], 0, i6198, 'skinnedMeshRenderer')
  i6198.useMeshMaterialIndex = !!i6199[23]
  i6198.meshMaterialIndex = i6199[24]
  i6198.useMeshColors = !!i6199[25]
  i6198.normalOffset = i6199[26]
  i6198.arc = i6199[27]
  i6198.arcMode = i6199[28]
  i6198.arcSpread = i6199[29]
  i6198.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6199[30], i6198.arcSpeed)
  i6198.donutRadius = i6199[31]
  i6198.position = new pc.Vec3( i6199[32], i6199[33], i6199[34] )
  i6198.rotation = new pc.Vec3( i6199[35], i6199[36], i6199[37] )
  i6198.scale = new pc.Vec3( i6199[38], i6199[39], i6199[40] )
  return i6198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6200 = root || new pc.ParticleSystemSizeBySpeed()
  var i6201 = data
  i6200.enabled = !!i6201[0]
  i6200.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6201[1], i6200.x)
  i6200.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6201[2], i6200.y)
  i6200.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6201[3], i6200.z)
  i6200.separateAxes = !!i6201[4]
  i6200.range = new pc.Vec2( i6201[5], i6201[6] )
  return i6200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6202 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6203 = data
  i6202.enabled = !!i6203[0]
  i6202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6203[1], i6202.x)
  i6202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6203[2], i6202.y)
  i6202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6203[3], i6202.z)
  i6202.separateAxes = !!i6203[4]
  return i6202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6204 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6205 = data
  i6204.enabled = !!i6205[0]
  i6204.mode = i6205[1]
  i6204.animation = i6205[2]
  i6204.numTilesX = i6205[3]
  i6204.numTilesY = i6205[4]
  i6204.useRandomRow = !!i6205[5]
  i6204.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6205[6], i6204.frameOverTime)
  i6204.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6205[7], i6204.startFrame)
  i6204.cycleCount = i6205[8]
  i6204.rowIndex = i6205[9]
  i6204.flipU = i6205[10]
  i6204.flipV = i6205[11]
  i6204.spriteCount = i6205[12]
  var i6207 = i6205[13]
  var i6206 = []
  for(var i = 0; i < i6207.length; i += 2) {
  request.r(i6207[i + 0], i6207[i + 1], 2, i6206, '')
  }
  i6204.sprites = i6206
  return i6204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6210 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6211 = data
  i6210.enabled = !!i6211[0]
  i6210.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6211[1], i6210.x)
  i6210.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6211[2], i6210.y)
  i6210.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6211[3], i6210.z)
  i6210.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6211[4], i6210.speedModifier)
  i6210.space = i6211[5]
  return i6210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6212 = root || new pc.ParticleSystemNoise()
  var i6213 = data
  i6212.enabled = !!i6213[0]
  i6212.separateAxes = !!i6213[1]
  i6212.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[2], i6212.strengthX)
  i6212.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[3], i6212.strengthY)
  i6212.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[4], i6212.strengthZ)
  i6212.frequency = i6213[5]
  i6212.damping = !!i6213[6]
  i6212.octaveCount = i6213[7]
  i6212.octaveMultiplier = i6213[8]
  i6212.octaveScale = i6213[9]
  i6212.quality = i6213[10]
  i6212.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[11], i6212.scrollSpeed)
  i6212.scrollSpeedMultiplier = i6213[12]
  i6212.remapEnabled = !!i6213[13]
  i6212.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[14], i6212.remapX)
  i6212.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[15], i6212.remapY)
  i6212.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[16], i6212.remapZ)
  i6212.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[17], i6212.positionAmount)
  i6212.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[18], i6212.rotationAmount)
  i6212.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6213[19], i6212.sizeAmount)
  return i6212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6214 = root || new pc.ParticleSystemInheritVelocity()
  var i6215 = data
  i6214.enabled = !!i6215[0]
  i6214.mode = i6215[1]
  i6214.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6215[2], i6214.curve)
  return i6214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6216 = root || new pc.ParticleSystemForceOverLifetime()
  var i6217 = data
  i6216.enabled = !!i6217[0]
  i6216.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6217[1], i6216.x)
  i6216.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6217[2], i6216.y)
  i6216.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6217[3], i6216.z)
  i6216.space = i6217[4]
  i6216.randomized = !!i6217[5]
  return i6216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6218 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6219 = data
  i6218.enabled = !!i6219[0]
  i6218.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6219[1], i6218.limitX)
  i6218.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6219[2], i6218.limitY)
  i6218.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6219[3], i6218.limitZ)
  i6218.dampen = i6219[4]
  i6218.separateAxes = !!i6219[5]
  i6218.space = i6219[6]
  i6218.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6219[7], i6218.drag)
  i6218.multiplyDragByParticleSize = !!i6219[8]
  i6218.multiplyDragByParticleVelocity = !!i6219[9]
  return i6218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6221 = data
  i6220.enabled = !!i6221[0]
  request.r(i6221[1], i6221[2], 0, i6220, 'sharedMaterial')
  var i6223 = i6221[3]
  var i6222 = []
  for(var i = 0; i < i6223.length; i += 2) {
  request.r(i6223[i + 0], i6223[i + 1], 2, i6222, '')
  }
  i6220.sharedMaterials = i6222
  i6220.receiveShadows = !!i6221[4]
  i6220.shadowCastingMode = i6221[5]
  i6220.sortingLayerID = i6221[6]
  i6220.sortingOrder = i6221[7]
  i6220.lightmapIndex = i6221[8]
  i6220.lightmapSceneIndex = i6221[9]
  i6220.lightmapScaleOffset = new pc.Vec4( i6221[10], i6221[11], i6221[12], i6221[13] )
  i6220.lightProbeUsage = i6221[14]
  i6220.reflectionProbeUsage = i6221[15]
  request.r(i6221[16], i6221[17], 0, i6220, 'mesh')
  i6220.meshCount = i6221[18]
  i6220.activeVertexStreamsCount = i6221[19]
  i6220.alignment = i6221[20]
  i6220.renderMode = i6221[21]
  i6220.sortMode = i6221[22]
  i6220.lengthScale = i6221[23]
  i6220.velocityScale = i6221[24]
  i6220.cameraVelocityScale = i6221[25]
  i6220.normalDirection = i6221[26]
  i6220.sortingFudge = i6221[27]
  i6220.minParticleSize = i6221[28]
  i6220.maxParticleSize = i6221[29]
  i6220.pivot = new pc.Vec3( i6221[30], i6221[31], i6221[32] )
  request.r(i6221[33], i6221[34], 0, i6220, 'trailMaterial')
  return i6220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6227 = data
  i6226.name = i6227[0]
  i6226.tag = i6227[1]
  i6226.enabled = !!i6227[2]
  i6226.isStatic = !!i6227[3]
  i6226.layer = i6227[4]
  return i6226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6229 = data
  request.r(i6229[0], i6229[1], 0, i6228, 'sharedMesh')
  return i6228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6231 = data
  request.r(i6231[0], i6231[1], 0, i6230, 'additionalVertexStreams')
  i6230.enabled = !!i6231[2]
  request.r(i6231[3], i6231[4], 0, i6230, 'sharedMaterial')
  var i6233 = i6231[5]
  var i6232 = []
  for(var i = 0; i < i6233.length; i += 2) {
  request.r(i6233[i + 0], i6233[i + 1], 2, i6232, '')
  }
  i6230.sharedMaterials = i6232
  i6230.receiveShadows = !!i6231[6]
  i6230.shadowCastingMode = i6231[7]
  i6230.sortingLayerID = i6231[8]
  i6230.sortingOrder = i6231[9]
  i6230.lightmapIndex = i6231[10]
  i6230.lightmapSceneIndex = i6231[11]
  i6230.lightmapScaleOffset = new pc.Vec4( i6231[12], i6231[13], i6231[14], i6231[15] )
  i6230.lightProbeUsage = i6231[16]
  i6230.reflectionProbeUsage = i6231[17]
  return i6230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6235 = data
  i6234.name = i6235[0]
  i6234.halfPrecision = !!i6235[1]
  i6234.vertexCount = i6235[2]
  i6234.aabb = i6235[3]
  var i6237 = i6235[4]
  var i6236 = []
  for(var i = 0; i < i6237.length; i += 1) {
    i6236.push( !!i6237[i + 0] );
  }
  i6234.streams = i6236
  i6234.vertices = i6235[5]
  var i6239 = i6235[6]
  var i6238 = []
  for(var i = 0; i < i6239.length; i += 1) {
    i6238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6239[i + 0]) );
  }
  i6234.subMeshes = i6238
  var i6241 = i6235[7]
  var i6240 = []
  for(var i = 0; i < i6241.length; i += 16) {
    i6240.push( new pc.Mat4().setData(i6241[i + 0], i6241[i + 1], i6241[i + 2], i6241[i + 3],  i6241[i + 4], i6241[i + 5], i6241[i + 6], i6241[i + 7],  i6241[i + 8], i6241[i + 9], i6241[i + 10], i6241[i + 11],  i6241[i + 12], i6241[i + 13], i6241[i + 14], i6241[i + 15]) );
  }
  i6234.bindposes = i6240
  var i6243 = i6235[8]
  var i6242 = []
  for(var i = 0; i < i6243.length; i += 1) {
    i6242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6243[i + 0]) );
  }
  i6234.blendShapes = i6242
  return i6234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6249 = data
  i6248.triangles = i6249[0]
  return i6248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6255 = data
  i6254.name = i6255[0]
  var i6257 = i6255[1]
  var i6256 = []
  for(var i = 0; i < i6257.length; i += 1) {
    i6256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6257[i + 0]) );
  }
  i6254.frames = i6256
  return i6254
}

Deserializers["ScenarioFour.Path"] = function (request, data, root) {
  var i6258 = root || request.c( 'ScenarioFour.Path' )
  var i6259 = data
  var i6261 = i6259[0]
  var i6260 = []
  for(var i = 0; i < i6261.length; i += 2) {
  request.r(i6261[i + 0], i6261[i + 1], 2, i6260, '')
  }
  i6258._points = i6260
  return i6258
}

Deserializers["ScenarioFour.PathPoint"] = function (request, data, root) {
  var i6264 = root || request.c( 'ScenarioFour.PathPoint' )
  var i6265 = data
  i6264._time = i6265[0]
  return i6264
}

Deserializers["ScenarioFour.Bullet"] = function (request, data, root) {
  var i6266 = root || request.c( 'ScenarioFour.Bullet' )
  var i6267 = data
  i6266._flyTime = i6267[0]
  i6266._flySpeed = i6267[1]
  return i6266
}

Deserializers["ScenarioFour.Enemy"] = function (request, data, root) {
  var i6268 = root || request.c( 'ScenarioFour.Enemy' )
  var i6269 = data
  request.r(i6269[0], i6269[1], 0, i6268, '_animatedModel')
  request.r(i6269[2], i6269[3], 0, i6268, '_bulletTemplate')
  request.r(i6269[4], i6269[5], 0, i6268, '_shootPoint')
  request.r(i6269[6], i6269[7], 0, i6268, '_bloodEffect')
  return i6268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6271 = data
  request.r(i6271[0], i6271[1], 0, i6270, 'animatorController')
  i6270.updateMode = i6271[2]
  var i6273 = i6271[3]
  var i6272 = []
  for(var i = 0; i < i6273.length; i += 2) {
  request.r(i6273[i + 0], i6273[i + 1], 2, i6272, '')
  }
  i6270.humanBones = i6272
  i6270.enabled = !!i6271[4]
  return i6270
}

Deserializers["ScenarioFour.EnemyAnimatedModel"] = function (request, data, root) {
  var i6276 = root || request.c( 'ScenarioFour.EnemyAnimatedModel' )
  var i6277 = data
  return i6276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i6278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i6279 = data
  i6278.enabled = !!i6279[0]
  request.r(i6279[1], i6279[2], 0, i6278, 'sharedMaterial')
  var i6281 = i6279[3]
  var i6280 = []
  for(var i = 0; i < i6281.length; i += 2) {
  request.r(i6281[i + 0], i6281[i + 1], 2, i6280, '')
  }
  i6278.sharedMaterials = i6280
  i6278.receiveShadows = !!i6279[4]
  i6278.shadowCastingMode = i6279[5]
  i6278.sortingLayerID = i6279[6]
  i6278.sortingOrder = i6279[7]
  i6278.lightmapIndex = i6279[8]
  i6278.lightmapSceneIndex = i6279[9]
  i6278.lightmapScaleOffset = new pc.Vec4( i6279[10], i6279[11], i6279[12], i6279[13] )
  i6278.lightProbeUsage = i6279[14]
  i6278.reflectionProbeUsage = i6279[15]
  request.r(i6279[16], i6279[17], 0, i6278, 'sharedMesh')
  var i6283 = i6279[18]
  var i6282 = []
  for(var i = 0; i < i6283.length; i += 2) {
  request.r(i6283[i + 0], i6283[i + 1], 2, i6282, '')
  }
  i6278.bones = i6282
  i6278.updateWhenOffscreen = !!i6279[19]
  i6278.localBounds = i6279[20]
  request.r(i6279[21], i6279[22], 0, i6278, 'rootBone')
  var i6285 = i6279[23]
  var i6284 = []
  for(var i = 0; i < i6285.length; i += 1) {
    i6284.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i6285[i + 0]) );
  }
  i6278.blendShapesWeights = i6284
  return i6278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i6288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i6289 = data
  i6288.weight = i6289[0]
  return i6288
}

Deserializers["ScenarioFour.Director"] = function (request, data, root) {
  var i6290 = root || request.c( 'ScenarioFour.Director' )
  var i6291 = data
  request.r(i6291[0], i6291[1], 0, i6290, '_girl')
  request.r(i6291[2], i6291[3], 0, i6290, '_cameras')
  request.r(i6291[4], i6291[5], 0, i6290, '_uiSwitcher')
  request.r(i6291[6], i6291[7], 0, i6290, '_enemies')
  request.r(i6291[8], i6291[9], 0, i6290, '_teleportEffectStatic')
  var i6293 = i6291[10]
  var i6292 = []
  for(var i = 0; i < i6293.length; i += 1) {
    i6292.push( request.d('ScenarioFour.CameraTiming', i6293[i + 0]) );
  }
  i6290._timings = i6292
  return i6290
}

Deserializers["ScenarioFour.CameraTiming"] = function (request, data, root) {
  var i6296 = root || request.c( 'ScenarioFour.CameraTiming' )
  var i6297 = data
  i6296._timing = i6297[0]
  i6296._cameraType = i6297[1]
  return i6296
}

Deserializers["ScenarioFour.Cameras"] = function (request, data, root) {
  var i6298 = root || request.c( 'ScenarioFour.Cameras' )
  var i6299 = data
  var i6301 = i6299[0]
  var i6300 = []
  for(var i = 0; i < i6301.length; i += 1) {
    i6300.push( request.d('ScenarioFour.CreoCamera', i6301[i + 0]) );
  }
  i6298._cameras = i6300
  request.r(i6299[1], i6299[2], 0, i6298, '_camerasFovList')
  request.r(i6299[3], i6299[4], 0, i6298, '_cameraFovChanger')
  return i6298
}

Deserializers["ScenarioFour.CreoCamera"] = function (request, data, root) {
  var i6304 = root || request.c( 'ScenarioFour.CreoCamera' )
  var i6305 = data
  request.r(i6305[0], i6305[1], 0, i6304, '_camera')
  i6304._type = i6305[2]
  return i6304
}

Deserializers["CameraFovChanger"] = function (request, data, root) {
  var i6306 = root || request.c( 'CameraFovChanger' )
  var i6307 = data
  return i6306
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i6308 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i6309 = data
  request.r(i6309[0], i6309[1], 0, i6308, 'm_LookAt')
  request.r(i6309[2], i6309[3], 0, i6308, 'm_Follow')
  i6308.m_Lens = request.d('Cinemachine.LensSettings', i6309[4], i6308.m_Lens)
  i6308.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i6309[5], i6308.m_Transitions)
  var i6311 = i6309[6]
  var i6310 = []
  for(var i = 0; i < i6311.length; i += 1) {
    i6310.push( i6311[i + 0] );
  }
  i6308.m_ExcludedPropertiesInInspector = i6310
  var i6313 = i6309[7]
  var i6312 = []
  for(var i = 0; i < i6313.length; i += 1) {
    i6312.push( i6313[i + 0] );
  }
  i6308.m_LockStageInInspector = i6312
  i6308.m_Priority = i6309[8]
  i6308.m_StandbyUpdate = i6309[9]
  i6308.m_LegacyBlendHint = i6309[10]
  request.r(i6309[11], i6309[12], 0, i6308, 'm_ComponentOwner')
  i6308.m_StreamingVersion = i6309[13]
  return i6308
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i6314 = root || request.c( 'Cinemachine.LensSettings' )
  var i6315 = data
  i6314.FieldOfView = i6315[0]
  i6314.OrthographicSize = i6315[1]
  i6314.NearClipPlane = i6315[2]
  i6314.FarClipPlane = i6315[3]
  i6314.Dutch = i6315[4]
  i6314.LensShift = new pc.Vec2( i6315[5], i6315[6] )
  return i6314
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i6316 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i6317 = data
  i6316.m_BlendHint = i6317[0]
  i6316.m_InheritPosition = !!i6317[1]
  i6316.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i6317[2], i6316.m_OnCameraLive)
  return i6316
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i6318 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i6319 = data
  i6318.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6319[0], i6318.m_PersistentCalls)
  return i6318
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6320 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6321 = data
  var i6323 = i6321[0]
  var i6322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6323.length; i += 1) {
    i6322.add(request.d('UnityEngine.Events.PersistentCall', i6323[i + 0]));
  }
  i6320.m_Calls = i6322
  return i6320
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6326 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6327 = data
  request.r(i6327[0], i6327[1], 0, i6326, 'm_Target')
  i6326.m_TargetAssemblyTypeName = i6327[2]
  i6326.m_MethodName = i6327[3]
  i6326.m_Mode = i6327[4]
  i6326.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6327[5], i6326.m_Arguments)
  i6326.m_CallState = i6327[6]
  return i6326
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i6332 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i6333 = data
  return i6332
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i6334 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i6335 = data
  i6334.m_TrackedObjectOffset = new pc.Vec3( i6335[0], i6335[1], i6335[2] )
  i6334.m_LookaheadTime = i6335[3]
  i6334.m_LookaheadSmoothing = i6335[4]
  i6334.m_LookaheadIgnoreY = !!i6335[5]
  i6334.m_HorizontalDamping = i6335[6]
  i6334.m_VerticalDamping = i6335[7]
  i6334.m_ScreenX = i6335[8]
  i6334.m_ScreenY = i6335[9]
  i6334.m_DeadZoneWidth = i6335[10]
  i6334.m_DeadZoneHeight = i6335[11]
  i6334.m_SoftZoneWidth = i6335[12]
  i6334.m_SoftZoneHeight = i6335[13]
  i6334.m_BiasX = i6335[14]
  i6334.m_BiasY = i6335[15]
  i6334.m_CenterOnActivate = !!i6335[16]
  return i6334
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i6336 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i6337 = data
  i6336.m_BindingMode = i6337[0]
  i6336.m_FollowOffset = new pc.Vec3( i6337[1], i6337[2], i6337[3] )
  i6336.m_XDamping = i6337[4]
  i6336.m_YDamping = i6337[5]
  i6336.m_ZDamping = i6337[6]
  i6336.m_AngularDampingMode = i6337[7]
  i6336.m_PitchDamping = i6337[8]
  i6336.m_YawDamping = i6337[9]
  i6336.m_RollDamping = i6337[10]
  i6336.m_AngularDamping = i6337[11]
  return i6336
}

Deserializers["Cinemachine.CinemachineBasicMultiChannelPerlin"] = function (request, data, root) {
  var i6338 = root || request.c( 'Cinemachine.CinemachineBasicMultiChannelPerlin' )
  var i6339 = data
  request.r(i6339[0], i6339[1], 0, i6338, 'm_NoiseProfile')
  i6338.m_PivotOffset = new pc.Vec3( i6339[2], i6339[3], i6339[4] )
  i6338.m_AmplitudeGain = i6339[5]
  i6338.m_FrequencyGain = i6339[6]
  i6338.mNoiseOffsets = new pc.Vec3( i6339[7], i6339[8], i6339[9] )
  return i6338
}

Deserializers["ScenarioFour.Enemies"] = function (request, data, root) {
  var i6340 = root || request.c( 'ScenarioFour.Enemies' )
  var i6341 = data
  request.r(i6341[0], i6341[1], 0, i6340, '_enemyRight')
  request.r(i6341[2], i6341[3], 0, i6340, '_enemyLeft')
  return i6340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6343 = data
  i6342.name = i6343[0]
  i6342.atlasId = i6343[1]
  i6342.mipmapCount = i6343[2]
  i6342.hdr = !!i6343[3]
  i6342.size = i6343[4]
  i6342.anisoLevel = i6343[5]
  i6342.filterMode = i6343[6]
  i6342.wrapMode = i6343[7]
  var i6345 = i6343[8]
  var i6344 = []
  for(var i = 0; i < i6345.length; i += 4) {
    i6344.push( UnityEngine.Rect.MinMaxRect(i6345[i + 0], i6345[i + 1], i6345[i + 2], i6345[i + 3]) );
  }
  i6342.rects = i6344
  return i6342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6349 = data
  i6348.name = i6349[0]
  i6348.index = i6349[1]
  i6348.startup = !!i6349[2]
  return i6348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6351 = data
  i6350.enabled = !!i6351[0]
  i6350.aspect = i6351[1]
  i6350.orthographic = !!i6351[2]
  i6350.orthographicSize = i6351[3]
  i6350.backgroundColor = new pc.Color(i6351[4], i6351[5], i6351[6], i6351[7])
  i6350.nearClipPlane = i6351[8]
  i6350.farClipPlane = i6351[9]
  i6350.fieldOfView = i6351[10]
  i6350.depth = i6351[11]
  i6350.clearFlags = i6351[12]
  i6350.cullingMask = i6351[13]
  i6350.rect = i6351[14]
  request.r(i6351[15], i6351[16], 0, i6350, 'targetTexture')
  return i6350
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i6352 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i6353 = data
  i6352.m_ShowDebugText = !!i6353[0]
  i6352.m_ShowCameraFrustum = !!i6353[1]
  i6352.m_IgnoreTimeScale = !!i6353[2]
  request.r(i6353[3], i6353[4], 0, i6352, 'm_WorldUpOverride')
  i6352.m_UpdateMethod = i6353[5]
  i6352.m_BlendUpdateMethod = i6353[6]
  i6352.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i6353[7], i6352.m_DefaultBlend)
  request.r(i6353[8], i6353[9], 0, i6352, 'm_CustomBlends')
  i6352.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i6353[10], i6352.m_CameraCutEvent)
  i6352.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i6353[11], i6352.m_CameraActivatedEvent)
  return i6352
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i6354 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i6355 = data
  i6354.m_Style = i6355[0]
  i6354.m_Time = i6355[1]
  i6354.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i6355[2] } )
  return i6354
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i6356 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i6357 = data
  i6356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6357[0], i6356.m_PersistentCalls)
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6359 = data
  request.r(i6359[0], i6359[1], 0, i6358, 'clip')
  request.r(i6359[2], i6359[3], 0, i6358, 'outputAudioMixerGroup')
  i6358.playOnAwake = !!i6359[4]
  i6358.loop = !!i6359[5]
  i6358.time = i6359[6]
  i6358.volume = i6359[7]
  i6358.pitch = i6359[8]
  i6358.enabled = !!i6359[9]
  return i6358
}

Deserializers["SoundHandler"] = function (request, data, root) {
  var i6360 = root || request.c( 'SoundHandler' )
  var i6361 = data
  request.r(i6361[0], i6361[1], 0, i6360, '_audioSource')
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6363 = data
  i6362.enabled = !!i6363[0]
  i6362.type = i6363[1]
  i6362.color = new pc.Color(i6363[2], i6363[3], i6363[4], i6363[5])
  i6362.cullingMask = i6363[6]
  i6362.intensity = i6363[7]
  i6362.range = i6363[8]
  i6362.spotAngle = i6363[9]
  i6362.shadows = i6363[10]
  i6362.shadowNormalBias = i6363[11]
  i6362.shadowBias = i6363[12]
  i6362.shadowStrength = i6363[13]
  i6362.shadowResolution = i6363[14]
  i6362.lightmapBakeType = i6363[15]
  i6362.renderMode = i6363[16]
  request.r(i6363[17], i6363[18], 0, i6362, 'cookie')
  i6362.cookieSize = i6363[19]
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6365 = data
  i6364.pivot = new pc.Vec2( i6365[0], i6365[1] )
  i6364.anchorMin = new pc.Vec2( i6365[2], i6365[3] )
  i6364.anchorMax = new pc.Vec2( i6365[4], i6365[5] )
  i6364.sizeDelta = new pc.Vec2( i6365[6], i6365[7] )
  i6364.anchoredPosition3D = new pc.Vec3( i6365[8], i6365[9], i6365[10] )
  i6364.rotation = new pc.Quat(i6365[11], i6365[12], i6365[13], i6365[14])
  i6364.scale = new pc.Vec3( i6365[15], i6365[16], i6365[17] )
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6367 = data
  i6366.enabled = !!i6367[0]
  i6366.planeDistance = i6367[1]
  i6366.referencePixelsPerUnit = i6367[2]
  i6366.isFallbackOverlay = !!i6367[3]
  i6366.renderMode = i6367[4]
  i6366.renderOrder = i6367[5]
  i6366.sortingLayerName = i6367[6]
  i6366.sortingOrder = i6367[7]
  i6366.scaleFactor = i6367[8]
  request.r(i6367[9], i6367[10], 0, i6366, 'worldCamera')
  i6366.overrideSorting = !!i6367[11]
  i6366.pixelPerfect = !!i6367[12]
  i6366.targetDisplay = i6367[13]
  i6366.overridePixelPerfect = !!i6367[14]
  return i6366
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6368 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6369 = data
  i6368.m_UiScaleMode = i6369[0]
  i6368.m_ReferencePixelsPerUnit = i6369[1]
  i6368.m_ScaleFactor = i6369[2]
  i6368.m_ReferenceResolution = new pc.Vec2( i6369[3], i6369[4] )
  i6368.m_ScreenMatchMode = i6369[5]
  i6368.m_MatchWidthOrHeight = i6369[6]
  i6368.m_PhysicalUnit = i6369[7]
  i6368.m_FallbackScreenDPI = i6369[8]
  i6368.m_DefaultSpriteDPI = i6369[9]
  i6368.m_DynamicPixelsPerUnit = i6369[10]
  i6368.m_PresetInfoIsWorld = !!i6369[11]
  return i6368
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6370 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6371 = data
  i6370.m_IgnoreReversedGraphics = !!i6371[0]
  i6370.m_BlockingObjects = i6371[1]
  i6370.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6371[2] )
  return i6370
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i6372 = root || request.c( 'ChooseHandler' )
  var i6373 = data
  request.r(i6373[0], i6373[1], 0, i6372, '_brain')
  request.r(i6373[2], i6373[3], 0, i6372, '_soundHandler')
  request.r(i6373[4], i6373[5], 0, i6372, '_ericSettings')
  request.r(i6373[6], i6373[7], 0, i6372, '_viperSettings')
  request.r(i6373[8], i6373[9], 0, i6372, '_ericScene')
  request.r(i6373[10], i6373[11], 0, i6372, '_ericSceneBackground')
  request.r(i6373[12], i6373[13], 0, i6372, '_viperScene')
  request.r(i6373[14], i6373[15], 0, i6372, '_viperSceneBackground')
  request.r(i6373[16], i6373[17], 0, i6372, '_chooseButton')
  var i6375 = i6373[18]
  var i6374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6375.length; i += 2) {
  request.r(i6375[i + 0], i6375[i + 1], 1, i6374, '')
  }
  i6372._characters = i6374
  request.r(i6373[19], i6373[20], 0, i6372, '_frame')
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6379 = data
  i6378.cullTransparentMesh = !!i6379[0]
  return i6378
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6380 = root || request.c( 'UnityEngine.UI.Image' )
  var i6381 = data
  request.r(i6381[0], i6381[1], 0, i6380, 'm_Sprite')
  i6380.m_Type = i6381[2]
  i6380.m_PreserveAspect = !!i6381[3]
  i6380.m_FillCenter = !!i6381[4]
  i6380.m_FillMethod = i6381[5]
  i6380.m_FillAmount = i6381[6]
  i6380.m_FillClockwise = !!i6381[7]
  i6380.m_FillOrigin = i6381[8]
  i6380.m_UseSpriteMesh = !!i6381[9]
  i6380.m_PixelsPerUnitMultiplier = i6381[10]
  request.r(i6381[11], i6381[12], 0, i6380, 'm_Material')
  i6380.m_Maskable = !!i6381[13]
  i6380.m_Color = new pc.Color(i6381[14], i6381[15], i6381[16], i6381[17])
  i6380.m_RaycastTarget = !!i6381[18]
  i6380.m_RaycastPadding = new pc.Vec4( i6381[19], i6381[20], i6381[21], i6381[22] )
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6383 = data
  i6382.m_Alpha = i6383[0]
  i6382.m_Interactable = !!i6383[1]
  i6382.m_BlocksRaycasts = !!i6383[2]
  i6382.m_IgnoreParentGroups = !!i6383[3]
  i6382.enabled = !!i6383[4]
  return i6382
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6384 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6385 = data
  i6384.m_ShowMaskGraphic = !!i6385[0]
  return i6384
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6386 = root || request.c( 'UnityEngine.UI.Button' )
  var i6387 = data
  i6386.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6387[0], i6386.m_OnClick)
  i6386.m_Navigation = request.d('UnityEngine.UI.Navigation', i6387[1], i6386.m_Navigation)
  i6386.m_Transition = i6387[2]
  i6386.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6387[3], i6386.m_Colors)
  i6386.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6387[4], i6386.m_SpriteState)
  i6386.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6387[5], i6386.m_AnimationTriggers)
  i6386.m_Interactable = !!i6387[6]
  request.r(i6387[7], i6387[8], 0, i6386, 'm_TargetGraphic')
  return i6386
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6388 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6389 = data
  i6388.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6389[0], i6388.m_PersistentCalls)
  return i6388
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6390 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6391 = data
  i6390.m_Mode = i6391[0]
  i6390.m_WrapAround = !!i6391[1]
  request.r(i6391[2], i6391[3], 0, i6390, 'm_SelectOnUp')
  request.r(i6391[4], i6391[5], 0, i6390, 'm_SelectOnDown')
  request.r(i6391[6], i6391[7], 0, i6390, 'm_SelectOnLeft')
  request.r(i6391[8], i6391[9], 0, i6390, 'm_SelectOnRight')
  return i6390
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6392 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6393 = data
  i6392.m_NormalColor = new pc.Color(i6393[0], i6393[1], i6393[2], i6393[3])
  i6392.m_HighlightedColor = new pc.Color(i6393[4], i6393[5], i6393[6], i6393[7])
  i6392.m_PressedColor = new pc.Color(i6393[8], i6393[9], i6393[10], i6393[11])
  i6392.m_SelectedColor = new pc.Color(i6393[12], i6393[13], i6393[14], i6393[15])
  i6392.m_DisabledColor = new pc.Color(i6393[16], i6393[17], i6393[18], i6393[19])
  i6392.m_ColorMultiplier = i6393[20]
  i6392.m_FadeDuration = i6393[21]
  return i6392
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6394 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6395 = data
  request.r(i6395[0], i6395[1], 0, i6394, 'm_HighlightedSprite')
  request.r(i6395[2], i6395[3], 0, i6394, 'm_PressedSprite')
  request.r(i6395[4], i6395[5], 0, i6394, 'm_SelectedSprite')
  request.r(i6395[6], i6395[7], 0, i6394, 'm_DisabledSprite')
  return i6394
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6396 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6397 = data
  i6396.m_NormalTrigger = i6397[0]
  i6396.m_HighlightedTrigger = i6397[1]
  i6396.m_PressedTrigger = i6397[2]
  i6396.m_SelectedTrigger = i6397[3]
  i6396.m_DisabledTrigger = i6397[4]
  return i6396
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6398 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6399 = data
  i6398.m_hasFontAssetChanged = !!i6399[0]
  request.r(i6399[1], i6399[2], 0, i6398, 'm_baseMaterial')
  i6398.m_maskOffset = new pc.Vec4( i6399[3], i6399[4], i6399[5], i6399[6] )
  i6398.m_text = i6399[7]
  i6398.m_isRightToLeft = !!i6399[8]
  request.r(i6399[9], i6399[10], 0, i6398, 'm_fontAsset')
  request.r(i6399[11], i6399[12], 0, i6398, 'm_sharedMaterial')
  var i6401 = i6399[13]
  var i6400 = []
  for(var i = 0; i < i6401.length; i += 2) {
  request.r(i6401[i + 0], i6401[i + 1], 2, i6400, '')
  }
  i6398.m_fontSharedMaterials = i6400
  request.r(i6399[14], i6399[15], 0, i6398, 'm_fontMaterial')
  var i6403 = i6399[16]
  var i6402 = []
  for(var i = 0; i < i6403.length; i += 2) {
  request.r(i6403[i + 0], i6403[i + 1], 2, i6402, '')
  }
  i6398.m_fontMaterials = i6402
  i6398.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6399[17], i6399[18], i6399[19], i6399[20])
  i6398.m_fontColor = new pc.Color(i6399[21], i6399[22], i6399[23], i6399[24])
  i6398.m_enableVertexGradient = !!i6399[25]
  i6398.m_colorMode = i6399[26]
  i6398.m_fontColorGradient = request.d('TMPro.VertexGradient', i6399[27], i6398.m_fontColorGradient)
  request.r(i6399[28], i6399[29], 0, i6398, 'm_fontColorGradientPreset')
  request.r(i6399[30], i6399[31], 0, i6398, 'm_spriteAsset')
  i6398.m_tintAllSprites = !!i6399[32]
  request.r(i6399[33], i6399[34], 0, i6398, 'm_StyleSheet')
  i6398.m_TextStyleHashCode = i6399[35]
  i6398.m_overrideHtmlColors = !!i6399[36]
  i6398.m_faceColor = UnityEngine.Color32.ConstructColor(i6399[37], i6399[38], i6399[39], i6399[40])
  i6398.m_fontSize = i6399[41]
  i6398.m_fontSizeBase = i6399[42]
  i6398.m_fontWeight = i6399[43]
  i6398.m_enableAutoSizing = !!i6399[44]
  i6398.m_fontSizeMin = i6399[45]
  i6398.m_fontSizeMax = i6399[46]
  i6398.m_fontStyle = i6399[47]
  i6398.m_HorizontalAlignment = i6399[48]
  i6398.m_VerticalAlignment = i6399[49]
  i6398.m_textAlignment = i6399[50]
  i6398.m_characterSpacing = i6399[51]
  i6398.m_wordSpacing = i6399[52]
  i6398.m_lineSpacing = i6399[53]
  i6398.m_lineSpacingMax = i6399[54]
  i6398.m_paragraphSpacing = i6399[55]
  i6398.m_charWidthMaxAdj = i6399[56]
  i6398.m_enableWordWrapping = !!i6399[57]
  i6398.m_wordWrappingRatios = i6399[58]
  i6398.m_overflowMode = i6399[59]
  request.r(i6399[60], i6399[61], 0, i6398, 'm_linkedTextComponent')
  request.r(i6399[62], i6399[63], 0, i6398, 'parentLinkedComponent')
  i6398.m_enableKerning = !!i6399[64]
  i6398.m_enableExtraPadding = !!i6399[65]
  i6398.checkPaddingRequired = !!i6399[66]
  i6398.m_isRichText = !!i6399[67]
  i6398.m_parseCtrlCharacters = !!i6399[68]
  i6398.m_isOrthographic = !!i6399[69]
  i6398.m_isCullingEnabled = !!i6399[70]
  i6398.m_horizontalMapping = i6399[71]
  i6398.m_verticalMapping = i6399[72]
  i6398.m_uvLineOffset = i6399[73]
  i6398.m_geometrySortingOrder = i6399[74]
  i6398.m_IsTextObjectScaleStatic = !!i6399[75]
  i6398.m_VertexBufferAutoSizeReduction = !!i6399[76]
  i6398.m_useMaxVisibleDescender = !!i6399[77]
  i6398.m_pageToDisplay = i6399[78]
  i6398.m_margin = new pc.Vec4( i6399[79], i6399[80], i6399[81], i6399[82] )
  i6398.m_isUsingLegacyAnimationComponent = !!i6399[83]
  i6398.m_isVolumetricText = !!i6399[84]
  request.r(i6399[85], i6399[86], 0, i6398, 'm_Material')
  i6398.m_Maskable = !!i6399[87]
  i6398.m_Color = new pc.Color(i6399[88], i6399[89], i6399[90], i6399[91])
  i6398.m_RaycastTarget = !!i6399[92]
  i6398.m_RaycastPadding = new pc.Vec4( i6399[93], i6399[94], i6399[95], i6399[96] )
  return i6398
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6404 = root || request.c( 'TMPro.VertexGradient' )
  var i6405 = data
  i6404.topLeft = new pc.Color(i6405[0], i6405[1], i6405[2], i6405[3])
  i6404.topRight = new pc.Color(i6405[4], i6405[5], i6405[6], i6405[7])
  i6404.bottomLeft = new pc.Color(i6405[8], i6405[9], i6405[10], i6405[11])
  i6404.bottomRight = new pc.Color(i6405[12], i6405[13], i6405[14], i6405[15])
  return i6404
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i6406 = root || request.c( 'JumpHandler' )
  var i6407 = data
  request.r(i6407[0], i6407[1], 0, i6406, '_landJump')
  request.r(i6407[2], i6407[3], 0, i6406, '_secondLandJump')
  request.r(i6407[4], i6407[5], 0, i6406, '_spawnPoint')
  request.r(i6407[6], i6407[7], 0, i6406, '_enemy')
  request.r(i6407[8], i6407[9], 0, i6406, '_finalPoint')
  return i6406
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i6408 = root || request.c( 'AnimationHandler' )
  var i6409 = data
  request.r(i6409[0], i6409[1], 0, i6408, '_jumpHandler')
  return i6408
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i6410 = root || request.c( 'EffectHandler' )
  var i6411 = data
  request.r(i6411[0], i6411[1], 0, i6410, '_jumpHandler')
  request.r(i6411[2], i6411[3], 0, i6410, '_canvas')
  request.r(i6411[4], i6411[5], 0, i6410, '_jumpSmoke')
  request.r(i6411[6], i6411[7], 0, i6410, '_light')
  request.r(i6411[8], i6411[9], 0, i6410, '_smoke')
  request.r(i6411[10], i6411[11], 0, i6410, '_enemyPool')
  request.r(i6411[12], i6411[13], 0, i6410, '_specialEnemy')
  return i6410
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i6412 = root || request.c( 'StartCamera' )
  var i6413 = data
  request.r(i6413[0], i6413[1], 0, i6412, '_startCamera')
  request.r(i6413[2], i6413[3], 0, i6412, '_path')
  request.r(i6413[4], i6413[5], 0, i6412, '_player')
  request.r(i6413[6], i6413[7], 0, i6412, '_canvas')
  return i6412
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i6414 = root || request.c( 'ResolutionHandler' )
  var i6415 = data
  request.r(i6415[0], i6415[1], 0, i6414, '_secondCamera')
  request.r(i6415[2], i6415[3], 0, i6414, '_fourthCamera')
  request.r(i6415[4], i6415[5], 0, i6414, '_fifthCamera')
  return i6414
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i6416 = root || request.c( 'CameraHandler' )
  var i6417 = data
  request.r(i6417[0], i6417[1], 0, i6416, '_jumpHandler')
  request.r(i6417[2], i6417[3], 0, i6416, '_firstCamera')
  request.r(i6417[4], i6417[5], 0, i6416, '_secondCamera')
  request.r(i6417[6], i6417[7], 0, i6416, '_thirdCamera')
  request.r(i6417[8], i6417[9], 0, i6416, '_fourthCamera')
  request.r(i6417[10], i6417[11], 0, i6416, '_fifthCamera')
  return i6416
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i6418 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i6419 = data
  request.r(i6419[0], i6419[1], 0, i6418, 'm_Path')
  i6418.m_PathPosition = i6419[2]
  i6418.m_PositionUnits = i6419[3]
  i6418.m_PathOffset = new pc.Vec3( i6419[4], i6419[5], i6419[6] )
  i6418.m_XDamping = i6419[7]
  i6418.m_YDamping = i6419[8]
  i6418.m_ZDamping = i6419[9]
  i6418.m_CameraUp = i6419[10]
  i6418.m_PitchDamping = i6419[11]
  i6418.m_YawDamping = i6419[12]
  i6418.m_RollDamping = i6419[13]
  i6418.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i6419[14], i6418.m_AutoDolly)
  return i6418
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i6420 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i6421 = data
  i6420.m_Enabled = !!i6421[0]
  i6420.m_PositionOffset = i6421[1]
  i6420.m_SearchRadius = i6421[2]
  i6420.m_SearchResolution = i6421[3]
  return i6420
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i6422 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i6423 = data
  i6422.m_Looped = !!i6423[0]
  var i6425 = i6423[1]
  var i6424 = []
  for(var i = 0; i < i6425.length; i += 1) {
    i6424.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i6425[i + 0]) );
  }
  i6422.m_Waypoints = i6424
  i6422.m_Resolution = i6423[2]
  i6422.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i6423[3], i6422.m_Appearance)
  return i6422
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i6428 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i6429 = data
  i6428.position = new pc.Vec3( i6429[0], i6429[1], i6429[2] )
  i6428.roll = i6429[3]
  return i6428
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i6430 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i6431 = data
  i6430.pathColor = new pc.Color(i6431[0], i6431[1], i6431[2], i6431[3])
  i6430.inactivePathColor = new pc.Color(i6431[4], i6431[5], i6431[6], i6431[7])
  i6430.width = i6431[8]
  return i6430
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i6432 = root || request.c( 'UIHandler' )
  var i6433 = data
  request.r(i6433[0], i6433[1], 0, i6432, '_jumpHandler')
  request.r(i6433[2], i6433[3], 0, i6432, '_powerButton')
  request.r(i6433[4], i6433[5], 0, i6432, '_cTAButton')
  request.r(i6433[6], i6433[7], 0, i6432, '_fade')
  request.r(i6433[8], i6433[9], 0, i6432, '_finalPanel')
  return i6432
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i6434 = root || request.c( 'EnemyPool' )
  var i6435 = data
  var i6437 = i6435[0]
  var i6436 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i6437.length; i += 2) {
  request.r(i6437[i + 0], i6437[i + 1], 1, i6436, '')
  }
  i6434._enemies = i6436
  return i6434
}

Deserializers["Stalker"] = function (request, data, root) {
  var i6440 = root || request.c( 'Stalker' )
  var i6441 = data
  request.r(i6441[0], i6441[1], 0, i6440, '_target')
  return i6440
}

Deserializers["Enemy"] = function (request, data, root) {
  var i6442 = root || request.c( 'Enemy' )
  var i6443 = data
  return i6442
}

Deserializers["ScenarioFour.Girl"] = function (request, data, root) {
  var i6444 = root || request.c( 'ScenarioFour.Girl' )
  var i6445 = data
  request.r(i6445[0], i6445[1], 0, i6444, '_path')
  request.r(i6445[2], i6445[3], 0, i6444, '_animatedModel')
  request.r(i6445[4], i6445[5], 0, i6444, '_model')
  request.r(i6445[6], i6445[7], 0, i6444, '_bulletTemplate')
  request.r(i6445[8], i6445[9], 0, i6444, '_shootPoint')
  return i6444
}

Deserializers["ScenarioFour.AnimatedModel"] = function (request, data, root) {
  var i6446 = root || request.c( 'ScenarioFour.AnimatedModel' )
  var i6447 = data
  return i6446
}

Deserializers["ScenarioFour.UISwitcher"] = function (request, data, root) {
  var i6448 = root || request.c( 'ScenarioFour.UISwitcher' )
  var i6449 = data
  request.r(i6449[0], i6449[1], 0, i6448, '_powerButton')
  request.r(i6449[2], i6449[3], 0, i6448, '_attackButton')
  request.r(i6449[4], i6449[5], 0, i6448, '_playButton')
  request.r(i6449[6], i6449[7], 0, i6448, '_finalPanel')
  return i6448
}

Deserializers["ScenarioFour.PulseTransform"] = function (request, data, root) {
  var i6450 = root || request.c( 'ScenarioFour.PulseTransform' )
  var i6451 = data
  return i6450
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6452 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6453 = data
  request.r(i6453[0], i6453[1], 0, i6452, 'm_FirstSelected')
  i6452.m_sendNavigationEvents = !!i6453[2]
  i6452.m_DragThreshold = i6453[3]
  return i6452
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6454 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6455 = data
  i6454.m_HorizontalAxis = i6455[0]
  i6454.m_VerticalAxis = i6455[1]
  i6454.m_SubmitButton = i6455[2]
  i6454.m_CancelButton = i6455[3]
  i6454.m_InputActionsPerSecond = i6455[4]
  i6454.m_RepeatDelay = i6455[5]
  i6454.m_ForceModuleActive = !!i6455[6]
  return i6454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6457 = data
  i6456.ambientIntensity = i6457[0]
  i6456.reflectionIntensity = i6457[1]
  i6456.ambientMode = i6457[2]
  i6456.ambientLight = new pc.Color(i6457[3], i6457[4], i6457[5], i6457[6])
  i6456.ambientSkyColor = new pc.Color(i6457[7], i6457[8], i6457[9], i6457[10])
  i6456.ambientGroundColor = new pc.Color(i6457[11], i6457[12], i6457[13], i6457[14])
  i6456.ambientEquatorColor = new pc.Color(i6457[15], i6457[16], i6457[17], i6457[18])
  i6456.fogColor = new pc.Color(i6457[19], i6457[20], i6457[21], i6457[22])
  i6456.fogEndDistance = i6457[23]
  i6456.fogStartDistance = i6457[24]
  i6456.fogDensity = i6457[25]
  i6456.fog = !!i6457[26]
  request.r(i6457[27], i6457[28], 0, i6456, 'skybox')
  i6456.fogMode = i6457[29]
  var i6459 = i6457[30]
  var i6458 = []
  for(var i = 0; i < i6459.length; i += 1) {
    i6458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6459[i + 0]) );
  }
  i6456.lightmaps = i6458
  i6456.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6457[31], i6456.lightProbes)
  i6456.lightmapsMode = i6457[32]
  i6456.environmentLightingMode = i6457[33]
  i6456.ambientProbe = new pc.SphericalHarmonicsL2(i6457[34])
  i6456.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6457[35])
  i6456.useReferenceAmbientProbe = !!i6457[36]
  request.r(i6457[37], i6457[38], 0, i6456, 'customReflection')
  request.r(i6457[39], i6457[40], 0, i6456, 'defaultReflection')
  i6456.defaultReflectionMode = i6457[41]
  i6456.defaultReflectionResolution = i6457[42]
  i6456.sunLightObjectId = i6457[43]
  i6456.pixelLightCount = i6457[44]
  i6456.defaultReflectionHDR = !!i6457[45]
  i6456.hasLightDataAsset = !!i6457[46]
  i6456.hasManualGenerate = !!i6457[47]
  return i6456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6463 = data
  request.r(i6463[0], i6463[1], 0, i6462, 'lightmapColor')
  request.r(i6463[2], i6463[3], 0, i6462, 'lightmapDirection')
  return i6462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6464 = root || new UnityEngine.LightProbes()
  var i6465 = data
  return i6464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6473 = data
  var i6475 = i6473[0]
  var i6474 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i6475.length; i += 1) {
    i6474.add(i6475[i + 0]);
  }
  i6472.invalidShaderVariants = i6474
  i6472.name = i6473[1]
  i6472.guid = i6473[2]
  var i6477 = i6473[3]
  var i6476 = []
  for(var i = 0; i < i6477.length; i += 1) {
    i6476.push( i6477[i + 0] );
  }
  i6472.shaderDefinedKeywords = i6476
  var i6479 = i6473[4]
  var i6478 = []
  for(var i = 0; i < i6479.length; i += 1) {
    i6478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6479[i + 0]) );
  }
  i6472.passes = i6478
  var i6481 = i6473[5]
  var i6480 = []
  for(var i = 0; i < i6481.length; i += 1) {
    i6480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6481[i + 0]) );
  }
  i6472.usePasses = i6480
  var i6483 = i6473[6]
  var i6482 = []
  for(var i = 0; i < i6483.length; i += 1) {
    i6482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6483[i + 0]) );
  }
  i6472.defaultParameterValues = i6482
  request.r(i6473[7], i6473[8], 0, i6472, 'unityFallbackShader')
  i6472.readDepth = !!i6473[9]
  i6472.isCreatedByShaderGraph = !!i6473[10]
  return i6472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6488 = root || new pc.UnityShaderPass()
  var i6489 = data
  i6488.id = i6489[0]
  i6488.subShaderIndex = i6489[1]
  i6488.name = i6489[2]
  i6488.passType = i6489[3]
  i6488.usePass = !!i6489[4]
  i6488.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[5], i6488.zTest)
  i6488.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[6], i6488.zWrite)
  i6488.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[7], i6488.culling)
  i6488.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6489[8], i6488.blending)
  i6488.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6489[9], i6488.alphaBlending)
  i6488.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[10], i6488.colorWriteMask)
  i6488.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[11], i6488.offsetUnits)
  i6488.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[12], i6488.offsetFactor)
  i6488.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[13], i6488.stencilRef)
  i6488.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[14], i6488.stencilReadMask)
  i6488.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6489[15], i6488.stencilWriteMask)
  i6488.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6489[16], i6488.stencilOp)
  i6488.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6489[17], i6488.stencilOpFront)
  i6488.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6489[18], i6488.stencilOpBack)
  var i6491 = i6489[19]
  var i6490 = []
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6491[i + 0]) );
  }
  i6488.tags = i6490
  var i6493 = i6489[20]
  var i6492 = []
  for(var i = 0; i < i6493.length; i += 1) {
    i6492.push( i6493[i + 0] );
  }
  i6488.passDefinedKeywords = i6492
  var i6495 = i6489[21]
  var i6494 = []
  for(var i = 0; i < i6495.length; i += 1) {
    i6494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6495[i + 0]) );
  }
  i6488.variants = i6494
  var i6497 = i6489[22]
  var i6496 = []
  for(var i = 0; i < i6497.length; i += 1) {
    i6496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6497[i + 0]) );
  }
  i6488.excludedVariants = i6496
  i6488.hasDepthReader = !!i6489[23]
  return i6488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6499 = data
  i6498.val = i6499[0]
  i6498.name = i6499[1]
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6501 = data
  i6500.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6501[0], i6500.src)
  i6500.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6501[1], i6500.dst)
  i6500.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6501[2], i6500.op)
  return i6500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6503 = data
  i6502.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6503[0], i6502.pass)
  i6502.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6503[1], i6502.fail)
  i6502.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6503[2], i6502.zFail)
  i6502.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6503[3], i6502.comp)
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6507 = data
  i6506.name = i6507[0]
  i6506.value = i6507[1]
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6511 = data
  i6510.passId = i6511[0]
  i6510.subShaderIndex = i6511[1]
  var i6513 = i6511[2]
  var i6512 = []
  for(var i = 0; i < i6513.length; i += 1) {
    i6512.push( i6513[i + 0] );
  }
  i6510.keywords = i6512
  i6510.vertexProgram = i6511[3]
  i6510.fragmentProgram = i6511[4]
  i6510.readDepth = !!i6511[5]
  return i6510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6517 = data
  request.r(i6517[0], i6517[1], 0, i6516, 'shader')
  i6516.pass = i6517[2]
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6521 = data
  i6520.name = i6521[0]
  i6520.type = i6521[1]
  i6520.value = new pc.Vec4( i6521[2], i6521[3], i6521[4], i6521[5] )
  i6520.textureValue = i6521[6]
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6523 = data
  i6522.name = i6523[0]
  request.r(i6523[1], i6523[2], 0, i6522, 'texture')
  i6522.aabb = i6523[3]
  i6522.vertices = i6523[4]
  i6522.triangles = i6523[5]
  i6522.textureRect = UnityEngine.Rect.MinMaxRect(i6523[6], i6523[7], i6523[8], i6523[9])
  i6522.packedRect = UnityEngine.Rect.MinMaxRect(i6523[10], i6523[11], i6523[12], i6523[13])
  i6522.border = new pc.Vec4( i6523[14], i6523[15], i6523[16], i6523[17] )
  i6522.transparency = i6523[18]
  i6522.bounds = i6523[19]
  i6522.pixelsPerUnit = i6523[20]
  i6522.textureWidth = i6523[21]
  i6522.textureHeight = i6523[22]
  i6522.nativeSize = new pc.Vec2( i6523[23], i6523[24] )
  i6522.pivot = new pc.Vec2( i6523[25], i6523[26] )
  i6522.textureRectOffset = new pc.Vec2( i6523[27], i6523[28] )
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6525 = data
  i6524.name = i6525[0]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6527 = data
  i6526.name = i6527[0]
  i6526.wrapMode = i6527[1]
  i6526.isLooping = !!i6527[2]
  i6526.length = i6527[3]
  var i6529 = i6527[4]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6529[i + 0]) );
  }
  i6526.curves = i6528
  var i6531 = i6527[5]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6531[i + 0]) );
  }
  i6526.events = i6530
  i6526.halfPrecision = !!i6527[6]
  return i6526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6535 = data
  i6534.path = i6535[0]
  i6534.componentType = i6535[1]
  i6534.property = i6535[2]
  i6534.keys = i6535[3]
  var i6537 = i6535[4]
  var i6536 = []
  for(var i = 0; i < i6537.length; i += 1) {
    i6536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6537[i + 0]) );
  }
  i6534.objectReferenceKeys = i6536
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6541 = data
  i6540.time = i6541[0]
  request.r(i6541[1], i6541[2], 0, i6540, 'value')
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6545 = data
  i6544.functionName = i6545[0]
  i6544.floatParameter = i6545[1]
  i6544.intParameter = i6545[2]
  i6544.stringParameter = i6545[3]
  request.r(i6545[4], i6545[5], 0, i6544, 'objectReferenceParameter')
  i6544.time = i6545[6]
  return i6544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6547 = data
  i6546.name = i6547[0]
  var i6549 = i6547[1]
  var i6548 = []
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6549[i + 0]) );
  }
  i6546.states = i6548
  var i6551 = i6547[2]
  var i6550 = []
  for(var i = 0; i < i6551.length; i += 1) {
    i6550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6551[i + 0]) );
  }
  i6546.layers = i6550
  var i6553 = i6547[3]
  var i6552 = []
  for(var i = 0; i < i6553.length; i += 1) {
    i6552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6553[i + 0]) );
  }
  i6546.parameters = i6552
  var i6555 = i6547[4]
  var i6554 = []
  for(var i = 0; i < i6555.length; i += 1) {
    i6554.push( i6555[i + 0] );
  }
  i6546.animationClips = i6554
  i6546.HasSubStateMachines = !!i6547[5]
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6559 = data
  i6558.cycleOffset = i6559[0]
  i6558.cycleOffsetParameter = i6559[1]
  i6558.cycleOffsetParameterActive = !!i6559[2]
  i6558.mirror = !!i6559[3]
  i6558.mirrorParameter = i6559[4]
  i6558.mirrorParameterActive = !!i6559[5]
  i6558.motionId = i6559[6]
  i6558.nameHash = i6559[7]
  i6558.fullPathHash = i6559[8]
  i6558.speed = i6559[9]
  i6558.speedParameter = i6559[10]
  i6558.speedParameterActive = !!i6559[11]
  i6558.tag = i6559[12]
  i6558.name = i6559[13]
  i6558.writeDefaultValues = !!i6559[14]
  var i6561 = i6559[15]
  var i6560 = []
  for(var i = 0; i < i6561.length; i += 1) {
    i6560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6561[i + 0]) );
  }
  i6558.transitions = i6560
  var i6563 = i6559[16]
  var i6562 = []
  for(var i = 0; i < i6563.length; i += 2) {
  request.r(i6563[i + 0], i6563[i + 1], 2, i6562, '')
  }
  i6558.behaviours = i6562
  return i6558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6567 = data
  i6566.fullPath = i6567[0]
  i6566.canTransitionToSelf = !!i6567[1]
  i6566.duration = i6567[2]
  i6566.exitTime = i6567[3]
  i6566.hasExitTime = !!i6567[4]
  i6566.hasFixedDuration = !!i6567[5]
  i6566.interruptionSource = i6567[6]
  i6566.offset = i6567[7]
  i6566.orderedInterruption = !!i6567[8]
  i6566.destinationStateNameHash = i6567[9]
  i6566.destinationStateMachineId = i6567[10]
  i6566.isExit = !!i6567[11]
  i6566.mute = !!i6567[12]
  i6566.solo = !!i6567[13]
  var i6569 = i6567[14]
  var i6568 = []
  for(var i = 0; i < i6569.length; i += 1) {
    i6568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6569[i + 0]) );
  }
  i6566.conditions = i6568
  return i6566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6575 = data
  i6574.blendingMode = i6575[0]
  i6574.defaultWeight = i6575[1]
  i6574.name = i6575[2]
  i6574.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6575[3], i6574.stateMachine)
  return i6574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6577 = data
  i6576.id = i6577[0]
  i6576.defaultStateNameHash = i6577[1]
  var i6579 = i6577[2]
  var i6578 = []
  for(var i = 0; i < i6579.length; i += 1) {
    i6578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6579[i + 0]) );
  }
  i6576.entryTransitions = i6578
  var i6581 = i6577[3]
  var i6580 = []
  for(var i = 0; i < i6581.length; i += 1) {
    i6580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6581[i + 0]) );
  }
  i6576.anyStateTransitions = i6580
  return i6576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6585 = data
  i6584.destinationStateNameHash = i6585[0]
  i6584.destinationStateMachineId = i6585[1]
  i6584.isExit = !!i6585[2]
  i6584.mute = !!i6585[3]
  i6584.solo = !!i6585[4]
  var i6587 = i6585[5]
  var i6586 = []
  for(var i = 0; i < i6587.length; i += 1) {
    i6586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6587[i + 0]) );
  }
  i6584.conditions = i6586
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6591 = data
  i6590.defaultBool = !!i6591[0]
  i6590.defaultFloat = i6591[1]
  i6590.defaultInt = i6591[2]
  i6590.name = i6591[3]
  i6590.nameHash = i6591[4]
  i6590.type = i6591[5]
  return i6590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6595 = data
  i6594.mode = i6595[0]
  i6594.parameter = i6595[1]
  i6594.threshold = i6595[2]
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6597 = data
  i6596.name = i6597[0]
  i6596.bytes64 = i6597[1]
  i6596.data = i6597[2]
  return i6596
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6598 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6599 = data
  i6598.hashCode = i6599[0]
  request.r(i6599[1], i6599[2], 0, i6598, 'material')
  i6598.materialHashCode = i6599[3]
  request.r(i6599[4], i6599[5], 0, i6598, 'atlas')
  i6598.normalStyle = i6599[6]
  i6598.normalSpacingOffset = i6599[7]
  i6598.boldStyle = i6599[8]
  i6598.boldSpacing = i6599[9]
  i6598.italicStyle = i6599[10]
  i6598.tabSize = i6599[11]
  i6598.m_Version = i6599[12]
  i6598.m_SourceFontFileGUID = i6599[13]
  request.r(i6599[14], i6599[15], 0, i6598, 'm_SourceFontFile_EditorRef')
  request.r(i6599[16], i6599[17], 0, i6598, 'm_SourceFontFile')
  i6598.m_AtlasPopulationMode = i6599[18]
  i6598.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6599[19], i6598.m_FaceInfo)
  var i6601 = i6599[20]
  var i6600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6601.length; i += 1) {
    i6600.add(request.d('UnityEngine.TextCore.Glyph', i6601[i + 0]));
  }
  i6598.m_GlyphTable = i6600
  var i6603 = i6599[21]
  var i6602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.add(request.d('TMPro.TMP_Character', i6603[i + 0]));
  }
  i6598.m_CharacterTable = i6602
  var i6605 = i6599[22]
  var i6604 = []
  for(var i = 0; i < i6605.length; i += 2) {
  request.r(i6605[i + 0], i6605[i + 1], 2, i6604, '')
  }
  i6598.m_AtlasTextures = i6604
  i6598.m_AtlasTextureIndex = i6599[23]
  i6598.m_IsMultiAtlasTexturesEnabled = !!i6599[24]
  i6598.m_ClearDynamicDataOnBuild = !!i6599[25]
  var i6607 = i6599[26]
  var i6606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6607.length; i += 1) {
    i6606.add(request.d('UnityEngine.TextCore.GlyphRect', i6607[i + 0]));
  }
  i6598.m_UsedGlyphRects = i6606
  var i6609 = i6599[27]
  var i6608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6609.length; i += 1) {
    i6608.add(request.d('UnityEngine.TextCore.GlyphRect', i6609[i + 0]));
  }
  i6598.m_FreeGlyphRects = i6608
  i6598.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6599[28], i6598.m_fontInfo)
  i6598.m_AtlasWidth = i6599[29]
  i6598.m_AtlasHeight = i6599[30]
  i6598.m_AtlasPadding = i6599[31]
  i6598.m_AtlasRenderMode = i6599[32]
  var i6611 = i6599[33]
  var i6610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6611.length; i += 1) {
    i6610.add(request.d('TMPro.TMP_Glyph', i6611[i + 0]));
  }
  i6598.m_glyphInfoList = i6610
  i6598.m_KerningTable = request.d('TMPro.KerningTable', i6599[34], i6598.m_KerningTable)
  i6598.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6599[35], i6598.m_FontFeatureTable)
  var i6613 = i6599[36]
  var i6612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6613.length; i += 2) {
  request.r(i6613[i + 0], i6613[i + 1], 1, i6612, '')
  }
  i6598.fallbackFontAssets = i6612
  var i6615 = i6599[37]
  var i6614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6615.length; i += 2) {
  request.r(i6615[i + 0], i6615[i + 1], 1, i6614, '')
  }
  i6598.m_FallbackFontAssetTable = i6614
  i6598.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6599[38], i6598.m_CreationSettings)
  var i6617 = i6599[39]
  var i6616 = []
  for(var i = 0; i < i6617.length; i += 1) {
    i6616.push( request.d('TMPro.TMP_FontWeightPair', i6617[i + 0]) );
  }
  i6598.m_FontWeightTable = i6616
  var i6619 = i6599[40]
  var i6618 = []
  for(var i = 0; i < i6619.length; i += 1) {
    i6618.push( request.d('TMPro.TMP_FontWeightPair', i6619[i + 0]) );
  }
  i6598.fontWeights = i6618
  return i6598
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6620 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6621 = data
  i6620.m_FaceIndex = i6621[0]
  i6620.m_FamilyName = i6621[1]
  i6620.m_StyleName = i6621[2]
  i6620.m_PointSize = i6621[3]
  i6620.m_Scale = i6621[4]
  i6620.m_LineHeight = i6621[5]
  i6620.m_AscentLine = i6621[6]
  i6620.m_CapLine = i6621[7]
  i6620.m_MeanLine = i6621[8]
  i6620.m_Baseline = i6621[9]
  i6620.m_DescentLine = i6621[10]
  i6620.m_SuperscriptOffset = i6621[11]
  i6620.m_SuperscriptSize = i6621[12]
  i6620.m_SubscriptOffset = i6621[13]
  i6620.m_SubscriptSize = i6621[14]
  i6620.m_UnderlineOffset = i6621[15]
  i6620.m_UnderlineThickness = i6621[16]
  i6620.m_StrikethroughOffset = i6621[17]
  i6620.m_StrikethroughThickness = i6621[18]
  i6620.m_TabWidth = i6621[19]
  return i6620
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6624 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6625 = data
  i6624.m_Index = i6625[0]
  i6624.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6625[1], i6624.m_Metrics)
  i6624.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6625[2], i6624.m_GlyphRect)
  i6624.m_Scale = i6625[3]
  i6624.m_AtlasIndex = i6625[4]
  return i6624
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6626 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6627 = data
  i6626.m_Width = i6627[0]
  i6626.m_Height = i6627[1]
  i6626.m_HorizontalBearingX = i6627[2]
  i6626.m_HorizontalBearingY = i6627[3]
  i6626.m_HorizontalAdvance = i6627[4]
  return i6626
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6628 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6629 = data
  i6628.m_X = i6629[0]
  i6628.m_Y = i6629[1]
  i6628.m_Width = i6629[2]
  i6628.m_Height = i6629[3]
  return i6628
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6632 = root || request.c( 'TMPro.TMP_Character' )
  var i6633 = data
  i6632.m_ElementType = i6633[0]
  i6632.m_Unicode = i6633[1]
  i6632.m_GlyphIndex = i6633[2]
  i6632.m_Scale = i6633[3]
  return i6632
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6638 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6639 = data
  i6638.Name = i6639[0]
  i6638.PointSize = i6639[1]
  i6638.Scale = i6639[2]
  i6638.CharacterCount = i6639[3]
  i6638.LineHeight = i6639[4]
  i6638.Baseline = i6639[5]
  i6638.Ascender = i6639[6]
  i6638.CapHeight = i6639[7]
  i6638.Descender = i6639[8]
  i6638.CenterLine = i6639[9]
  i6638.SuperscriptOffset = i6639[10]
  i6638.SubscriptOffset = i6639[11]
  i6638.SubSize = i6639[12]
  i6638.Underline = i6639[13]
  i6638.UnderlineThickness = i6639[14]
  i6638.strikethrough = i6639[15]
  i6638.strikethroughThickness = i6639[16]
  i6638.TabWidth = i6639[17]
  i6638.Padding = i6639[18]
  i6638.AtlasWidth = i6639[19]
  i6638.AtlasHeight = i6639[20]
  return i6638
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6642 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6643 = data
  i6642.id = i6643[0]
  i6642.x = i6643[1]
  i6642.y = i6643[2]
  i6642.width = i6643[3]
  i6642.height = i6643[4]
  i6642.xOffset = i6643[5]
  i6642.yOffset = i6643[6]
  i6642.xAdvance = i6643[7]
  i6642.scale = i6643[8]
  return i6642
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6644 = root || request.c( 'TMPro.KerningTable' )
  var i6645 = data
  var i6647 = i6645[0]
  var i6646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6647.length; i += 1) {
    i6646.add(request.d('TMPro.KerningPair', i6647[i + 0]));
  }
  i6644.kerningPairs = i6646
  return i6644
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6650 = root || request.c( 'TMPro.KerningPair' )
  var i6651 = data
  i6650.xOffset = i6651[0]
  i6650.m_FirstGlyph = i6651[1]
  i6650.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6651[2], i6650.m_FirstGlyphAdjustments)
  i6650.m_SecondGlyph = i6651[3]
  i6650.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6651[4], i6650.m_SecondGlyphAdjustments)
  i6650.m_IgnoreSpacingAdjustments = !!i6651[5]
  return i6650
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6652 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6653 = data
  var i6655 = i6653[0]
  var i6654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6655.length; i += 1) {
    i6654.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6655[i + 0]));
  }
  i6652.m_GlyphPairAdjustmentRecords = i6654
  return i6652
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6658 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6659 = data
  i6658.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6659[0], i6658.m_FirstAdjustmentRecord)
  i6658.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6659[1], i6658.m_SecondAdjustmentRecord)
  i6658.m_FeatureLookupFlags = i6659[2]
  return i6658
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6662 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6663 = data
  i6662.sourceFontFileName = i6663[0]
  i6662.sourceFontFileGUID = i6663[1]
  i6662.pointSizeSamplingMode = i6663[2]
  i6662.pointSize = i6663[3]
  i6662.padding = i6663[4]
  i6662.packingMode = i6663[5]
  i6662.atlasWidth = i6663[6]
  i6662.atlasHeight = i6663[7]
  i6662.characterSetSelectionMode = i6663[8]
  i6662.characterSequence = i6663[9]
  i6662.referencedFontAssetGUID = i6663[10]
  i6662.referencedTextAssetGUID = i6663[11]
  i6662.fontStyle = i6663[12]
  i6662.fontStyleModifier = i6663[13]
  i6662.renderMode = i6663[14]
  i6662.includeFontFeatures = !!i6663[15]
  return i6662
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6666 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6667 = data
  request.r(i6667[0], i6667[1], 0, i6666, 'regularTypeface')
  request.r(i6667[2], i6667[3], 0, i6666, 'italicTypeface')
  return i6666
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i6668 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i6669 = data
  var i6671 = i6669[0]
  var i6670 = []
  for(var i = 0; i < i6671.length; i += 1) {
    i6670.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i6671[i + 0]) );
  }
  i6668.m_CustomBlends = i6670
  return i6668
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i6674 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i6675 = data
  i6674.m_From = i6675[0]
  i6674.m_To = i6675[1]
  i6674.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i6675[2], i6674.m_Blend)
  return i6674
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i6676 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i6677 = data
  var i6679 = i6677[0]
  var i6678 = []
  for(var i = 0; i < i6679.length; i += 1) {
    i6678.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i6679[i + 0]) );
  }
  i6676.PositionNoise = i6678
  var i6681 = i6677[1]
  var i6680 = []
  for(var i = 0; i < i6681.length; i += 1) {
    i6680.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i6681[i + 0]) );
  }
  i6676.OrientationNoise = i6680
  return i6676
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i6684 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i6685 = data
  i6684.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i6685[0], i6684.X)
  i6684.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i6685[1], i6684.Y)
  i6684.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i6685[2], i6684.Z)
  return i6684
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i6686 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i6687 = data
  i6686.Frequency = i6687[0]
  i6686.Amplitude = i6687[1]
  i6686.Constant = !!i6687[2]
  return i6686
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i6688 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i6689 = data
  var i6691 = i6689[0]
  var i6690 = []
  for(var i = 0; i < i6691.length; i += 1) {
    i6690.push( request.d('ScenarioFour.CameraFov', i6691[i + 0]) );
  }
  i6688._fovList = i6690
  return i6688
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i6694 = root || request.c( 'ScenarioFour.CameraFov' )
  var i6695 = data
  i6694._cameraType = i6695[0]
  i6694._landscape = i6695[1]
  i6694._portrait = i6695[2]
  return i6694
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6696 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6697 = data
  i6696.useSafeMode = !!i6697[0]
  i6696.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6697[1], i6696.safeModeOptions)
  i6696.timeScale = i6697[2]
  i6696.useSmoothDeltaTime = !!i6697[3]
  i6696.maxSmoothUnscaledTime = i6697[4]
  i6696.rewindCallbackMode = i6697[5]
  i6696.showUnityEditorReport = !!i6697[6]
  i6696.logBehaviour = i6697[7]
  i6696.drawGizmos = !!i6697[8]
  i6696.defaultRecyclable = !!i6697[9]
  i6696.defaultAutoPlay = i6697[10]
  i6696.defaultUpdateType = i6697[11]
  i6696.defaultTimeScaleIndependent = !!i6697[12]
  i6696.defaultEaseType = i6697[13]
  i6696.defaultEaseOvershootOrAmplitude = i6697[14]
  i6696.defaultEasePeriod = i6697[15]
  i6696.defaultAutoKill = !!i6697[16]
  i6696.defaultLoopType = i6697[17]
  i6696.debugMode = !!i6697[18]
  i6696.debugStoreTargetId = !!i6697[19]
  i6696.showPreviewPanel = !!i6697[20]
  i6696.storeSettingsLocation = i6697[21]
  i6696.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6697[22], i6696.modules)
  i6696.createASMDEF = !!i6697[23]
  i6696.showPlayingTweens = !!i6697[24]
  i6696.showPausedTweens = !!i6697[25]
  return i6696
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6698 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6699 = data
  i6698.logBehaviour = i6699[0]
  i6698.nestedTweenFailureBehaviour = i6699[1]
  return i6698
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6700 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6701 = data
  i6700.showPanel = !!i6701[0]
  i6700.audioEnabled = !!i6701[1]
  i6700.physicsEnabled = !!i6701[2]
  i6700.physics2DEnabled = !!i6701[3]
  i6700.spriteEnabled = !!i6701[4]
  i6700.uiEnabled = !!i6701[5]
  i6700.textMeshProEnabled = !!i6701[6]
  i6700.tk2DEnabled = !!i6701[7]
  i6700.deAudioEnabled = !!i6701[8]
  i6700.deUnityExtendedEnabled = !!i6701[9]
  i6700.epoOutlineEnabled = !!i6701[10]
  return i6700
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6702 = root || request.c( 'TMPro.TMP_Settings' )
  var i6703 = data
  i6702.m_enableWordWrapping = !!i6703[0]
  i6702.m_enableKerning = !!i6703[1]
  i6702.m_enableExtraPadding = !!i6703[2]
  i6702.m_enableTintAllSprites = !!i6703[3]
  i6702.m_enableParseEscapeCharacters = !!i6703[4]
  i6702.m_EnableRaycastTarget = !!i6703[5]
  i6702.m_GetFontFeaturesAtRuntime = !!i6703[6]
  i6702.m_missingGlyphCharacter = i6703[7]
  i6702.m_warningsDisabled = !!i6703[8]
  request.r(i6703[9], i6703[10], 0, i6702, 'm_defaultFontAsset')
  i6702.m_defaultFontAssetPath = i6703[11]
  i6702.m_defaultFontSize = i6703[12]
  i6702.m_defaultAutoSizeMinRatio = i6703[13]
  i6702.m_defaultAutoSizeMaxRatio = i6703[14]
  i6702.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6703[15], i6703[16] )
  i6702.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6703[17], i6703[18] )
  i6702.m_autoSizeTextContainer = !!i6703[19]
  i6702.m_IsTextObjectScaleStatic = !!i6703[20]
  var i6705 = i6703[21]
  var i6704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6705.length; i += 2) {
  request.r(i6705[i + 0], i6705[i + 1], 1, i6704, '')
  }
  i6702.m_fallbackFontAssets = i6704
  i6702.m_matchMaterialPreset = !!i6703[22]
  request.r(i6703[23], i6703[24], 0, i6702, 'm_defaultSpriteAsset')
  i6702.m_defaultSpriteAssetPath = i6703[25]
  i6702.m_enableEmojiSupport = !!i6703[26]
  i6702.m_MissingCharacterSpriteUnicode = i6703[27]
  i6702.m_defaultColorGradientPresetsPath = i6703[28]
  request.r(i6703[29], i6703[30], 0, i6702, 'm_defaultStyleSheet')
  i6702.m_StyleSheetsResourcePath = i6703[31]
  request.r(i6703[32], i6703[33], 0, i6702, 'm_leadingCharacters')
  request.r(i6703[34], i6703[35], 0, i6702, 'm_followingCharacters')
  i6702.m_UseModernHangulLineBreakingRules = !!i6703[36]
  return i6702
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6706 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6707 = data
  var i6709 = i6707[0]
  var i6708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6709.length; i += 1) {
    i6708.add(request.d('TMPro.TMP_Style', i6709[i + 0]));
  }
  i6706.m_StyleList = i6708
  return i6706
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6712 = root || request.c( 'TMPro.TMP_Style' )
  var i6713 = data
  i6712.m_Name = i6713[0]
  i6712.m_HashCode = i6713[1]
  i6712.m_OpeningDefinition = i6713[2]
  i6712.m_ClosingDefinition = i6713[3]
  i6712.m_OpeningTagArray = i6713[4]
  i6712.m_ClosingTagArray = i6713[5]
  i6712.m_OpeningTagUnicodeArray = i6713[6]
  i6712.m_ClosingTagUnicodeArray = i6713[7]
  return i6712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6715 = data
  var i6717 = i6715[0]
  var i6716 = []
  for(var i = 0; i < i6717.length; i += 1) {
    i6716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6717[i + 0]) );
  }
  i6714.files = i6716
  i6714.componentToPrefabIds = i6715[1]
  return i6714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6721 = data
  i6720.path = i6721[0]
  request.r(i6721[1], i6721[2], 0, i6720, 'unityObject')
  return i6720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6723 = data
  var i6725 = i6723[0]
  var i6724 = []
  for(var i = 0; i < i6725.length; i += 1) {
    i6724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6725[i + 0]) );
  }
  i6722.scriptsExecutionOrder = i6724
  var i6727 = i6723[1]
  var i6726 = []
  for(var i = 0; i < i6727.length; i += 1) {
    i6726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6727[i + 0]) );
  }
  i6722.sortingLayers = i6726
  var i6729 = i6723[2]
  var i6728 = []
  for(var i = 0; i < i6729.length; i += 1) {
    i6728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6729[i + 0]) );
  }
  i6722.cullingLayers = i6728
  i6722.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6723[3], i6722.timeSettings)
  i6722.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6723[4], i6722.physicsSettings)
  i6722.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6723[5], i6722.physics2DSettings)
  i6722.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6723[6], i6722.qualitySettings)
  i6722.enableRealtimeShadows = !!i6723[7]
  i6722.autoInstantiatePrefabs = !!i6723[8]
  i6722.enableAutoInstancing = !!i6723[9]
  i6722.lightmapEncodingQuality = i6723[10]
  i6722.desiredColorSpace = i6723[11]
  return i6722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6733 = data
  i6732.name = i6733[0]
  i6732.value = i6733[1]
  return i6732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6737 = data
  i6736.id = i6737[0]
  i6736.name = i6737[1]
  i6736.value = i6737[2]
  return i6736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6741 = data
  i6740.id = i6741[0]
  i6740.name = i6741[1]
  return i6740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6743 = data
  i6742.fixedDeltaTime = i6743[0]
  i6742.maximumDeltaTime = i6743[1]
  i6742.timeScale = i6743[2]
  i6742.maximumParticleTimestep = i6743[3]
  return i6742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6745 = data
  i6744.gravity = new pc.Vec3( i6745[0], i6745[1], i6745[2] )
  i6744.defaultSolverIterations = i6745[3]
  i6744.bounceThreshold = i6745[4]
  i6744.autoSyncTransforms = !!i6745[5]
  i6744.autoSimulation = !!i6745[6]
  var i6747 = i6745[7]
  var i6746 = []
  for(var i = 0; i < i6747.length; i += 1) {
    i6746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6747[i + 0]) );
  }
  i6744.collisionMatrix = i6746
  return i6744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6751 = data
  i6750.enabled = !!i6751[0]
  i6750.layerId = i6751[1]
  i6750.otherLayerId = i6751[2]
  return i6750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6753 = data
  request.r(i6753[0], i6753[1], 0, i6752, 'material')
  i6752.gravity = new pc.Vec2( i6753[2], i6753[3] )
  i6752.positionIterations = i6753[4]
  i6752.velocityIterations = i6753[5]
  i6752.velocityThreshold = i6753[6]
  i6752.maxLinearCorrection = i6753[7]
  i6752.maxAngularCorrection = i6753[8]
  i6752.maxTranslationSpeed = i6753[9]
  i6752.maxRotationSpeed = i6753[10]
  i6752.timeToSleep = i6753[11]
  i6752.linearSleepTolerance = i6753[12]
  i6752.angularSleepTolerance = i6753[13]
  i6752.defaultContactOffset = i6753[14]
  i6752.autoSimulation = !!i6753[15]
  i6752.queriesHitTriggers = !!i6753[16]
  i6752.queriesStartInColliders = !!i6753[17]
  i6752.callbacksOnDisable = !!i6753[18]
  i6752.reuseCollisionCallbacks = !!i6753[19]
  i6752.autoSyncTransforms = !!i6753[20]
  var i6755 = i6753[21]
  var i6754 = []
  for(var i = 0; i < i6755.length; i += 1) {
    i6754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6755[i + 0]) );
  }
  i6752.collisionMatrix = i6754
  return i6752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6759 = data
  i6758.enabled = !!i6759[0]
  i6758.layerId = i6759[1]
  i6758.otherLayerId = i6759[2]
  return i6758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6761 = data
  var i6763 = i6761[0]
  var i6762 = []
  for(var i = 0; i < i6763.length; i += 1) {
    i6762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6763[i + 0]) );
  }
  i6760.qualityLevels = i6762
  var i6765 = i6761[1]
  var i6764 = []
  for(var i = 0; i < i6765.length; i += 1) {
    i6764.push( i6765[i + 0] );
  }
  i6760.names = i6764
  i6760.shadows = i6761[2]
  i6760.anisotropicFiltering = i6761[3]
  i6760.antiAliasing = i6761[4]
  i6760.lodBias = i6761[5]
  i6760.shadowCascades = i6761[6]
  i6760.shadowDistance = i6761[7]
  i6760.shadowmaskMode = i6761[8]
  i6760.shadowProjection = i6761[9]
  i6760.shadowResolution = i6761[10]
  i6760.softParticles = !!i6761[11]
  i6760.softVegetation = !!i6761[12]
  i6760.activeColorSpace = i6761[13]
  i6760.desiredColorSpace = i6761[14]
  i6760.masterTextureLimit = i6761[15]
  i6760.maxQueuedFrames = i6761[16]
  i6760.particleRaycastBudget = i6761[17]
  i6760.pixelLightCount = i6761[18]
  i6760.realtimeReflectionProbes = !!i6761[19]
  i6760.shadowCascade2Split = i6761[20]
  i6760.shadowCascade4Split = new pc.Vec3( i6761[21], i6761[22], i6761[23] )
  i6760.streamingMipmapsActive = !!i6761[24]
  i6760.vSyncCount = i6761[25]
  i6760.asyncUploadBufferSize = i6761[26]
  i6760.asyncUploadTimeSlice = i6761[27]
  i6760.billboardsFaceCameraPosition = !!i6761[28]
  i6760.shadowNearPlaneOffset = i6761[29]
  i6760.streamingMipmapsMemoryBudget = i6761[30]
  i6760.maximumLODLevel = i6761[31]
  i6760.streamingMipmapsAddAllCameras = !!i6761[32]
  i6760.streamingMipmapsMaxLevelReduction = i6761[33]
  i6760.streamingMipmapsRenderersPerFrame = i6761[34]
  i6760.resolutionScalingFixedDPIFactor = i6761[35]
  i6760.streamingMipmapsMaxFileIORequests = i6761[36]
  i6760.currentQualityLevel = i6761[37]
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6771 = data
  i6770.weight = i6771[0]
  i6770.vertices = i6771[1]
  i6770.normals = i6771[2]
  i6770.tangents = i6771[3]
  return i6770
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6772 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6773 = data
  request.r(i6773[0], i6773[1], 0, i6772, 'm_ObjectArgument')
  i6772.m_ObjectArgumentAssemblyTypeName = i6773[2]
  i6772.m_IntArgument = i6773[3]
  i6772.m_FloatArgument = i6773[4]
  i6772.m_StringArgument = i6773[5]
  i6772.m_BoolArgument = !!i6773[6]
  return i6772
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6774 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6775 = data
  i6774.xPlacement = i6775[0]
  i6774.yPlacement = i6775[1]
  i6774.xAdvance = i6775[2]
  i6774.yAdvance = i6775[3]
  return i6774
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6776 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6777 = data
  i6776.m_GlyphIndex = i6777[0]
  i6776.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6777[1], i6776.m_GlyphValueRecord)
  return i6776
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6778 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6779 = data
  i6778.m_XPlacement = i6779[0]
  i6778.m_YPlacement = i6779[1]
  i6778.m_XAdvance = i6779[2]
  i6778.m_YAdvance = i6779[3]
  return i6778
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[18],"84":[30],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[94],"101":[94],"102":[94],"103":[94],"104":[94],"105":[94],"106":[94],"107":[30],"108":[8],"109":[110],"111":[110],"38":[37],"53":[16],"57":[16],"65":[16],"15":[16],"112":[37],"113":[47,37],"114":[8],"115":[47,37],"116":[37],"117":[8,37],"50":[37,47],"118":[37],"119":[37],"120":[37],"41":[38],"45":[47,37],"121":[37],"40":[38],"122":[37],"123":[37],"124":[37],"125":[37],"126":[37],"127":[37],"128":[37],"49":[37],"129":[37],"130":[47,37],"131":[37],"132":[37],"133":[37],"134":[37],"135":[47,37],"136":[37],"137":[68],"138":[68],"69":[68],"139":[68],"140":[30],"141":[30],"142":[30],"143":[144],"145":[30],"146":[46]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ScenarioFour.Path","ScenarioFour.PathPoint","ScenarioFour.Bullet","ScenarioFour.Enemy","ScenarioFour.EnemyAnimatedModel","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","ScenarioFour.Director","ScenarioFour.Cameras","Cinemachine.CinemachineVirtualCamera","ScenarioFour.CameraFovList","CameraFovChanger","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","Cinemachine.CinemachineBasicMultiChannelPerlin","Cinemachine.NoiseSettings","ScenarioFour.Enemies","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","UnityEngine.AudioSource","UnityEngine.AudioClip","SoundHandler","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ChooseHandler","Cinemachine.CinemachineBlenderSettings","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","JumpHandler","AnimationHandler","EffectHandler","UIHandler","EnemyPool","Enemy","StartCamera","Cinemachine.CinemachineSmoothPath","ResolutionHandler","CameraHandler","Cinemachine.CinemachineTrackedDolly","Stalker","ScenarioFour.Girl","ScenarioFour.AnimatedModel","ScenarioFour.UISwitcher","ScenarioFour.PulseTransform","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Rendering.PostProcessing.PostProcessLayer","UnityEngine.Purchasing.IAPButton"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "CRSEDPlayableAd(Repack)";

Deserializers.lunaInitializationTime = "09/23/2022 12:25:20";

Deserializers.lunaDaysRunning = "17.3";

Deserializers.lunaVersion = "4.0.0";

Deserializers.lunaSHA = "5046d9954fe68e1599eaaf3688d6669074172d3a";

Deserializers.creativeName = "FinalDraft_v1";

Deserializers.lunaAppID = "13417";

Deserializers.projectId = "33295ed8-87c8-46f3-914c-5d52dbfa511a";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.6.17\ncom.unity.postprocessing: 3.2.2\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1149";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CRSEDPlayableAdRepack";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "d064d7ec-3b7f-4d8b-aaaa-f0bcc2a08959";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

