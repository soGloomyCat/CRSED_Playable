var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8202 = root || request.c( 'UnityEngine.JointSpring' )
  var i8203 = data
  i8202.spring = i8203[0]
  i8202.damper = i8203[1]
  i8202.targetPosition = i8203[2]
  return i8202
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8204 = root || request.c( 'UnityEngine.JointMotor' )
  var i8205 = data
  i8204.m_TargetVelocity = i8205[0]
  i8204.m_Force = i8205[1]
  i8204.m_FreeSpin = i8205[2]
  return i8204
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8206 = root || request.c( 'UnityEngine.JointLimits' )
  var i8207 = data
  i8206.m_Min = i8207[0]
  i8206.m_Max = i8207[1]
  i8206.m_Bounciness = i8207[2]
  i8206.m_BounceMinVelocity = i8207[3]
  i8206.m_ContactDistance = i8207[4]
  i8206.minBounce = i8207[5]
  i8206.maxBounce = i8207[6]
  return i8206
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8208 = root || request.c( 'UnityEngine.JointDrive' )
  var i8209 = data
  i8208.m_PositionSpring = i8209[0]
  i8208.m_PositionDamper = i8209[1]
  i8208.m_MaximumForce = i8209[2]
  return i8208
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8210 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8211 = data
  i8210.m_Spring = i8211[0]
  i8210.m_Damper = i8211[1]
  return i8210
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8212 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8213 = data
  i8212.m_Limit = i8213[0]
  i8212.m_Bounciness = i8213[1]
  i8212.m_ContactDistance = i8213[2]
  return i8212
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8214 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8215 = data
  i8214.m_ExtremumSlip = i8215[0]
  i8214.m_ExtremumValue = i8215[1]
  i8214.m_AsymptoteSlip = i8215[2]
  i8214.m_AsymptoteValue = i8215[3]
  i8214.m_Stiffness = i8215[4]
  return i8214
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8216 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8217 = data
  i8216.m_LowerAngle = i8217[0]
  i8216.m_UpperAngle = i8217[1]
  return i8216
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8218 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8219 = data
  i8218.m_MotorSpeed = i8219[0]
  i8218.m_MaximumMotorTorque = i8219[1]
  return i8218
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8220 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8221 = data
  i8220.m_DampingRatio = i8221[0]
  i8220.m_Frequency = i8221[1]
  i8220.m_Angle = i8221[2]
  return i8220
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8222 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8223 = data
  i8222.m_LowerTranslation = i8223[0]
  i8222.m_UpperTranslation = i8223[1]
  return i8222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8224 = root || new pc.UnityMaterial()
  var i8225 = data
  i8224.name = i8225[0]
  request.r(i8225[1], i8225[2], 0, i8224, 'shader')
  i8224.renderQueue = i8225[3]
  i8224.enableInstancing = !!i8225[4]
  var i8227 = i8225[5]
  var i8226 = []
  for(var i = 0; i < i8227.length; i += 1) {
    i8226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8227[i + 0]) );
  }
  i8224.floatParameters = i8226
  var i8229 = i8225[6]
  var i8228 = []
  for(var i = 0; i < i8229.length; i += 1) {
    i8228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8229[i + 0]) );
  }
  i8224.colorParameters = i8228
  var i8231 = i8225[7]
  var i8230 = []
  for(var i = 0; i < i8231.length; i += 1) {
    i8230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8231[i + 0]) );
  }
  i8224.vectorParameters = i8230
  var i8233 = i8225[8]
  var i8232 = []
  for(var i = 0; i < i8233.length; i += 1) {
    i8232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8233[i + 0]) );
  }
  i8224.textureParameters = i8232
  var i8235 = i8225[9]
  var i8234 = []
  for(var i = 0; i < i8235.length; i += 1) {
    i8234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8235[i + 0]) );
  }
  i8224.materialFlags = i8234
  return i8224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8239 = data
  i8238.name = i8239[0]
  i8238.value = i8239[1]
  return i8238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8243 = data
  i8242.name = i8243[0]
  i8242.value = new pc.Color(i8243[1], i8243[2], i8243[3], i8243[4])
  return i8242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8247 = data
  i8246.name = i8247[0]
  i8246.value = new pc.Vec4( i8247[1], i8247[2], i8247[3], i8247[4] )
  return i8246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8251 = data
  i8250.name = i8251[0]
  request.r(i8251[1], i8251[2], 0, i8250, 'value')
  return i8250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8255 = data
  i8254.name = i8255[0]
  i8254.enabled = !!i8255[1]
  return i8254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8257 = data
  i8256.name = i8257[0]
  i8256.width = i8257[1]
  i8256.height = i8257[2]
  i8256.mipmapCount = i8257[3]
  i8256.anisoLevel = i8257[4]
  i8256.filterMode = i8257[5]
  i8256.hdr = !!i8257[6]
  i8256.format = i8257[7]
  i8256.wrapMode = i8257[8]
  i8256.alphaIsTransparency = !!i8257[9]
  i8256.alphaSource = i8257[10]
  return i8256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8259 = data
  i8258.position = new pc.Vec3( i8259[0], i8259[1], i8259[2] )
  i8258.scale = new pc.Vec3( i8259[3], i8259[4], i8259[5] )
  i8258.rotation = new pc.Quat(i8259[6], i8259[7], i8259[8], i8259[9])
  return i8258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8261 = data
  i8260.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8261[0], i8260.main)
  i8260.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8261[1], i8260.colorBySpeed)
  i8260.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8261[2], i8260.colorOverLifetime)
  i8260.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8261[3], i8260.emission)
  i8260.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8261[4], i8260.rotationBySpeed)
  i8260.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8261[5], i8260.rotationOverLifetime)
  i8260.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8261[6], i8260.shape)
  i8260.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8261[7], i8260.sizeBySpeed)
  i8260.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8261[8], i8260.sizeOverLifetime)
  i8260.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8261[9], i8260.textureSheetAnimation)
  i8260.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8261[10], i8260.velocityOverLifetime)
  i8260.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8261[11], i8260.noise)
  i8260.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8261[12], i8260.inheritVelocity)
  i8260.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8261[13], i8260.forceOverLifetime)
  i8260.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8261[14], i8260.limitVelocityOverLifetime)
  i8260.useAutoRandomSeed = !!i8261[15]
  i8260.randomSeed = i8261[16]
  return i8260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8262 = root || new pc.ParticleSystemMain()
  var i8263 = data
  i8262.duration = i8263[0]
  i8262.loop = !!i8263[1]
  i8262.prewarm = !!i8263[2]
  i8262.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[3], i8262.startDelay)
  i8262.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[4], i8262.startLifetime)
  i8262.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[5], i8262.startSpeed)
  i8262.startSize3D = !!i8263[6]
  i8262.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[7], i8262.startSizeX)
  i8262.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[8], i8262.startSizeY)
  i8262.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[9], i8262.startSizeZ)
  i8262.startRotation3D = !!i8263[10]
  i8262.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[11], i8262.startRotationX)
  i8262.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[12], i8262.startRotationY)
  i8262.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[13], i8262.startRotationZ)
  i8262.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8263[14], i8262.startColor)
  i8262.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8263[15], i8262.gravityModifier)
  i8262.simulationSpace = i8263[16]
  request.r(i8263[17], i8263[18], 0, i8262, 'customSimulationSpace')
  i8262.simulationSpeed = i8263[19]
  i8262.useUnscaledTime = !!i8263[20]
  i8262.scalingMode = i8263[21]
  i8262.playOnAwake = !!i8263[22]
  i8262.maxParticles = i8263[23]
  i8262.emitterVelocityMode = i8263[24]
  i8262.stopAction = i8263[25]
  return i8262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8264 = root || new pc.MinMaxCurve()
  var i8265 = data
  i8264.mode = i8265[0]
  i8264.curveMin = new pc.AnimationCurve( { keys_flow: i8265[1] } )
  i8264.curveMax = new pc.AnimationCurve( { keys_flow: i8265[2] } )
  i8264.curveMultiplier = i8265[3]
  i8264.constantMin = i8265[4]
  i8264.constantMax = i8265[5]
  return i8264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8266 = root || new pc.MinMaxGradient()
  var i8267 = data
  i8266.mode = i8267[0]
  i8266.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8267[1], i8266.gradientMin)
  i8266.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8267[2], i8266.gradientMax)
  i8266.colorMin = new pc.Color(i8267[3], i8267[4], i8267[5], i8267[6])
  i8266.colorMax = new pc.Color(i8267[7], i8267[8], i8267[9], i8267[10])
  return i8266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8269 = data
  i8268.mode = i8269[0]
  var i8271 = i8269[1]
  var i8270 = []
  for(var i = 0; i < i8271.length; i += 1) {
    i8270.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8271[i + 0]) );
  }
  i8268.colorKeys = i8270
  var i8273 = i8269[2]
  var i8272 = []
  for(var i = 0; i < i8273.length; i += 1) {
    i8272.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8273[i + 0]) );
  }
  i8268.alphaKeys = i8272
  return i8268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8274 = root || new pc.ParticleSystemColorBySpeed()
  var i8275 = data
  i8274.enabled = !!i8275[0]
  i8274.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8275[1], i8274.color)
  i8274.range = new pc.Vec2( i8275[2], i8275[3] )
  return i8274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8279 = data
  i8278.color = new pc.Color(i8279[0], i8279[1], i8279[2], i8279[3])
  i8278.time = i8279[4]
  return i8278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8283 = data
  i8282.alpha = i8283[0]
  i8282.time = i8283[1]
  return i8282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8284 = root || new pc.ParticleSystemColorOverLifetime()
  var i8285 = data
  i8284.enabled = !!i8285[0]
  i8284.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8285[1], i8284.color)
  return i8284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8286 = root || new pc.ParticleSystemEmitter()
  var i8287 = data
  i8286.enabled = !!i8287[0]
  i8286.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8287[1], i8286.rateOverTime)
  i8286.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8287[2], i8286.rateOverDistance)
  var i8289 = i8287[3]
  var i8288 = []
  for(var i = 0; i < i8289.length; i += 1) {
    i8288.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8289[i + 0]) );
  }
  i8286.bursts = i8288
  return i8286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8292 = root || new pc.ParticleSystemBurst()
  var i8293 = data
  i8292.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8293[0], i8292.count)
  i8292.cycleCount = i8293[1]
  i8292.minCount = i8293[2]
  i8292.maxCount = i8293[3]
  i8292.repeatInterval = i8293[4]
  i8292.time = i8293[5]
  return i8292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8294 = root || new pc.ParticleSystemRotationBySpeed()
  var i8295 = data
  i8294.enabled = !!i8295[0]
  i8294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8295[1], i8294.x)
  i8294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8295[2], i8294.y)
  i8294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8295[3], i8294.z)
  i8294.separateAxes = !!i8295[4]
  i8294.range = new pc.Vec2( i8295[5], i8295[6] )
  return i8294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8296 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8297 = data
  i8296.enabled = !!i8297[0]
  i8296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[1], i8296.x)
  i8296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[2], i8296.y)
  i8296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[3], i8296.z)
  i8296.separateAxes = !!i8297[4]
  return i8296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8298 = root || new pc.ParticleSystemShape()
  var i8299 = data
  i8298.enabled = !!i8299[0]
  i8298.shapeType = i8299[1]
  i8298.randomDirectionAmount = i8299[2]
  i8298.sphericalDirectionAmount = i8299[3]
  i8298.randomPositionAmount = i8299[4]
  i8298.alignToDirection = !!i8299[5]
  i8298.radius = i8299[6]
  i8298.radiusMode = i8299[7]
  i8298.radiusSpread = i8299[8]
  i8298.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[9], i8298.radiusSpeed)
  i8298.radiusThickness = i8299[10]
  i8298.angle = i8299[11]
  i8298.length = i8299[12]
  i8298.boxThickness = new pc.Vec3( i8299[13], i8299[14], i8299[15] )
  i8298.meshShapeType = i8299[16]
  request.r(i8299[17], i8299[18], 0, i8298, 'mesh')
  request.r(i8299[19], i8299[20], 0, i8298, 'meshRenderer')
  request.r(i8299[21], i8299[22], 0, i8298, 'skinnedMeshRenderer')
  i8298.useMeshMaterialIndex = !!i8299[23]
  i8298.meshMaterialIndex = i8299[24]
  i8298.useMeshColors = !!i8299[25]
  i8298.normalOffset = i8299[26]
  i8298.arc = i8299[27]
  i8298.arcMode = i8299[28]
  i8298.arcSpread = i8299[29]
  i8298.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[30], i8298.arcSpeed)
  i8298.donutRadius = i8299[31]
  i8298.position = new pc.Vec3( i8299[32], i8299[33], i8299[34] )
  i8298.rotation = new pc.Vec3( i8299[35], i8299[36], i8299[37] )
  i8298.scale = new pc.Vec3( i8299[38], i8299[39], i8299[40] )
  return i8298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8300 = root || new pc.ParticleSystemSizeBySpeed()
  var i8301 = data
  i8300.enabled = !!i8301[0]
  i8300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8301[1], i8300.x)
  i8300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8301[2], i8300.y)
  i8300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8301[3], i8300.z)
  i8300.separateAxes = !!i8301[4]
  i8300.range = new pc.Vec2( i8301[5], i8301[6] )
  return i8300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8302 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8303 = data
  i8302.enabled = !!i8303[0]
  i8302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8303[1], i8302.x)
  i8302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8303[2], i8302.y)
  i8302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8303[3], i8302.z)
  i8302.separateAxes = !!i8303[4]
  return i8302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8304 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8305 = data
  i8304.enabled = !!i8305[0]
  i8304.mode = i8305[1]
  i8304.animation = i8305[2]
  i8304.numTilesX = i8305[3]
  i8304.numTilesY = i8305[4]
  i8304.useRandomRow = !!i8305[5]
  i8304.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[6], i8304.frameOverTime)
  i8304.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[7], i8304.startFrame)
  i8304.cycleCount = i8305[8]
  i8304.rowIndex = i8305[9]
  i8304.flipU = i8305[10]
  i8304.flipV = i8305[11]
  i8304.spriteCount = i8305[12]
  var i8307 = i8305[13]
  var i8306 = []
  for(var i = 0; i < i8307.length; i += 2) {
  request.r(i8307[i + 0], i8307[i + 1], 2, i8306, '')
  }
  i8304.sprites = i8306
  return i8304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8310 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8311 = data
  i8310.enabled = !!i8311[0]
  i8310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8311[1], i8310.x)
  i8310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8311[2], i8310.y)
  i8310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8311[3], i8310.z)
  i8310.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8311[4], i8310.speedModifier)
  i8310.space = i8311[5]
  return i8310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8312 = root || new pc.ParticleSystemNoise()
  var i8313 = data
  i8312.enabled = !!i8313[0]
  i8312.separateAxes = !!i8313[1]
  i8312.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[2], i8312.strengthX)
  i8312.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[3], i8312.strengthY)
  i8312.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[4], i8312.strengthZ)
  i8312.frequency = i8313[5]
  i8312.damping = !!i8313[6]
  i8312.octaveCount = i8313[7]
  i8312.octaveMultiplier = i8313[8]
  i8312.octaveScale = i8313[9]
  i8312.quality = i8313[10]
  i8312.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[11], i8312.scrollSpeed)
  i8312.scrollSpeedMultiplier = i8313[12]
  i8312.remapEnabled = !!i8313[13]
  i8312.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[14], i8312.remapX)
  i8312.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[15], i8312.remapY)
  i8312.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[16], i8312.remapZ)
  i8312.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[17], i8312.positionAmount)
  i8312.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[18], i8312.rotationAmount)
  i8312.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8313[19], i8312.sizeAmount)
  return i8312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8314 = root || new pc.ParticleSystemInheritVelocity()
  var i8315 = data
  i8314.enabled = !!i8315[0]
  i8314.mode = i8315[1]
  i8314.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8315[2], i8314.curve)
  return i8314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8316 = root || new pc.ParticleSystemForceOverLifetime()
  var i8317 = data
  i8316.enabled = !!i8317[0]
  i8316.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8317[1], i8316.x)
  i8316.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8317[2], i8316.y)
  i8316.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8317[3], i8316.z)
  i8316.space = i8317[4]
  i8316.randomized = !!i8317[5]
  return i8316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8318 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8319 = data
  i8318.enabled = !!i8319[0]
  i8318.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8319[1], i8318.limitX)
  i8318.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8319[2], i8318.limitY)
  i8318.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8319[3], i8318.limitZ)
  i8318.dampen = i8319[4]
  i8318.separateAxes = !!i8319[5]
  i8318.space = i8319[6]
  i8318.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8319[7], i8318.drag)
  i8318.multiplyDragByParticleSize = !!i8319[8]
  i8318.multiplyDragByParticleVelocity = !!i8319[9]
  return i8318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8321 = data
  i8320.enabled = !!i8321[0]
  request.r(i8321[1], i8321[2], 0, i8320, 'sharedMaterial')
  var i8323 = i8321[3]
  var i8322 = []
  for(var i = 0; i < i8323.length; i += 2) {
  request.r(i8323[i + 0], i8323[i + 1], 2, i8322, '')
  }
  i8320.sharedMaterials = i8322
  i8320.receiveShadows = !!i8321[4]
  i8320.shadowCastingMode = i8321[5]
  i8320.sortingLayerID = i8321[6]
  i8320.sortingOrder = i8321[7]
  i8320.lightmapIndex = i8321[8]
  i8320.lightmapSceneIndex = i8321[9]
  i8320.lightmapScaleOffset = new pc.Vec4( i8321[10], i8321[11], i8321[12], i8321[13] )
  i8320.lightProbeUsage = i8321[14]
  i8320.reflectionProbeUsage = i8321[15]
  request.r(i8321[16], i8321[17], 0, i8320, 'mesh')
  i8320.meshCount = i8321[18]
  i8320.activeVertexStreamsCount = i8321[19]
  i8320.alignment = i8321[20]
  i8320.renderMode = i8321[21]
  i8320.sortMode = i8321[22]
  i8320.lengthScale = i8321[23]
  i8320.velocityScale = i8321[24]
  i8320.cameraVelocityScale = i8321[25]
  i8320.normalDirection = i8321[26]
  i8320.sortingFudge = i8321[27]
  i8320.minParticleSize = i8321[28]
  i8320.maxParticleSize = i8321[29]
  i8320.pivot = new pc.Vec3( i8321[30], i8321[31], i8321[32] )
  request.r(i8321[33], i8321[34], 0, i8320, 'trailMaterial')
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8327 = data
  i8326.name = i8327[0]
  i8326.tag = i8327[1]
  i8326.enabled = !!i8327[2]
  i8326.isStatic = !!i8327[3]
  i8326.layer = i8327[4]
  return i8326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8329 = data
  request.r(i8329[0], i8329[1], 0, i8328, 'sharedMesh')
  return i8328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8331 = data
  request.r(i8331[0], i8331[1], 0, i8330, 'additionalVertexStreams')
  i8330.enabled = !!i8331[2]
  request.r(i8331[3], i8331[4], 0, i8330, 'sharedMaterial')
  var i8333 = i8331[5]
  var i8332 = []
  for(var i = 0; i < i8333.length; i += 2) {
  request.r(i8333[i + 0], i8333[i + 1], 2, i8332, '')
  }
  i8330.sharedMaterials = i8332
  i8330.receiveShadows = !!i8331[6]
  i8330.shadowCastingMode = i8331[7]
  i8330.sortingLayerID = i8331[8]
  i8330.sortingOrder = i8331[9]
  i8330.lightmapIndex = i8331[10]
  i8330.lightmapSceneIndex = i8331[11]
  i8330.lightmapScaleOffset = new pc.Vec4( i8331[12], i8331[13], i8331[14], i8331[15] )
  i8330.lightProbeUsage = i8331[16]
  i8330.reflectionProbeUsage = i8331[17]
  return i8330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8335 = data
  i8334.name = i8335[0]
  i8334.halfPrecision = !!i8335[1]
  i8334.vertexCount = i8335[2]
  i8334.aabb = i8335[3]
  var i8337 = i8335[4]
  var i8336 = []
  for(var i = 0; i < i8337.length; i += 1) {
    i8336.push( !!i8337[i + 0] );
  }
  i8334.streams = i8336
  i8334.vertices = i8335[5]
  var i8339 = i8335[6]
  var i8338 = []
  for(var i = 0; i < i8339.length; i += 1) {
    i8338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8339[i + 0]) );
  }
  i8334.subMeshes = i8338
  var i8341 = i8335[7]
  var i8340 = []
  for(var i = 0; i < i8341.length; i += 16) {
    i8340.push( new pc.Mat4().setData(i8341[i + 0], i8341[i + 1], i8341[i + 2], i8341[i + 3],  i8341[i + 4], i8341[i + 5], i8341[i + 6], i8341[i + 7],  i8341[i + 8], i8341[i + 9], i8341[i + 10], i8341[i + 11],  i8341[i + 12], i8341[i + 13], i8341[i + 14], i8341[i + 15]) );
  }
  i8334.bindposes = i8340
  var i8343 = i8335[8]
  var i8342 = []
  for(var i = 0; i < i8343.length; i += 1) {
    i8342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8343[i + 0]) );
  }
  i8334.blendShapes = i8342
  return i8334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8349 = data
  i8348.triangles = i8349[0]
  return i8348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8355 = data
  i8354.name = i8355[0]
  var i8357 = i8355[1]
  var i8356 = []
  for(var i = 0; i < i8357.length; i += 1) {
    i8356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8357[i + 0]) );
  }
  i8354.frames = i8356
  return i8354
}

Deserializers["ScenarioFour.Path"] = function (request, data, root) {
  var i8358 = root || request.c( 'ScenarioFour.Path' )
  var i8359 = data
  var i8361 = i8359[0]
  var i8360 = []
  for(var i = 0; i < i8361.length; i += 2) {
  request.r(i8361[i + 0], i8361[i + 1], 2, i8360, '')
  }
  i8358._points = i8360
  return i8358
}

Deserializers["ScenarioFour.PathPoint"] = function (request, data, root) {
  var i8364 = root || request.c( 'ScenarioFour.PathPoint' )
  var i8365 = data
  i8364._time = i8365[0]
  return i8364
}

Deserializers["ScenarioFour.Bullet"] = function (request, data, root) {
  var i8366 = root || request.c( 'ScenarioFour.Bullet' )
  var i8367 = data
  i8366._flyTime = i8367[0]
  i8366._flySpeed = i8367[1]
  return i8366
}

Deserializers["ScenarioFour.Enemy"] = function (request, data, root) {
  var i8368 = root || request.c( 'ScenarioFour.Enemy' )
  var i8369 = data
  request.r(i8369[0], i8369[1], 0, i8368, '_animatedModel')
  request.r(i8369[2], i8369[3], 0, i8368, '_bulletTemplate')
  request.r(i8369[4], i8369[5], 0, i8368, '_shootPoint')
  request.r(i8369[6], i8369[7], 0, i8368, '_bloodEffect')
  return i8368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8371 = data
  request.r(i8371[0], i8371[1], 0, i8370, 'animatorController')
  i8370.updateMode = i8371[2]
  var i8373 = i8371[3]
  var i8372 = []
  for(var i = 0; i < i8373.length; i += 2) {
  request.r(i8373[i + 0], i8373[i + 1], 2, i8372, '')
  }
  i8370.humanBones = i8372
  i8370.enabled = !!i8371[4]
  return i8370
}

Deserializers["ScenarioFour.EnemyAnimatedModel"] = function (request, data, root) {
  var i8376 = root || request.c( 'ScenarioFour.EnemyAnimatedModel' )
  var i8377 = data
  return i8376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i8378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i8379 = data
  i8378.enabled = !!i8379[0]
  request.r(i8379[1], i8379[2], 0, i8378, 'sharedMaterial')
  var i8381 = i8379[3]
  var i8380 = []
  for(var i = 0; i < i8381.length; i += 2) {
  request.r(i8381[i + 0], i8381[i + 1], 2, i8380, '')
  }
  i8378.sharedMaterials = i8380
  i8378.receiveShadows = !!i8379[4]
  i8378.shadowCastingMode = i8379[5]
  i8378.sortingLayerID = i8379[6]
  i8378.sortingOrder = i8379[7]
  i8378.lightmapIndex = i8379[8]
  i8378.lightmapSceneIndex = i8379[9]
  i8378.lightmapScaleOffset = new pc.Vec4( i8379[10], i8379[11], i8379[12], i8379[13] )
  i8378.lightProbeUsage = i8379[14]
  i8378.reflectionProbeUsage = i8379[15]
  request.r(i8379[16], i8379[17], 0, i8378, 'sharedMesh')
  var i8383 = i8379[18]
  var i8382 = []
  for(var i = 0; i < i8383.length; i += 2) {
  request.r(i8383[i + 0], i8383[i + 1], 2, i8382, '')
  }
  i8378.bones = i8382
  i8378.updateWhenOffscreen = !!i8379[19]
  i8378.localBounds = i8379[20]
  request.r(i8379[21], i8379[22], 0, i8378, 'rootBone')
  var i8385 = i8379[23]
  var i8384 = []
  for(var i = 0; i < i8385.length; i += 1) {
    i8384.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i8385[i + 0]) );
  }
  i8378.blendShapesWeights = i8384
  return i8378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i8388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i8389 = data
  i8388.weight = i8389[0]
  return i8388
}

Deserializers["ScenarioFour.Director"] = function (request, data, root) {
  var i8390 = root || request.c( 'ScenarioFour.Director' )
  var i8391 = data
  request.r(i8391[0], i8391[1], 0, i8390, '_girl')
  request.r(i8391[2], i8391[3], 0, i8390, '_cameras')
  request.r(i8391[4], i8391[5], 0, i8390, '_uiSwitcher')
  request.r(i8391[6], i8391[7], 0, i8390, '_enemies')
  request.r(i8391[8], i8391[9], 0, i8390, '_teleportEffectStatic')
  var i8393 = i8391[10]
  var i8392 = []
  for(var i = 0; i < i8393.length; i += 1) {
    i8392.push( request.d('ScenarioFour.CameraTiming', i8393[i + 0]) );
  }
  i8390._timings = i8392
  return i8390
}

Deserializers["ScenarioFour.CameraTiming"] = function (request, data, root) {
  var i8396 = root || request.c( 'ScenarioFour.CameraTiming' )
  var i8397 = data
  i8396._timing = i8397[0]
  i8396._cameraType = i8397[1]
  return i8396
}

Deserializers["ScenarioFour.Cameras"] = function (request, data, root) {
  var i8398 = root || request.c( 'ScenarioFour.Cameras' )
  var i8399 = data
  var i8401 = i8399[0]
  var i8400 = []
  for(var i = 0; i < i8401.length; i += 1) {
    i8400.push( request.d('ScenarioFour.CreoCamera', i8401[i + 0]) );
  }
  i8398._cameras = i8400
  request.r(i8399[1], i8399[2], 0, i8398, '_camerasFovList')
  request.r(i8399[3], i8399[4], 0, i8398, '_cameraFovChanger')
  return i8398
}

Deserializers["ScenarioFour.CreoCamera"] = function (request, data, root) {
  var i8404 = root || request.c( 'ScenarioFour.CreoCamera' )
  var i8405 = data
  request.r(i8405[0], i8405[1], 0, i8404, '_camera')
  i8404._type = i8405[2]
  return i8404
}

Deserializers["CameraFovChanger"] = function (request, data, root) {
  var i8406 = root || request.c( 'CameraFovChanger' )
  var i8407 = data
  return i8406
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i8408 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i8409 = data
  request.r(i8409[0], i8409[1], 0, i8408, 'm_LookAt')
  request.r(i8409[2], i8409[3], 0, i8408, 'm_Follow')
  i8408.m_Lens = request.d('Cinemachine.LensSettings', i8409[4], i8408.m_Lens)
  i8408.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i8409[5], i8408.m_Transitions)
  var i8411 = i8409[6]
  var i8410 = []
  for(var i = 0; i < i8411.length; i += 1) {
    i8410.push( i8411[i + 0] );
  }
  i8408.m_ExcludedPropertiesInInspector = i8410
  var i8413 = i8409[7]
  var i8412 = []
  for(var i = 0; i < i8413.length; i += 1) {
    i8412.push( i8413[i + 0] );
  }
  i8408.m_LockStageInInspector = i8412
  i8408.m_Priority = i8409[8]
  i8408.m_StandbyUpdate = i8409[9]
  i8408.m_LegacyBlendHint = i8409[10]
  request.r(i8409[11], i8409[12], 0, i8408, 'm_ComponentOwner')
  i8408.m_StreamingVersion = i8409[13]
  return i8408
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i8414 = root || request.c( 'Cinemachine.LensSettings' )
  var i8415 = data
  i8414.FieldOfView = i8415[0]
  i8414.OrthographicSize = i8415[1]
  i8414.NearClipPlane = i8415[2]
  i8414.FarClipPlane = i8415[3]
  i8414.Dutch = i8415[4]
  i8414.LensShift = new pc.Vec2( i8415[5], i8415[6] )
  return i8414
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i8416 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i8417 = data
  i8416.m_BlendHint = i8417[0]
  i8416.m_InheritPosition = !!i8417[1]
  i8416.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i8417[2], i8416.m_OnCameraLive)
  return i8416
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i8418 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i8419 = data
  i8418.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8419[0], i8418.m_PersistentCalls)
  return i8418
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8420 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8421 = data
  var i8423 = i8421[0]
  var i8422 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8423.length; i += 1) {
    i8422.add(request.d('UnityEngine.Events.PersistentCall', i8423[i + 0]));
  }
  i8420.m_Calls = i8422
  return i8420
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8426 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8427 = data
  request.r(i8427[0], i8427[1], 0, i8426, 'm_Target')
  i8426.m_TargetAssemblyTypeName = i8427[2]
  i8426.m_MethodName = i8427[3]
  i8426.m_Mode = i8427[4]
  i8426.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8427[5], i8426.m_Arguments)
  i8426.m_CallState = i8427[6]
  return i8426
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i8432 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i8433 = data
  return i8432
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i8434 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i8435 = data
  i8434.m_TrackedObjectOffset = new pc.Vec3( i8435[0], i8435[1], i8435[2] )
  i8434.m_LookaheadTime = i8435[3]
  i8434.m_LookaheadSmoothing = i8435[4]
  i8434.m_LookaheadIgnoreY = !!i8435[5]
  i8434.m_HorizontalDamping = i8435[6]
  i8434.m_VerticalDamping = i8435[7]
  i8434.m_ScreenX = i8435[8]
  i8434.m_ScreenY = i8435[9]
  i8434.m_DeadZoneWidth = i8435[10]
  i8434.m_DeadZoneHeight = i8435[11]
  i8434.m_SoftZoneWidth = i8435[12]
  i8434.m_SoftZoneHeight = i8435[13]
  i8434.m_BiasX = i8435[14]
  i8434.m_BiasY = i8435[15]
  i8434.m_CenterOnActivate = !!i8435[16]
  return i8434
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i8436 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i8437 = data
  i8436.m_BindingMode = i8437[0]
  i8436.m_FollowOffset = new pc.Vec3( i8437[1], i8437[2], i8437[3] )
  i8436.m_XDamping = i8437[4]
  i8436.m_YDamping = i8437[5]
  i8436.m_ZDamping = i8437[6]
  i8436.m_AngularDampingMode = i8437[7]
  i8436.m_PitchDamping = i8437[8]
  i8436.m_YawDamping = i8437[9]
  i8436.m_RollDamping = i8437[10]
  i8436.m_AngularDamping = i8437[11]
  return i8436
}

Deserializers["Cinemachine.CinemachineBasicMultiChannelPerlin"] = function (request, data, root) {
  var i8438 = root || request.c( 'Cinemachine.CinemachineBasicMultiChannelPerlin' )
  var i8439 = data
  request.r(i8439[0], i8439[1], 0, i8438, 'm_NoiseProfile')
  i8438.m_PivotOffset = new pc.Vec3( i8439[2], i8439[3], i8439[4] )
  i8438.m_AmplitudeGain = i8439[5]
  i8438.m_FrequencyGain = i8439[6]
  i8438.mNoiseOffsets = new pc.Vec3( i8439[7], i8439[8], i8439[9] )
  return i8438
}

Deserializers["ScenarioFour.Enemies"] = function (request, data, root) {
  var i8440 = root || request.c( 'ScenarioFour.Enemies' )
  var i8441 = data
  request.r(i8441[0], i8441[1], 0, i8440, '_enemyRight')
  request.r(i8441[2], i8441[3], 0, i8440, '_enemyLeft')
  return i8440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8443 = data
  i8442.name = i8443[0]
  i8442.atlasId = i8443[1]
  i8442.mipmapCount = i8443[2]
  i8442.hdr = !!i8443[3]
  i8442.size = i8443[4]
  i8442.anisoLevel = i8443[5]
  i8442.filterMode = i8443[6]
  i8442.wrapMode = i8443[7]
  var i8445 = i8443[8]
  var i8444 = []
  for(var i = 0; i < i8445.length; i += 4) {
    i8444.push( UnityEngine.Rect.MinMaxRect(i8445[i + 0], i8445[i + 1], i8445[i + 2], i8445[i + 3]) );
  }
  i8442.rects = i8444
  return i8442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8449 = data
  i8448.name = i8449[0]
  i8448.index = i8449[1]
  i8448.startup = !!i8449[2]
  return i8448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8451 = data
  i8450.enabled = !!i8451[0]
  i8450.aspect = i8451[1]
  i8450.orthographic = !!i8451[2]
  i8450.orthographicSize = i8451[3]
  i8450.backgroundColor = new pc.Color(i8451[4], i8451[5], i8451[6], i8451[7])
  i8450.nearClipPlane = i8451[8]
  i8450.farClipPlane = i8451[9]
  i8450.fieldOfView = i8451[10]
  i8450.depth = i8451[11]
  i8450.clearFlags = i8451[12]
  i8450.cullingMask = i8451[13]
  i8450.rect = i8451[14]
  request.r(i8451[15], i8451[16], 0, i8450, 'targetTexture')
  return i8450
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i8452 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i8453 = data
  i8452.m_ShowDebugText = !!i8453[0]
  i8452.m_ShowCameraFrustum = !!i8453[1]
  i8452.m_IgnoreTimeScale = !!i8453[2]
  request.r(i8453[3], i8453[4], 0, i8452, 'm_WorldUpOverride')
  i8452.m_UpdateMethod = i8453[5]
  i8452.m_BlendUpdateMethod = i8453[6]
  i8452.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i8453[7], i8452.m_DefaultBlend)
  request.r(i8453[8], i8453[9], 0, i8452, 'm_CustomBlends')
  i8452.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i8453[10], i8452.m_CameraCutEvent)
  i8452.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i8453[11], i8452.m_CameraActivatedEvent)
  return i8452
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i8454 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i8455 = data
  i8454.m_Style = i8455[0]
  i8454.m_Time = i8455[1]
  i8454.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i8455[2] } )
  return i8454
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i8456 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i8457 = data
  i8456.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8457[0], i8456.m_PersistentCalls)
  return i8456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8459 = data
  request.r(i8459[0], i8459[1], 0, i8458, 'clip')
  request.r(i8459[2], i8459[3], 0, i8458, 'outputAudioMixerGroup')
  i8458.playOnAwake = !!i8459[4]
  i8458.loop = !!i8459[5]
  i8458.time = i8459[6]
  i8458.volume = i8459[7]
  i8458.pitch = i8459[8]
  i8458.enabled = !!i8459[9]
  return i8458
}

Deserializers["SoundHandler"] = function (request, data, root) {
  var i8460 = root || request.c( 'SoundHandler' )
  var i8461 = data
  request.r(i8461[0], i8461[1], 0, i8460, '_audioSource')
  return i8460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8463 = data
  i8462.enabled = !!i8463[0]
  i8462.type = i8463[1]
  i8462.color = new pc.Color(i8463[2], i8463[3], i8463[4], i8463[5])
  i8462.cullingMask = i8463[6]
  i8462.intensity = i8463[7]
  i8462.range = i8463[8]
  i8462.spotAngle = i8463[9]
  i8462.shadows = i8463[10]
  i8462.shadowNormalBias = i8463[11]
  i8462.shadowBias = i8463[12]
  i8462.shadowStrength = i8463[13]
  i8462.shadowResolution = i8463[14]
  i8462.lightmapBakeType = i8463[15]
  i8462.renderMode = i8463[16]
  request.r(i8463[17], i8463[18], 0, i8462, 'cookie')
  i8462.cookieSize = i8463[19]
  return i8462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8465 = data
  i8464.pivot = new pc.Vec2( i8465[0], i8465[1] )
  i8464.anchorMin = new pc.Vec2( i8465[2], i8465[3] )
  i8464.anchorMax = new pc.Vec2( i8465[4], i8465[5] )
  i8464.sizeDelta = new pc.Vec2( i8465[6], i8465[7] )
  i8464.anchoredPosition3D = new pc.Vec3( i8465[8], i8465[9], i8465[10] )
  i8464.rotation = new pc.Quat(i8465[11], i8465[12], i8465[13], i8465[14])
  i8464.scale = new pc.Vec3( i8465[15], i8465[16], i8465[17] )
  return i8464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8467 = data
  i8466.enabled = !!i8467[0]
  i8466.planeDistance = i8467[1]
  i8466.referencePixelsPerUnit = i8467[2]
  i8466.isFallbackOverlay = !!i8467[3]
  i8466.renderMode = i8467[4]
  i8466.renderOrder = i8467[5]
  i8466.sortingLayerName = i8467[6]
  i8466.sortingOrder = i8467[7]
  i8466.scaleFactor = i8467[8]
  request.r(i8467[9], i8467[10], 0, i8466, 'worldCamera')
  i8466.overrideSorting = !!i8467[11]
  i8466.pixelPerfect = !!i8467[12]
  i8466.targetDisplay = i8467[13]
  i8466.overridePixelPerfect = !!i8467[14]
  return i8466
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8468 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8469 = data
  i8468.m_UiScaleMode = i8469[0]
  i8468.m_ReferencePixelsPerUnit = i8469[1]
  i8468.m_ScaleFactor = i8469[2]
  i8468.m_ReferenceResolution = new pc.Vec2( i8469[3], i8469[4] )
  i8468.m_ScreenMatchMode = i8469[5]
  i8468.m_MatchWidthOrHeight = i8469[6]
  i8468.m_PhysicalUnit = i8469[7]
  i8468.m_FallbackScreenDPI = i8469[8]
  i8468.m_DefaultSpriteDPI = i8469[9]
  i8468.m_DynamicPixelsPerUnit = i8469[10]
  i8468.m_PresetInfoIsWorld = !!i8469[11]
  return i8468
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8470 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8471 = data
  i8470.m_IgnoreReversedGraphics = !!i8471[0]
  i8470.m_BlockingObjects = i8471[1]
  i8470.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8471[2] )
  return i8470
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i8472 = root || request.c( 'ChooseHandler' )
  var i8473 = data
  request.r(i8473[0], i8473[1], 0, i8472, '_brain')
  request.r(i8473[2], i8473[3], 0, i8472, '_soundHandler')
  request.r(i8473[4], i8473[5], 0, i8472, '_ericSettings')
  request.r(i8473[6], i8473[7], 0, i8472, '_viperSettings')
  request.r(i8473[8], i8473[9], 0, i8472, '_ericScene')
  request.r(i8473[10], i8473[11], 0, i8472, '_ericSceneBackground')
  request.r(i8473[12], i8473[13], 0, i8472, '_viperScene')
  request.r(i8473[14], i8473[15], 0, i8472, '_viperSceneBackground')
  request.r(i8473[16], i8473[17], 0, i8472, '_chooseButton')
  var i8475 = i8473[18]
  var i8474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8475.length; i += 2) {
  request.r(i8475[i + 0], i8475[i + 1], 1, i8474, '')
  }
  i8472._characters = i8474
  request.r(i8473[19], i8473[20], 0, i8472, '_frame')
  return i8472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8479 = data
  i8478.cullTransparentMesh = !!i8479[0]
  return i8478
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8480 = root || request.c( 'UnityEngine.UI.Image' )
  var i8481 = data
  request.r(i8481[0], i8481[1], 0, i8480, 'm_Sprite')
  i8480.m_Type = i8481[2]
  i8480.m_PreserveAspect = !!i8481[3]
  i8480.m_FillCenter = !!i8481[4]
  i8480.m_FillMethod = i8481[5]
  i8480.m_FillAmount = i8481[6]
  i8480.m_FillClockwise = !!i8481[7]
  i8480.m_FillOrigin = i8481[8]
  i8480.m_UseSpriteMesh = !!i8481[9]
  i8480.m_PixelsPerUnitMultiplier = i8481[10]
  request.r(i8481[11], i8481[12], 0, i8480, 'm_Material')
  i8480.m_Maskable = !!i8481[13]
  i8480.m_Color = new pc.Color(i8481[14], i8481[15], i8481[16], i8481[17])
  i8480.m_RaycastTarget = !!i8481[18]
  i8480.m_RaycastPadding = new pc.Vec4( i8481[19], i8481[20], i8481[21], i8481[22] )
  return i8480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8483 = data
  i8482.m_Alpha = i8483[0]
  i8482.m_Interactable = !!i8483[1]
  i8482.m_BlocksRaycasts = !!i8483[2]
  i8482.m_IgnoreParentGroups = !!i8483[3]
  i8482.enabled = !!i8483[4]
  return i8482
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8484 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8485 = data
  i8484.m_ShowMaskGraphic = !!i8485[0]
  return i8484
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8486 = root || request.c( 'UnityEngine.UI.Button' )
  var i8487 = data
  i8486.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8487[0], i8486.m_OnClick)
  i8486.m_Navigation = request.d('UnityEngine.UI.Navigation', i8487[1], i8486.m_Navigation)
  i8486.m_Transition = i8487[2]
  i8486.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8487[3], i8486.m_Colors)
  i8486.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8487[4], i8486.m_SpriteState)
  i8486.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8487[5], i8486.m_AnimationTriggers)
  i8486.m_Interactable = !!i8487[6]
  request.r(i8487[7], i8487[8], 0, i8486, 'm_TargetGraphic')
  return i8486
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8488 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8489 = data
  i8488.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8489[0], i8488.m_PersistentCalls)
  return i8488
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8490 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8491 = data
  i8490.m_Mode = i8491[0]
  i8490.m_WrapAround = !!i8491[1]
  request.r(i8491[2], i8491[3], 0, i8490, 'm_SelectOnUp')
  request.r(i8491[4], i8491[5], 0, i8490, 'm_SelectOnDown')
  request.r(i8491[6], i8491[7], 0, i8490, 'm_SelectOnLeft')
  request.r(i8491[8], i8491[9], 0, i8490, 'm_SelectOnRight')
  return i8490
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8492 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8493 = data
  i8492.m_NormalColor = new pc.Color(i8493[0], i8493[1], i8493[2], i8493[3])
  i8492.m_HighlightedColor = new pc.Color(i8493[4], i8493[5], i8493[6], i8493[7])
  i8492.m_PressedColor = new pc.Color(i8493[8], i8493[9], i8493[10], i8493[11])
  i8492.m_SelectedColor = new pc.Color(i8493[12], i8493[13], i8493[14], i8493[15])
  i8492.m_DisabledColor = new pc.Color(i8493[16], i8493[17], i8493[18], i8493[19])
  i8492.m_ColorMultiplier = i8493[20]
  i8492.m_FadeDuration = i8493[21]
  return i8492
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8494 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8495 = data
  request.r(i8495[0], i8495[1], 0, i8494, 'm_HighlightedSprite')
  request.r(i8495[2], i8495[3], 0, i8494, 'm_PressedSprite')
  request.r(i8495[4], i8495[5], 0, i8494, 'm_SelectedSprite')
  request.r(i8495[6], i8495[7], 0, i8494, 'm_DisabledSprite')
  return i8494
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8496 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8497 = data
  i8496.m_NormalTrigger = i8497[0]
  i8496.m_HighlightedTrigger = i8497[1]
  i8496.m_PressedTrigger = i8497[2]
  i8496.m_SelectedTrigger = i8497[3]
  i8496.m_DisabledTrigger = i8497[4]
  return i8496
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8498 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8499 = data
  i8498.m_hasFontAssetChanged = !!i8499[0]
  request.r(i8499[1], i8499[2], 0, i8498, 'm_baseMaterial')
  i8498.m_maskOffset = new pc.Vec4( i8499[3], i8499[4], i8499[5], i8499[6] )
  i8498.m_text = i8499[7]
  i8498.m_isRightToLeft = !!i8499[8]
  request.r(i8499[9], i8499[10], 0, i8498, 'm_fontAsset')
  request.r(i8499[11], i8499[12], 0, i8498, 'm_sharedMaterial')
  var i8501 = i8499[13]
  var i8500 = []
  for(var i = 0; i < i8501.length; i += 2) {
  request.r(i8501[i + 0], i8501[i + 1], 2, i8500, '')
  }
  i8498.m_fontSharedMaterials = i8500
  request.r(i8499[14], i8499[15], 0, i8498, 'm_fontMaterial')
  var i8503 = i8499[16]
  var i8502 = []
  for(var i = 0; i < i8503.length; i += 2) {
  request.r(i8503[i + 0], i8503[i + 1], 2, i8502, '')
  }
  i8498.m_fontMaterials = i8502
  i8498.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8499[17], i8499[18], i8499[19], i8499[20])
  i8498.m_fontColor = new pc.Color(i8499[21], i8499[22], i8499[23], i8499[24])
  i8498.m_enableVertexGradient = !!i8499[25]
  i8498.m_colorMode = i8499[26]
  i8498.m_fontColorGradient = request.d('TMPro.VertexGradient', i8499[27], i8498.m_fontColorGradient)
  request.r(i8499[28], i8499[29], 0, i8498, 'm_fontColorGradientPreset')
  request.r(i8499[30], i8499[31], 0, i8498, 'm_spriteAsset')
  i8498.m_tintAllSprites = !!i8499[32]
  request.r(i8499[33], i8499[34], 0, i8498, 'm_StyleSheet')
  i8498.m_TextStyleHashCode = i8499[35]
  i8498.m_overrideHtmlColors = !!i8499[36]
  i8498.m_faceColor = UnityEngine.Color32.ConstructColor(i8499[37], i8499[38], i8499[39], i8499[40])
  i8498.m_fontSize = i8499[41]
  i8498.m_fontSizeBase = i8499[42]
  i8498.m_fontWeight = i8499[43]
  i8498.m_enableAutoSizing = !!i8499[44]
  i8498.m_fontSizeMin = i8499[45]
  i8498.m_fontSizeMax = i8499[46]
  i8498.m_fontStyle = i8499[47]
  i8498.m_HorizontalAlignment = i8499[48]
  i8498.m_VerticalAlignment = i8499[49]
  i8498.m_textAlignment = i8499[50]
  i8498.m_characterSpacing = i8499[51]
  i8498.m_wordSpacing = i8499[52]
  i8498.m_lineSpacing = i8499[53]
  i8498.m_lineSpacingMax = i8499[54]
  i8498.m_paragraphSpacing = i8499[55]
  i8498.m_charWidthMaxAdj = i8499[56]
  i8498.m_enableWordWrapping = !!i8499[57]
  i8498.m_wordWrappingRatios = i8499[58]
  i8498.m_overflowMode = i8499[59]
  request.r(i8499[60], i8499[61], 0, i8498, 'm_linkedTextComponent')
  request.r(i8499[62], i8499[63], 0, i8498, 'parentLinkedComponent')
  i8498.m_enableKerning = !!i8499[64]
  i8498.m_enableExtraPadding = !!i8499[65]
  i8498.checkPaddingRequired = !!i8499[66]
  i8498.m_isRichText = !!i8499[67]
  i8498.m_parseCtrlCharacters = !!i8499[68]
  i8498.m_isOrthographic = !!i8499[69]
  i8498.m_isCullingEnabled = !!i8499[70]
  i8498.m_horizontalMapping = i8499[71]
  i8498.m_verticalMapping = i8499[72]
  i8498.m_uvLineOffset = i8499[73]
  i8498.m_geometrySortingOrder = i8499[74]
  i8498.m_IsTextObjectScaleStatic = !!i8499[75]
  i8498.m_VertexBufferAutoSizeReduction = !!i8499[76]
  i8498.m_useMaxVisibleDescender = !!i8499[77]
  i8498.m_pageToDisplay = i8499[78]
  i8498.m_margin = new pc.Vec4( i8499[79], i8499[80], i8499[81], i8499[82] )
  i8498.m_isUsingLegacyAnimationComponent = !!i8499[83]
  i8498.m_isVolumetricText = !!i8499[84]
  request.r(i8499[85], i8499[86], 0, i8498, 'm_Material')
  i8498.m_Maskable = !!i8499[87]
  i8498.m_Color = new pc.Color(i8499[88], i8499[89], i8499[90], i8499[91])
  i8498.m_RaycastTarget = !!i8499[92]
  i8498.m_RaycastPadding = new pc.Vec4( i8499[93], i8499[94], i8499[95], i8499[96] )
  return i8498
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8504 = root || request.c( 'TMPro.VertexGradient' )
  var i8505 = data
  i8504.topLeft = new pc.Color(i8505[0], i8505[1], i8505[2], i8505[3])
  i8504.topRight = new pc.Color(i8505[4], i8505[5], i8505[6], i8505[7])
  i8504.bottomLeft = new pc.Color(i8505[8], i8505[9], i8505[10], i8505[11])
  i8504.bottomRight = new pc.Color(i8505[12], i8505[13], i8505[14], i8505[15])
  return i8504
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i8506 = root || request.c( 'JumpHandler' )
  var i8507 = data
  request.r(i8507[0], i8507[1], 0, i8506, '_landJump')
  request.r(i8507[2], i8507[3], 0, i8506, '_secondLandJump')
  request.r(i8507[4], i8507[5], 0, i8506, '_spawnPoint')
  request.r(i8507[6], i8507[7], 0, i8506, '_enemy')
  request.r(i8507[8], i8507[9], 0, i8506, '_finalPoint')
  return i8506
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i8508 = root || request.c( 'AnimationHandler' )
  var i8509 = data
  request.r(i8509[0], i8509[1], 0, i8508, '_jumpHandler')
  return i8508
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i8510 = root || request.c( 'EffectHandler' )
  var i8511 = data
  request.r(i8511[0], i8511[1], 0, i8510, '_jumpHandler')
  request.r(i8511[2], i8511[3], 0, i8510, '_canvas')
  request.r(i8511[4], i8511[5], 0, i8510, '_jumpSmoke')
  request.r(i8511[6], i8511[7], 0, i8510, '_light')
  request.r(i8511[8], i8511[9], 0, i8510, '_smoke')
  request.r(i8511[10], i8511[11], 0, i8510, '_enemyPool')
  request.r(i8511[12], i8511[13], 0, i8510, '_specialEnemy')
  return i8510
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i8512 = root || request.c( 'StartCamera' )
  var i8513 = data
  request.r(i8513[0], i8513[1], 0, i8512, '_startCamera')
  request.r(i8513[2], i8513[3], 0, i8512, '_path')
  request.r(i8513[4], i8513[5], 0, i8512, '_player')
  request.r(i8513[6], i8513[7], 0, i8512, '_canvas')
  return i8512
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i8514 = root || request.c( 'ResolutionHandler' )
  var i8515 = data
  request.r(i8515[0], i8515[1], 0, i8514, '_secondCamera')
  request.r(i8515[2], i8515[3], 0, i8514, '_fourthCamera')
  request.r(i8515[4], i8515[5], 0, i8514, '_fifthCamera')
  return i8514
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i8516 = root || request.c( 'CameraHandler' )
  var i8517 = data
  request.r(i8517[0], i8517[1], 0, i8516, '_jumpHandler')
  request.r(i8517[2], i8517[3], 0, i8516, '_firstCamera')
  request.r(i8517[4], i8517[5], 0, i8516, '_secondCamera')
  request.r(i8517[6], i8517[7], 0, i8516, '_thirdCamera')
  request.r(i8517[8], i8517[9], 0, i8516, '_fourthCamera')
  request.r(i8517[10], i8517[11], 0, i8516, '_fifthCamera')
  return i8516
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i8518 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i8519 = data
  request.r(i8519[0], i8519[1], 0, i8518, 'm_Path')
  i8518.m_PathPosition = i8519[2]
  i8518.m_PositionUnits = i8519[3]
  i8518.m_PathOffset = new pc.Vec3( i8519[4], i8519[5], i8519[6] )
  i8518.m_XDamping = i8519[7]
  i8518.m_YDamping = i8519[8]
  i8518.m_ZDamping = i8519[9]
  i8518.m_CameraUp = i8519[10]
  i8518.m_PitchDamping = i8519[11]
  i8518.m_YawDamping = i8519[12]
  i8518.m_RollDamping = i8519[13]
  i8518.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i8519[14], i8518.m_AutoDolly)
  return i8518
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i8520 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i8521 = data
  i8520.m_Enabled = !!i8521[0]
  i8520.m_PositionOffset = i8521[1]
  i8520.m_SearchRadius = i8521[2]
  i8520.m_SearchResolution = i8521[3]
  return i8520
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i8522 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i8523 = data
  i8522.m_Looped = !!i8523[0]
  var i8525 = i8523[1]
  var i8524 = []
  for(var i = 0; i < i8525.length; i += 1) {
    i8524.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i8525[i + 0]) );
  }
  i8522.m_Waypoints = i8524
  i8522.m_Resolution = i8523[2]
  i8522.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i8523[3], i8522.m_Appearance)
  return i8522
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i8528 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i8529 = data
  i8528.position = new pc.Vec3( i8529[0], i8529[1], i8529[2] )
  i8528.roll = i8529[3]
  return i8528
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i8530 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i8531 = data
  i8530.pathColor = new pc.Color(i8531[0], i8531[1], i8531[2], i8531[3])
  i8530.inactivePathColor = new pc.Color(i8531[4], i8531[5], i8531[6], i8531[7])
  i8530.width = i8531[8]
  return i8530
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i8532 = root || request.c( 'UIHandler' )
  var i8533 = data
  request.r(i8533[0], i8533[1], 0, i8532, '_jumpHandler')
  request.r(i8533[2], i8533[3], 0, i8532, '_powerButton')
  request.r(i8533[4], i8533[5], 0, i8532, '_cTAButton')
  request.r(i8533[6], i8533[7], 0, i8532, '_fade')
  request.r(i8533[8], i8533[9], 0, i8532, '_finalPanel')
  return i8532
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i8534 = root || request.c( 'EnemyPool' )
  var i8535 = data
  var i8537 = i8535[0]
  var i8536 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i8537.length; i += 2) {
  request.r(i8537[i + 0], i8537[i + 1], 1, i8536, '')
  }
  i8534._enemies = i8536
  return i8534
}

Deserializers["Stalker"] = function (request, data, root) {
  var i8540 = root || request.c( 'Stalker' )
  var i8541 = data
  request.r(i8541[0], i8541[1], 0, i8540, '_target')
  return i8540
}

Deserializers["Enemy"] = function (request, data, root) {
  var i8542 = root || request.c( 'Enemy' )
  var i8543 = data
  return i8542
}

Deserializers["ScenarioFour.Girl"] = function (request, data, root) {
  var i8544 = root || request.c( 'ScenarioFour.Girl' )
  var i8545 = data
  request.r(i8545[0], i8545[1], 0, i8544, '_path')
  request.r(i8545[2], i8545[3], 0, i8544, '_animatedModel')
  request.r(i8545[4], i8545[5], 0, i8544, '_model')
  request.r(i8545[6], i8545[7], 0, i8544, '_bulletTemplate')
  request.r(i8545[8], i8545[9], 0, i8544, '_shootPoint')
  return i8544
}

Deserializers["ScenarioFour.AnimatedModel"] = function (request, data, root) {
  var i8546 = root || request.c( 'ScenarioFour.AnimatedModel' )
  var i8547 = data
  return i8546
}

Deserializers["ScenarioFour.UISwitcher"] = function (request, data, root) {
  var i8548 = root || request.c( 'ScenarioFour.UISwitcher' )
  var i8549 = data
  request.r(i8549[0], i8549[1], 0, i8548, '_powerButton')
  request.r(i8549[2], i8549[3], 0, i8548, '_attackButton')
  request.r(i8549[4], i8549[5], 0, i8548, '_playButton')
  request.r(i8549[6], i8549[7], 0, i8548, '_finalPanel')
  return i8548
}

Deserializers["ScenarioFour.PulseTransform"] = function (request, data, root) {
  var i8550 = root || request.c( 'ScenarioFour.PulseTransform' )
  var i8551 = data
  return i8550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8553 = data
  request.r(i8553[0], i8553[1], 0, i8552, 'm_FirstSelected')
  i8552.m_sendNavigationEvents = !!i8553[2]
  i8552.m_DragThreshold = i8553[3]
  return i8552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8555 = data
  i8554.m_HorizontalAxis = i8555[0]
  i8554.m_VerticalAxis = i8555[1]
  i8554.m_SubmitButton = i8555[2]
  i8554.m_CancelButton = i8555[3]
  i8554.m_InputActionsPerSecond = i8555[4]
  i8554.m_RepeatDelay = i8555[5]
  i8554.m_ForceModuleActive = !!i8555[6]
  return i8554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8557 = data
  i8556.ambientIntensity = i8557[0]
  i8556.reflectionIntensity = i8557[1]
  i8556.ambientMode = i8557[2]
  i8556.ambientLight = new pc.Color(i8557[3], i8557[4], i8557[5], i8557[6])
  i8556.ambientSkyColor = new pc.Color(i8557[7], i8557[8], i8557[9], i8557[10])
  i8556.ambientGroundColor = new pc.Color(i8557[11], i8557[12], i8557[13], i8557[14])
  i8556.ambientEquatorColor = new pc.Color(i8557[15], i8557[16], i8557[17], i8557[18])
  i8556.fogColor = new pc.Color(i8557[19], i8557[20], i8557[21], i8557[22])
  i8556.fogEndDistance = i8557[23]
  i8556.fogStartDistance = i8557[24]
  i8556.fogDensity = i8557[25]
  i8556.fog = !!i8557[26]
  request.r(i8557[27], i8557[28], 0, i8556, 'skybox')
  i8556.fogMode = i8557[29]
  var i8559 = i8557[30]
  var i8558 = []
  for(var i = 0; i < i8559.length; i += 1) {
    i8558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8559[i + 0]) );
  }
  i8556.lightmaps = i8558
  i8556.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8557[31], i8556.lightProbes)
  i8556.lightmapsMode = i8557[32]
  i8556.environmentLightingMode = i8557[33]
  i8556.ambientProbe = new pc.SphericalHarmonicsL2(i8557[34])
  i8556.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8557[35])
  i8556.useReferenceAmbientProbe = !!i8557[36]
  request.r(i8557[37], i8557[38], 0, i8556, 'customReflection')
  request.r(i8557[39], i8557[40], 0, i8556, 'defaultReflection')
  i8556.defaultReflectionMode = i8557[41]
  i8556.defaultReflectionResolution = i8557[42]
  i8556.sunLightObjectId = i8557[43]
  i8556.pixelLightCount = i8557[44]
  i8556.defaultReflectionHDR = !!i8557[45]
  i8556.hasLightDataAsset = !!i8557[46]
  i8556.hasManualGenerate = !!i8557[47]
  return i8556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8563 = data
  request.r(i8563[0], i8563[1], 0, i8562, 'lightmapColor')
  request.r(i8563[2], i8563[3], 0, i8562, 'lightmapDirection')
  return i8562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8564 = root || new UnityEngine.LightProbes()
  var i8565 = data
  return i8564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8573 = data
  var i8575 = i8573[0]
  var i8574 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i8575.length; i += 1) {
    i8574.add(i8575[i + 0]);
  }
  i8572.invalidShaderVariants = i8574
  i8572.name = i8573[1]
  i8572.guid = i8573[2]
  var i8577 = i8573[3]
  var i8576 = []
  for(var i = 0; i < i8577.length; i += 1) {
    i8576.push( i8577[i + 0] );
  }
  i8572.shaderDefinedKeywords = i8576
  var i8579 = i8573[4]
  var i8578 = []
  for(var i = 0; i < i8579.length; i += 1) {
    i8578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8579[i + 0]) );
  }
  i8572.passes = i8578
  var i8581 = i8573[5]
  var i8580 = []
  for(var i = 0; i < i8581.length; i += 1) {
    i8580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8581[i + 0]) );
  }
  i8572.usePasses = i8580
  var i8583 = i8573[6]
  var i8582 = []
  for(var i = 0; i < i8583.length; i += 1) {
    i8582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8583[i + 0]) );
  }
  i8572.defaultParameterValues = i8582
  request.r(i8573[7], i8573[8], 0, i8572, 'unityFallbackShader')
  i8572.readDepth = !!i8573[9]
  i8572.isCreatedByShaderGraph = !!i8573[10]
  return i8572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8588 = root || new pc.UnityShaderPass()
  var i8589 = data
  i8588.id = i8589[0]
  i8588.subShaderIndex = i8589[1]
  i8588.name = i8589[2]
  i8588.passType = i8589[3]
  i8588.usePass = !!i8589[4]
  i8588.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[5], i8588.zTest)
  i8588.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[6], i8588.zWrite)
  i8588.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[7], i8588.culling)
  i8588.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8589[8], i8588.blending)
  i8588.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8589[9], i8588.alphaBlending)
  i8588.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[10], i8588.colorWriteMask)
  i8588.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[11], i8588.offsetUnits)
  i8588.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[12], i8588.offsetFactor)
  i8588.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[13], i8588.stencilRef)
  i8588.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[14], i8588.stencilReadMask)
  i8588.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8589[15], i8588.stencilWriteMask)
  i8588.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8589[16], i8588.stencilOp)
  i8588.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8589[17], i8588.stencilOpFront)
  i8588.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8589[18], i8588.stencilOpBack)
  var i8591 = i8589[19]
  var i8590 = []
  for(var i = 0; i < i8591.length; i += 1) {
    i8590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8591[i + 0]) );
  }
  i8588.tags = i8590
  var i8593 = i8589[20]
  var i8592 = []
  for(var i = 0; i < i8593.length; i += 1) {
    i8592.push( i8593[i + 0] );
  }
  i8588.passDefinedKeywords = i8592
  var i8595 = i8589[21]
  var i8594 = []
  for(var i = 0; i < i8595.length; i += 1) {
    i8594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8595[i + 0]) );
  }
  i8588.variants = i8594
  var i8597 = i8589[22]
  var i8596 = []
  for(var i = 0; i < i8597.length; i += 1) {
    i8596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8597[i + 0]) );
  }
  i8588.excludedVariants = i8596
  i8588.hasDepthReader = !!i8589[23]
  return i8588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8599 = data
  i8598.val = i8599[0]
  i8598.name = i8599[1]
  return i8598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8601 = data
  i8600.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8601[0], i8600.src)
  i8600.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8601[1], i8600.dst)
  i8600.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8601[2], i8600.op)
  return i8600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8603 = data
  i8602.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8603[0], i8602.pass)
  i8602.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8603[1], i8602.fail)
  i8602.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8603[2], i8602.zFail)
  i8602.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8603[3], i8602.comp)
  return i8602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8607 = data
  i8606.name = i8607[0]
  i8606.value = i8607[1]
  return i8606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8611 = data
  i8610.passId = i8611[0]
  i8610.subShaderIndex = i8611[1]
  var i8613 = i8611[2]
  var i8612 = []
  for(var i = 0; i < i8613.length; i += 1) {
    i8612.push( i8613[i + 0] );
  }
  i8610.keywords = i8612
  i8610.vertexProgram = i8611[3]
  i8610.fragmentProgram = i8611[4]
  i8610.readDepth = !!i8611[5]
  return i8610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8617 = data
  request.r(i8617[0], i8617[1], 0, i8616, 'shader')
  i8616.pass = i8617[2]
  return i8616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8621 = data
  i8620.name = i8621[0]
  i8620.type = i8621[1]
  i8620.value = new pc.Vec4( i8621[2], i8621[3], i8621[4], i8621[5] )
  i8620.textureValue = i8621[6]
  return i8620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8623 = data
  i8622.name = i8623[0]
  request.r(i8623[1], i8623[2], 0, i8622, 'texture')
  i8622.aabb = i8623[3]
  i8622.vertices = i8623[4]
  i8622.triangles = i8623[5]
  i8622.textureRect = UnityEngine.Rect.MinMaxRect(i8623[6], i8623[7], i8623[8], i8623[9])
  i8622.packedRect = UnityEngine.Rect.MinMaxRect(i8623[10], i8623[11], i8623[12], i8623[13])
  i8622.border = new pc.Vec4( i8623[14], i8623[15], i8623[16], i8623[17] )
  i8622.transparency = i8623[18]
  i8622.bounds = i8623[19]
  i8622.pixelsPerUnit = i8623[20]
  i8622.textureWidth = i8623[21]
  i8622.textureHeight = i8623[22]
  i8622.nativeSize = new pc.Vec2( i8623[23], i8623[24] )
  i8622.pivot = new pc.Vec2( i8623[25], i8623[26] )
  i8622.textureRectOffset = new pc.Vec2( i8623[27], i8623[28] )
  return i8622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8625 = data
  i8624.name = i8625[0]
  return i8624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8627 = data
  i8626.name = i8627[0]
  i8626.wrapMode = i8627[1]
  i8626.isLooping = !!i8627[2]
  i8626.length = i8627[3]
  var i8629 = i8627[4]
  var i8628 = []
  for(var i = 0; i < i8629.length; i += 1) {
    i8628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8629[i + 0]) );
  }
  i8626.curves = i8628
  var i8631 = i8627[5]
  var i8630 = []
  for(var i = 0; i < i8631.length; i += 1) {
    i8630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8631[i + 0]) );
  }
  i8626.events = i8630
  i8626.halfPrecision = !!i8627[6]
  return i8626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8635 = data
  i8634.path = i8635[0]
  i8634.componentType = i8635[1]
  i8634.property = i8635[2]
  i8634.keys = i8635[3]
  var i8637 = i8635[4]
  var i8636 = []
  for(var i = 0; i < i8637.length; i += 1) {
    i8636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8637[i + 0]) );
  }
  i8634.objectReferenceKeys = i8636
  return i8634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8641 = data
  i8640.time = i8641[0]
  request.r(i8641[1], i8641[2], 0, i8640, 'value')
  return i8640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8645 = data
  i8644.functionName = i8645[0]
  i8644.floatParameter = i8645[1]
  i8644.intParameter = i8645[2]
  i8644.stringParameter = i8645[3]
  request.r(i8645[4], i8645[5], 0, i8644, 'objectReferenceParameter')
  i8644.time = i8645[6]
  return i8644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8647 = data
  i8646.name = i8647[0]
  var i8649 = i8647[1]
  var i8648 = []
  for(var i = 0; i < i8649.length; i += 1) {
    i8648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8649[i + 0]) );
  }
  i8646.states = i8648
  var i8651 = i8647[2]
  var i8650 = []
  for(var i = 0; i < i8651.length; i += 1) {
    i8650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8651[i + 0]) );
  }
  i8646.layers = i8650
  var i8653 = i8647[3]
  var i8652 = []
  for(var i = 0; i < i8653.length; i += 1) {
    i8652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8653[i + 0]) );
  }
  i8646.parameters = i8652
  var i8655 = i8647[4]
  var i8654 = []
  for(var i = 0; i < i8655.length; i += 1) {
    i8654.push( i8655[i + 0] );
  }
  i8646.animationClips = i8654
  i8646.HasSubStateMachines = !!i8647[5]
  return i8646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8659 = data
  i8658.cycleOffset = i8659[0]
  i8658.cycleOffsetParameter = i8659[1]
  i8658.cycleOffsetParameterActive = !!i8659[2]
  i8658.mirror = !!i8659[3]
  i8658.mirrorParameter = i8659[4]
  i8658.mirrorParameterActive = !!i8659[5]
  i8658.motionId = i8659[6]
  i8658.nameHash = i8659[7]
  i8658.fullPathHash = i8659[8]
  i8658.speed = i8659[9]
  i8658.speedParameter = i8659[10]
  i8658.speedParameterActive = !!i8659[11]
  i8658.tag = i8659[12]
  i8658.name = i8659[13]
  i8658.writeDefaultValues = !!i8659[14]
  var i8661 = i8659[15]
  var i8660 = []
  for(var i = 0; i < i8661.length; i += 1) {
    i8660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8661[i + 0]) );
  }
  i8658.transitions = i8660
  var i8663 = i8659[16]
  var i8662 = []
  for(var i = 0; i < i8663.length; i += 2) {
  request.r(i8663[i + 0], i8663[i + 1], 2, i8662, '')
  }
  i8658.behaviours = i8662
  return i8658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8667 = data
  i8666.fullPath = i8667[0]
  i8666.canTransitionToSelf = !!i8667[1]
  i8666.duration = i8667[2]
  i8666.exitTime = i8667[3]
  i8666.hasExitTime = !!i8667[4]
  i8666.hasFixedDuration = !!i8667[5]
  i8666.interruptionSource = i8667[6]
  i8666.offset = i8667[7]
  i8666.orderedInterruption = !!i8667[8]
  i8666.destinationStateNameHash = i8667[9]
  i8666.destinationStateMachineId = i8667[10]
  i8666.isExit = !!i8667[11]
  i8666.mute = !!i8667[12]
  i8666.solo = !!i8667[13]
  var i8669 = i8667[14]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8669[i + 0]) );
  }
  i8666.conditions = i8668
  return i8666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8675 = data
  i8674.blendingMode = i8675[0]
  i8674.defaultWeight = i8675[1]
  i8674.name = i8675[2]
  i8674.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8675[3], i8674.stateMachine)
  return i8674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8677 = data
  i8676.id = i8677[0]
  i8676.defaultStateNameHash = i8677[1]
  var i8679 = i8677[2]
  var i8678 = []
  for(var i = 0; i < i8679.length; i += 1) {
    i8678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8679[i + 0]) );
  }
  i8676.entryTransitions = i8678
  var i8681 = i8677[3]
  var i8680 = []
  for(var i = 0; i < i8681.length; i += 1) {
    i8680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8681[i + 0]) );
  }
  i8676.anyStateTransitions = i8680
  return i8676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8685 = data
  i8684.destinationStateNameHash = i8685[0]
  i8684.destinationStateMachineId = i8685[1]
  i8684.isExit = !!i8685[2]
  i8684.mute = !!i8685[3]
  i8684.solo = !!i8685[4]
  var i8687 = i8685[5]
  var i8686 = []
  for(var i = 0; i < i8687.length; i += 1) {
    i8686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8687[i + 0]) );
  }
  i8684.conditions = i8686
  return i8684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8691 = data
  i8690.defaultBool = !!i8691[0]
  i8690.defaultFloat = i8691[1]
  i8690.defaultInt = i8691[2]
  i8690.name = i8691[3]
  i8690.nameHash = i8691[4]
  i8690.type = i8691[5]
  return i8690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8695 = data
  i8694.mode = i8695[0]
  i8694.parameter = i8695[1]
  i8694.threshold = i8695[2]
  return i8694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8697 = data
  i8696.name = i8697[0]
  i8696.bytes64 = i8697[1]
  i8696.data = i8697[2]
  return i8696
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8698 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8699 = data
  i8698.hashCode = i8699[0]
  request.r(i8699[1], i8699[2], 0, i8698, 'material')
  i8698.materialHashCode = i8699[3]
  request.r(i8699[4], i8699[5], 0, i8698, 'atlas')
  i8698.normalStyle = i8699[6]
  i8698.normalSpacingOffset = i8699[7]
  i8698.boldStyle = i8699[8]
  i8698.boldSpacing = i8699[9]
  i8698.italicStyle = i8699[10]
  i8698.tabSize = i8699[11]
  i8698.m_Version = i8699[12]
  i8698.m_SourceFontFileGUID = i8699[13]
  request.r(i8699[14], i8699[15], 0, i8698, 'm_SourceFontFile_EditorRef')
  request.r(i8699[16], i8699[17], 0, i8698, 'm_SourceFontFile')
  i8698.m_AtlasPopulationMode = i8699[18]
  i8698.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8699[19], i8698.m_FaceInfo)
  var i8701 = i8699[20]
  var i8700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8701.length; i += 1) {
    i8700.add(request.d('UnityEngine.TextCore.Glyph', i8701[i + 0]));
  }
  i8698.m_GlyphTable = i8700
  var i8703 = i8699[21]
  var i8702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8703.length; i += 1) {
    i8702.add(request.d('TMPro.TMP_Character', i8703[i + 0]));
  }
  i8698.m_CharacterTable = i8702
  var i8705 = i8699[22]
  var i8704 = []
  for(var i = 0; i < i8705.length; i += 2) {
  request.r(i8705[i + 0], i8705[i + 1], 2, i8704, '')
  }
  i8698.m_AtlasTextures = i8704
  i8698.m_AtlasTextureIndex = i8699[23]
  i8698.m_IsMultiAtlasTexturesEnabled = !!i8699[24]
  i8698.m_ClearDynamicDataOnBuild = !!i8699[25]
  var i8707 = i8699[26]
  var i8706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8707.length; i += 1) {
    i8706.add(request.d('UnityEngine.TextCore.GlyphRect', i8707[i + 0]));
  }
  i8698.m_UsedGlyphRects = i8706
  var i8709 = i8699[27]
  var i8708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8709.length; i += 1) {
    i8708.add(request.d('UnityEngine.TextCore.GlyphRect', i8709[i + 0]));
  }
  i8698.m_FreeGlyphRects = i8708
  i8698.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8699[28], i8698.m_fontInfo)
  i8698.m_AtlasWidth = i8699[29]
  i8698.m_AtlasHeight = i8699[30]
  i8698.m_AtlasPadding = i8699[31]
  i8698.m_AtlasRenderMode = i8699[32]
  var i8711 = i8699[33]
  var i8710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8711.length; i += 1) {
    i8710.add(request.d('TMPro.TMP_Glyph', i8711[i + 0]));
  }
  i8698.m_glyphInfoList = i8710
  i8698.m_KerningTable = request.d('TMPro.KerningTable', i8699[34], i8698.m_KerningTable)
  i8698.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8699[35], i8698.m_FontFeatureTable)
  var i8713 = i8699[36]
  var i8712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8713.length; i += 2) {
  request.r(i8713[i + 0], i8713[i + 1], 1, i8712, '')
  }
  i8698.fallbackFontAssets = i8712
  var i8715 = i8699[37]
  var i8714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8715.length; i += 2) {
  request.r(i8715[i + 0], i8715[i + 1], 1, i8714, '')
  }
  i8698.m_FallbackFontAssetTable = i8714
  i8698.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8699[38], i8698.m_CreationSettings)
  var i8717 = i8699[39]
  var i8716 = []
  for(var i = 0; i < i8717.length; i += 1) {
    i8716.push( request.d('TMPro.TMP_FontWeightPair', i8717[i + 0]) );
  }
  i8698.m_FontWeightTable = i8716
  var i8719 = i8699[40]
  var i8718 = []
  for(var i = 0; i < i8719.length; i += 1) {
    i8718.push( request.d('TMPro.TMP_FontWeightPair', i8719[i + 0]) );
  }
  i8698.fontWeights = i8718
  return i8698
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8720 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8721 = data
  i8720.m_FaceIndex = i8721[0]
  i8720.m_FamilyName = i8721[1]
  i8720.m_StyleName = i8721[2]
  i8720.m_PointSize = i8721[3]
  i8720.m_Scale = i8721[4]
  i8720.m_LineHeight = i8721[5]
  i8720.m_AscentLine = i8721[6]
  i8720.m_CapLine = i8721[7]
  i8720.m_MeanLine = i8721[8]
  i8720.m_Baseline = i8721[9]
  i8720.m_DescentLine = i8721[10]
  i8720.m_SuperscriptOffset = i8721[11]
  i8720.m_SuperscriptSize = i8721[12]
  i8720.m_SubscriptOffset = i8721[13]
  i8720.m_SubscriptSize = i8721[14]
  i8720.m_UnderlineOffset = i8721[15]
  i8720.m_UnderlineThickness = i8721[16]
  i8720.m_StrikethroughOffset = i8721[17]
  i8720.m_StrikethroughThickness = i8721[18]
  i8720.m_TabWidth = i8721[19]
  return i8720
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8724 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8725 = data
  i8724.m_Index = i8725[0]
  i8724.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8725[1], i8724.m_Metrics)
  i8724.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8725[2], i8724.m_GlyphRect)
  i8724.m_Scale = i8725[3]
  i8724.m_AtlasIndex = i8725[4]
  return i8724
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8726 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8727 = data
  i8726.m_Width = i8727[0]
  i8726.m_Height = i8727[1]
  i8726.m_HorizontalBearingX = i8727[2]
  i8726.m_HorizontalBearingY = i8727[3]
  i8726.m_HorizontalAdvance = i8727[4]
  return i8726
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8728 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8729 = data
  i8728.m_X = i8729[0]
  i8728.m_Y = i8729[1]
  i8728.m_Width = i8729[2]
  i8728.m_Height = i8729[3]
  return i8728
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8732 = root || request.c( 'TMPro.TMP_Character' )
  var i8733 = data
  i8732.m_ElementType = i8733[0]
  i8732.m_Unicode = i8733[1]
  i8732.m_GlyphIndex = i8733[2]
  i8732.m_Scale = i8733[3]
  return i8732
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8738 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8739 = data
  i8738.Name = i8739[0]
  i8738.PointSize = i8739[1]
  i8738.Scale = i8739[2]
  i8738.CharacterCount = i8739[3]
  i8738.LineHeight = i8739[4]
  i8738.Baseline = i8739[5]
  i8738.Ascender = i8739[6]
  i8738.CapHeight = i8739[7]
  i8738.Descender = i8739[8]
  i8738.CenterLine = i8739[9]
  i8738.SuperscriptOffset = i8739[10]
  i8738.SubscriptOffset = i8739[11]
  i8738.SubSize = i8739[12]
  i8738.Underline = i8739[13]
  i8738.UnderlineThickness = i8739[14]
  i8738.strikethrough = i8739[15]
  i8738.strikethroughThickness = i8739[16]
  i8738.TabWidth = i8739[17]
  i8738.Padding = i8739[18]
  i8738.AtlasWidth = i8739[19]
  i8738.AtlasHeight = i8739[20]
  return i8738
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8742 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8743 = data
  i8742.id = i8743[0]
  i8742.x = i8743[1]
  i8742.y = i8743[2]
  i8742.width = i8743[3]
  i8742.height = i8743[4]
  i8742.xOffset = i8743[5]
  i8742.yOffset = i8743[6]
  i8742.xAdvance = i8743[7]
  i8742.scale = i8743[8]
  return i8742
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8744 = root || request.c( 'TMPro.KerningTable' )
  var i8745 = data
  var i8747 = i8745[0]
  var i8746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8747.length; i += 1) {
    i8746.add(request.d('TMPro.KerningPair', i8747[i + 0]));
  }
  i8744.kerningPairs = i8746
  return i8744
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8750 = root || request.c( 'TMPro.KerningPair' )
  var i8751 = data
  i8750.xOffset = i8751[0]
  i8750.m_FirstGlyph = i8751[1]
  i8750.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8751[2], i8750.m_FirstGlyphAdjustments)
  i8750.m_SecondGlyph = i8751[3]
  i8750.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8751[4], i8750.m_SecondGlyphAdjustments)
  i8750.m_IgnoreSpacingAdjustments = !!i8751[5]
  return i8750
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8752 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8753 = data
  var i8755 = i8753[0]
  var i8754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8755.length; i += 1) {
    i8754.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8755[i + 0]));
  }
  i8752.m_GlyphPairAdjustmentRecords = i8754
  return i8752
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8758 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8759 = data
  i8758.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8759[0], i8758.m_FirstAdjustmentRecord)
  i8758.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8759[1], i8758.m_SecondAdjustmentRecord)
  i8758.m_FeatureLookupFlags = i8759[2]
  return i8758
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8762 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8763 = data
  i8762.sourceFontFileName = i8763[0]
  i8762.sourceFontFileGUID = i8763[1]
  i8762.pointSizeSamplingMode = i8763[2]
  i8762.pointSize = i8763[3]
  i8762.padding = i8763[4]
  i8762.packingMode = i8763[5]
  i8762.atlasWidth = i8763[6]
  i8762.atlasHeight = i8763[7]
  i8762.characterSetSelectionMode = i8763[8]
  i8762.characterSequence = i8763[9]
  i8762.referencedFontAssetGUID = i8763[10]
  i8762.referencedTextAssetGUID = i8763[11]
  i8762.fontStyle = i8763[12]
  i8762.fontStyleModifier = i8763[13]
  i8762.renderMode = i8763[14]
  i8762.includeFontFeatures = !!i8763[15]
  return i8762
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8766 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8767 = data
  request.r(i8767[0], i8767[1], 0, i8766, 'regularTypeface')
  request.r(i8767[2], i8767[3], 0, i8766, 'italicTypeface')
  return i8766
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i8768 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i8769 = data
  var i8771 = i8769[0]
  var i8770 = []
  for(var i = 0; i < i8771.length; i += 1) {
    i8770.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i8771[i + 0]) );
  }
  i8768.m_CustomBlends = i8770
  return i8768
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i8774 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i8775 = data
  i8774.m_From = i8775[0]
  i8774.m_To = i8775[1]
  i8774.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i8775[2], i8774.m_Blend)
  return i8774
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i8776 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i8777 = data
  var i8779 = i8777[0]
  var i8778 = []
  for(var i = 0; i < i8779.length; i += 1) {
    i8778.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i8779[i + 0]) );
  }
  i8776.PositionNoise = i8778
  var i8781 = i8777[1]
  var i8780 = []
  for(var i = 0; i < i8781.length; i += 1) {
    i8780.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i8781[i + 0]) );
  }
  i8776.OrientationNoise = i8780
  return i8776
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i8784 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i8785 = data
  i8784.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i8785[0], i8784.X)
  i8784.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i8785[1], i8784.Y)
  i8784.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i8785[2], i8784.Z)
  return i8784
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i8786 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i8787 = data
  i8786.Frequency = i8787[0]
  i8786.Amplitude = i8787[1]
  i8786.Constant = !!i8787[2]
  return i8786
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i8788 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i8789 = data
  var i8791 = i8789[0]
  var i8790 = []
  for(var i = 0; i < i8791.length; i += 1) {
    i8790.push( request.d('ScenarioFour.CameraFov', i8791[i + 0]) );
  }
  i8788._fovList = i8790
  return i8788
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i8794 = root || request.c( 'ScenarioFour.CameraFov' )
  var i8795 = data
  i8794._cameraType = i8795[0]
  i8794._landscape = i8795[1]
  i8794._portrait = i8795[2]
  return i8794
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8797 = data
  i8796.useSafeMode = !!i8797[0]
  i8796.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8797[1], i8796.safeModeOptions)
  i8796.timeScale = i8797[2]
  i8796.useSmoothDeltaTime = !!i8797[3]
  i8796.maxSmoothUnscaledTime = i8797[4]
  i8796.rewindCallbackMode = i8797[5]
  i8796.showUnityEditorReport = !!i8797[6]
  i8796.logBehaviour = i8797[7]
  i8796.drawGizmos = !!i8797[8]
  i8796.defaultRecyclable = !!i8797[9]
  i8796.defaultAutoPlay = i8797[10]
  i8796.defaultUpdateType = i8797[11]
  i8796.defaultTimeScaleIndependent = !!i8797[12]
  i8796.defaultEaseType = i8797[13]
  i8796.defaultEaseOvershootOrAmplitude = i8797[14]
  i8796.defaultEasePeriod = i8797[15]
  i8796.defaultAutoKill = !!i8797[16]
  i8796.defaultLoopType = i8797[17]
  i8796.debugMode = !!i8797[18]
  i8796.debugStoreTargetId = !!i8797[19]
  i8796.showPreviewPanel = !!i8797[20]
  i8796.storeSettingsLocation = i8797[21]
  i8796.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8797[22], i8796.modules)
  i8796.createASMDEF = !!i8797[23]
  i8796.showPlayingTweens = !!i8797[24]
  i8796.showPausedTweens = !!i8797[25]
  return i8796
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8799 = data
  i8798.logBehaviour = i8799[0]
  i8798.nestedTweenFailureBehaviour = i8799[1]
  return i8798
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8800 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8801 = data
  i8800.showPanel = !!i8801[0]
  i8800.audioEnabled = !!i8801[1]
  i8800.physicsEnabled = !!i8801[2]
  i8800.physics2DEnabled = !!i8801[3]
  i8800.spriteEnabled = !!i8801[4]
  i8800.uiEnabled = !!i8801[5]
  i8800.textMeshProEnabled = !!i8801[6]
  i8800.tk2DEnabled = !!i8801[7]
  i8800.deAudioEnabled = !!i8801[8]
  i8800.deUnityExtendedEnabled = !!i8801[9]
  i8800.epoOutlineEnabled = !!i8801[10]
  return i8800
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8802 = root || request.c( 'TMPro.TMP_Settings' )
  var i8803 = data
  i8802.m_enableWordWrapping = !!i8803[0]
  i8802.m_enableKerning = !!i8803[1]
  i8802.m_enableExtraPadding = !!i8803[2]
  i8802.m_enableTintAllSprites = !!i8803[3]
  i8802.m_enableParseEscapeCharacters = !!i8803[4]
  i8802.m_EnableRaycastTarget = !!i8803[5]
  i8802.m_GetFontFeaturesAtRuntime = !!i8803[6]
  i8802.m_missingGlyphCharacter = i8803[7]
  i8802.m_warningsDisabled = !!i8803[8]
  request.r(i8803[9], i8803[10], 0, i8802, 'm_defaultFontAsset')
  i8802.m_defaultFontAssetPath = i8803[11]
  i8802.m_defaultFontSize = i8803[12]
  i8802.m_defaultAutoSizeMinRatio = i8803[13]
  i8802.m_defaultAutoSizeMaxRatio = i8803[14]
  i8802.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8803[15], i8803[16] )
  i8802.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8803[17], i8803[18] )
  i8802.m_autoSizeTextContainer = !!i8803[19]
  i8802.m_IsTextObjectScaleStatic = !!i8803[20]
  var i8805 = i8803[21]
  var i8804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8805.length; i += 2) {
  request.r(i8805[i + 0], i8805[i + 1], 1, i8804, '')
  }
  i8802.m_fallbackFontAssets = i8804
  i8802.m_matchMaterialPreset = !!i8803[22]
  request.r(i8803[23], i8803[24], 0, i8802, 'm_defaultSpriteAsset')
  i8802.m_defaultSpriteAssetPath = i8803[25]
  i8802.m_enableEmojiSupport = !!i8803[26]
  i8802.m_MissingCharacterSpriteUnicode = i8803[27]
  i8802.m_defaultColorGradientPresetsPath = i8803[28]
  request.r(i8803[29], i8803[30], 0, i8802, 'm_defaultStyleSheet')
  i8802.m_StyleSheetsResourcePath = i8803[31]
  request.r(i8803[32], i8803[33], 0, i8802, 'm_leadingCharacters')
  request.r(i8803[34], i8803[35], 0, i8802, 'm_followingCharacters')
  i8802.m_UseModernHangulLineBreakingRules = !!i8803[36]
  return i8802
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8806 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8807 = data
  var i8809 = i8807[0]
  var i8808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8809.length; i += 1) {
    i8808.add(request.d('TMPro.TMP_Style', i8809[i + 0]));
  }
  i8806.m_StyleList = i8808
  return i8806
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8812 = root || request.c( 'TMPro.TMP_Style' )
  var i8813 = data
  i8812.m_Name = i8813[0]
  i8812.m_HashCode = i8813[1]
  i8812.m_OpeningDefinition = i8813[2]
  i8812.m_ClosingDefinition = i8813[3]
  i8812.m_OpeningTagArray = i8813[4]
  i8812.m_ClosingTagArray = i8813[5]
  i8812.m_OpeningTagUnicodeArray = i8813[6]
  i8812.m_ClosingTagUnicodeArray = i8813[7]
  return i8812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8815 = data
  var i8817 = i8815[0]
  var i8816 = []
  for(var i = 0; i < i8817.length; i += 1) {
    i8816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8817[i + 0]) );
  }
  i8814.files = i8816
  i8814.componentToPrefabIds = i8815[1]
  return i8814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8821 = data
  i8820.path = i8821[0]
  request.r(i8821[1], i8821[2], 0, i8820, 'unityObject')
  return i8820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8823 = data
  var i8825 = i8823[0]
  var i8824 = []
  for(var i = 0; i < i8825.length; i += 1) {
    i8824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8825[i + 0]) );
  }
  i8822.scriptsExecutionOrder = i8824
  var i8827 = i8823[1]
  var i8826 = []
  for(var i = 0; i < i8827.length; i += 1) {
    i8826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8827[i + 0]) );
  }
  i8822.sortingLayers = i8826
  var i8829 = i8823[2]
  var i8828 = []
  for(var i = 0; i < i8829.length; i += 1) {
    i8828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8829[i + 0]) );
  }
  i8822.cullingLayers = i8828
  i8822.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8823[3], i8822.timeSettings)
  i8822.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8823[4], i8822.physicsSettings)
  i8822.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8823[5], i8822.physics2DSettings)
  i8822.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8823[6], i8822.qualitySettings)
  i8822.enableRealtimeShadows = !!i8823[7]
  i8822.autoInstantiatePrefabs = !!i8823[8]
  i8822.enableAutoInstancing = !!i8823[9]
  i8822.lightmapEncodingQuality = i8823[10]
  i8822.desiredColorSpace = i8823[11]
  return i8822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8833 = data
  i8832.name = i8833[0]
  i8832.value = i8833[1]
  return i8832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8837 = data
  i8836.id = i8837[0]
  i8836.name = i8837[1]
  i8836.value = i8837[2]
  return i8836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8841 = data
  i8840.id = i8841[0]
  i8840.name = i8841[1]
  return i8840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8843 = data
  i8842.fixedDeltaTime = i8843[0]
  i8842.maximumDeltaTime = i8843[1]
  i8842.timeScale = i8843[2]
  i8842.maximumParticleTimestep = i8843[3]
  return i8842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8845 = data
  i8844.gravity = new pc.Vec3( i8845[0], i8845[1], i8845[2] )
  i8844.defaultSolverIterations = i8845[3]
  i8844.bounceThreshold = i8845[4]
  i8844.autoSyncTransforms = !!i8845[5]
  i8844.autoSimulation = !!i8845[6]
  var i8847 = i8845[7]
  var i8846 = []
  for(var i = 0; i < i8847.length; i += 1) {
    i8846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8847[i + 0]) );
  }
  i8844.collisionMatrix = i8846
  return i8844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8851 = data
  i8850.enabled = !!i8851[0]
  i8850.layerId = i8851[1]
  i8850.otherLayerId = i8851[2]
  return i8850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8853 = data
  request.r(i8853[0], i8853[1], 0, i8852, 'material')
  i8852.gravity = new pc.Vec2( i8853[2], i8853[3] )
  i8852.positionIterations = i8853[4]
  i8852.velocityIterations = i8853[5]
  i8852.velocityThreshold = i8853[6]
  i8852.maxLinearCorrection = i8853[7]
  i8852.maxAngularCorrection = i8853[8]
  i8852.maxTranslationSpeed = i8853[9]
  i8852.maxRotationSpeed = i8853[10]
  i8852.timeToSleep = i8853[11]
  i8852.linearSleepTolerance = i8853[12]
  i8852.angularSleepTolerance = i8853[13]
  i8852.defaultContactOffset = i8853[14]
  i8852.autoSimulation = !!i8853[15]
  i8852.queriesHitTriggers = !!i8853[16]
  i8852.queriesStartInColliders = !!i8853[17]
  i8852.callbacksOnDisable = !!i8853[18]
  i8852.reuseCollisionCallbacks = !!i8853[19]
  i8852.autoSyncTransforms = !!i8853[20]
  var i8855 = i8853[21]
  var i8854 = []
  for(var i = 0; i < i8855.length; i += 1) {
    i8854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8855[i + 0]) );
  }
  i8852.collisionMatrix = i8854
  return i8852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8859 = data
  i8858.enabled = !!i8859[0]
  i8858.layerId = i8859[1]
  i8858.otherLayerId = i8859[2]
  return i8858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8861 = data
  var i8863 = i8861[0]
  var i8862 = []
  for(var i = 0; i < i8863.length; i += 1) {
    i8862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8863[i + 0]) );
  }
  i8860.qualityLevels = i8862
  var i8865 = i8861[1]
  var i8864 = []
  for(var i = 0; i < i8865.length; i += 1) {
    i8864.push( i8865[i + 0] );
  }
  i8860.names = i8864
  i8860.shadows = i8861[2]
  i8860.anisotropicFiltering = i8861[3]
  i8860.antiAliasing = i8861[4]
  i8860.lodBias = i8861[5]
  i8860.shadowCascades = i8861[6]
  i8860.shadowDistance = i8861[7]
  i8860.shadowmaskMode = i8861[8]
  i8860.shadowProjection = i8861[9]
  i8860.shadowResolution = i8861[10]
  i8860.softParticles = !!i8861[11]
  i8860.softVegetation = !!i8861[12]
  i8860.activeColorSpace = i8861[13]
  i8860.desiredColorSpace = i8861[14]
  i8860.masterTextureLimit = i8861[15]
  i8860.maxQueuedFrames = i8861[16]
  i8860.particleRaycastBudget = i8861[17]
  i8860.pixelLightCount = i8861[18]
  i8860.realtimeReflectionProbes = !!i8861[19]
  i8860.shadowCascade2Split = i8861[20]
  i8860.shadowCascade4Split = new pc.Vec3( i8861[21], i8861[22], i8861[23] )
  i8860.streamingMipmapsActive = !!i8861[24]
  i8860.vSyncCount = i8861[25]
  i8860.asyncUploadBufferSize = i8861[26]
  i8860.asyncUploadTimeSlice = i8861[27]
  i8860.billboardsFaceCameraPosition = !!i8861[28]
  i8860.shadowNearPlaneOffset = i8861[29]
  i8860.streamingMipmapsMemoryBudget = i8861[30]
  i8860.maximumLODLevel = i8861[31]
  i8860.streamingMipmapsAddAllCameras = !!i8861[32]
  i8860.streamingMipmapsMaxLevelReduction = i8861[33]
  i8860.streamingMipmapsRenderersPerFrame = i8861[34]
  i8860.resolutionScalingFixedDPIFactor = i8861[35]
  i8860.streamingMipmapsMaxFileIORequests = i8861[36]
  i8860.currentQualityLevel = i8861[37]
  return i8860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8871 = data
  i8870.weight = i8871[0]
  i8870.vertices = i8871[1]
  i8870.normals = i8871[2]
  i8870.tangents = i8871[3]
  return i8870
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8872 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8873 = data
  request.r(i8873[0], i8873[1], 0, i8872, 'm_ObjectArgument')
  i8872.m_ObjectArgumentAssemblyTypeName = i8873[2]
  i8872.m_IntArgument = i8873[3]
  i8872.m_FloatArgument = i8873[4]
  i8872.m_StringArgument = i8873[5]
  i8872.m_BoolArgument = !!i8873[6]
  return i8872
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8874 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8875 = data
  i8874.xPlacement = i8875[0]
  i8874.yPlacement = i8875[1]
  i8874.xAdvance = i8875[2]
  i8874.yAdvance = i8875[3]
  return i8874
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8876 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8877 = data
  i8876.m_GlyphIndex = i8877[0]
  i8876.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8877[1], i8876.m_GlyphValueRecord)
  return i8876
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8878 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8879 = data
  i8878.m_XPlacement = i8879[0]
  i8878.m_YPlacement = i8879[1]
  i8878.m_XAdvance = i8879[2]
  i8878.m_YAdvance = i8879[3]
  return i8878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[18],"84":[30],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[94],"101":[94],"102":[94],"103":[94],"104":[94],"105":[94],"106":[94],"107":[30],"108":[8],"109":[110],"111":[110],"38":[37],"53":[16],"57":[16],"65":[16],"15":[16],"112":[37],"113":[47,37],"114":[8],"115":[47,37],"116":[37],"117":[8,37],"50":[37,47],"118":[37],"119":[37],"120":[37],"41":[38],"45":[47,37],"121":[37],"40":[38],"122":[37],"123":[37],"124":[37],"125":[37],"126":[37],"127":[37],"128":[37],"49":[37],"129":[37],"130":[47,37],"131":[37],"132":[37],"133":[37],"134":[37],"135":[47,37],"136":[37],"137":[68],"138":[68],"69":[68],"139":[68],"140":[30],"141":[30],"142":[30],"143":[144],"145":[30],"146":[46]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ScenarioFour.Path","ScenarioFour.PathPoint","ScenarioFour.Bullet","ScenarioFour.Enemy","ScenarioFour.EnemyAnimatedModel","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","ScenarioFour.Director","ScenarioFour.Cameras","Cinemachine.CinemachineVirtualCamera","ScenarioFour.CameraFovList","CameraFovChanger","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","Cinemachine.CinemachineBasicMultiChannelPerlin","Cinemachine.NoiseSettings","ScenarioFour.Enemies","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","UnityEngine.AudioSource","UnityEngine.AudioClip","SoundHandler","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ChooseHandler","Cinemachine.CinemachineBlenderSettings","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","JumpHandler","AnimationHandler","EffectHandler","UIHandler","EnemyPool","Enemy","StartCamera","Cinemachine.CinemachineSmoothPath","ResolutionHandler","CameraHandler","Cinemachine.CinemachineTrackedDolly","Stalker","ScenarioFour.Girl","ScenarioFour.AnimatedModel","ScenarioFour.UISwitcher","ScenarioFour.PulseTransform","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Rendering.PostProcessing.PostProcessLayer","UnityEngine.Purchasing.IAPButton"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "CRSEDPlayableAd(Repack)";

Deserializers.lunaInitializationTime = "09/23/2022 12:25:20";

Deserializers.lunaDaysRunning = "18.0";

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

Deserializers.buildID = "799b7a07-1f1c-4907-81df-b73920a8d90b";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

