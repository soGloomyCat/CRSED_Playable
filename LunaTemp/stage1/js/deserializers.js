var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointSpring' )
  var i713 = data
  i712.spring = i713[0]
  i712.damper = i713[1]
  i712.targetPosition = i713[2]
  return i712
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointMotor' )
  var i715 = data
  i714.m_TargetVelocity = i715[0]
  i714.m_Force = i715[1]
  i714.m_FreeSpin = i715[2]
  return i714
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointLimits' )
  var i717 = data
  i716.m_Min = i717[0]
  i716.m_Max = i717[1]
  i716.m_Bounciness = i717[2]
  i716.m_BounceMinVelocity = i717[3]
  i716.m_ContactDistance = i717[4]
  i716.minBounce = i717[5]
  i716.maxBounce = i717[6]
  return i716
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointDrive' )
  var i719 = data
  i718.m_PositionSpring = i719[0]
  i718.m_PositionDamper = i719[1]
  i718.m_MaximumForce = i719[2]
  return i718
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i721 = data
  i720.m_Spring = i721[0]
  i720.m_Damper = i721[1]
  return i720
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i723 = data
  i722.m_Limit = i723[0]
  i722.m_Bounciness = i723[1]
  i722.m_ContactDistance = i723[2]
  return i722
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i725 = data
  i724.m_ExtremumSlip = i725[0]
  i724.m_ExtremumValue = i725[1]
  i724.m_AsymptoteSlip = i725[2]
  i724.m_AsymptoteValue = i725[3]
  i724.m_Stiffness = i725[4]
  return i724
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i727 = data
  i726.m_LowerAngle = i727[0]
  i726.m_UpperAngle = i727[1]
  return i726
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i729 = data
  i728.m_MotorSpeed = i729[0]
  i728.m_MaximumMotorTorque = i729[1]
  return i728
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i731 = data
  i730.m_DampingRatio = i731[0]
  i730.m_Frequency = i731[1]
  i730.m_Angle = i731[2]
  return i730
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i733 = data
  i732.m_LowerTranslation = i733[0]
  i732.m_UpperTranslation = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i734 = root || new pc.UnityMaterial()
  var i735 = data
  i734.name = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'shader')
  i734.renderQueue = i735[3]
  i734.enableInstancing = !!i735[4]
  var i737 = i735[5]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i737[i + 0]) );
  }
  i734.floatParameters = i736
  var i739 = i735[6]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i739[i + 0]) );
  }
  i734.colorParameters = i738
  var i741 = i735[7]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i741[i + 0]) );
  }
  i734.vectorParameters = i740
  var i743 = i735[8]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i743[i + 0]) );
  }
  i734.textureParameters = i742
  var i745 = i735[9]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i745[i + 0]) );
  }
  i734.materialFlags = i744
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i749 = data
  i748.name = i749[0]
  i748.value = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = new pc.Color(i753[1], i753[2], i753[3], i753[4])
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i757 = data
  i756.name = i757[0]
  i756.value = new pc.Vec4( i757[1], i757[2], i757[3], i757[4] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i761 = data
  i760.name = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'value')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i765 = data
  i764.name = i765[0]
  i764.enabled = !!i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i767 = data
  i766.name = i767[0]
  i766.width = i767[1]
  i766.height = i767[2]
  i766.mipmapCount = i767[3]
  i766.anisoLevel = i767[4]
  i766.filterMode = i767[5]
  i766.hdr = !!i767[6]
  i766.format = i767[7]
  i766.wrapMode = i767[8]
  i766.alphaIsTransparency = !!i767[9]
  i766.alphaSource = i767[10]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i769 = data
  i768.position = new pc.Vec3( i769[0], i769[1], i769[2] )
  i768.scale = new pc.Vec3( i769[3], i769[4], i769[5] )
  i768.rotation = new pc.Quat(i769[6], i769[7], i769[8], i769[9])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i771 = data
  i770.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i771[0], i770.main)
  i770.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i771[1], i770.colorBySpeed)
  i770.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i771[2], i770.colorOverLifetime)
  i770.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i771[3], i770.emission)
  i770.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i771[4], i770.rotationBySpeed)
  i770.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i771[5], i770.rotationOverLifetime)
  i770.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i771[6], i770.shape)
  i770.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i771[7], i770.sizeBySpeed)
  i770.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i771[8], i770.sizeOverLifetime)
  i770.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i771[9], i770.textureSheetAnimation)
  i770.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i771[10], i770.velocityOverLifetime)
  i770.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i771[11], i770.noise)
  i770.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i771[12], i770.inheritVelocity)
  i770.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i771[13], i770.forceOverLifetime)
  i770.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i771[14], i770.limitVelocityOverLifetime)
  i770.useAutoRandomSeed = !!i771[15]
  i770.randomSeed = i771[16]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemMain()
  var i773 = data
  i772.duration = i773[0]
  i772.loop = !!i773[1]
  i772.prewarm = !!i773[2]
  i772.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.startDelay)
  i772.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.startLifetime)
  i772.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[5], i772.startSpeed)
  i772.startSize3D = !!i773[6]
  i772.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.startSizeX)
  i772.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[8], i772.startSizeY)
  i772.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[9], i772.startSizeZ)
  i772.startRotation3D = !!i773[10]
  i772.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[11], i772.startRotationX)
  i772.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[12], i772.startRotationY)
  i772.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[13], i772.startRotationZ)
  i772.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[14], i772.startColor)
  i772.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[15], i772.gravityModifier)
  i772.simulationSpace = i773[16]
  request.r(i773[17], i773[18], 0, i772, 'customSimulationSpace')
  i772.simulationSpeed = i773[19]
  i772.useUnscaledTime = !!i773[20]
  i772.scalingMode = i773[21]
  i772.playOnAwake = !!i773[22]
  i772.maxParticles = i773[23]
  i772.emitterVelocityMode = i773[24]
  i772.stopAction = i773[25]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i774 = root || new pc.MinMaxCurve()
  var i775 = data
  i774.mode = i775[0]
  i774.curveMin = new pc.AnimationCurve( { keys_flow: i775[1] } )
  i774.curveMax = new pc.AnimationCurve( { keys_flow: i775[2] } )
  i774.curveMultiplier = i775[3]
  i774.constantMin = i775[4]
  i774.constantMax = i775[5]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i776 = root || new pc.MinMaxGradient()
  var i777 = data
  i776.mode = i777[0]
  i776.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i777[1], i776.gradientMin)
  i776.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i777[2], i776.gradientMax)
  i776.colorMin = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.colorMax = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i779 = data
  i778.mode = i779[0]
  var i781 = i779[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i781[i + 0]) );
  }
  i778.colorKeys = i780
  var i783 = i779[2]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i783[i + 0]) );
  }
  i778.alphaKeys = i782
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  i784.range = new pc.Vec2( i785[2], i785[3] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i789 = data
  i788.color = new pc.Color(i789[0], i789[1], i789[2], i789[3])
  i788.time = i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i793 = data
  i792.alpha = i793[0]
  i792.time = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemColorOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i795[1], i794.color)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemEmitter()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.rateOverTime)
  i796.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.rateOverDistance)
  var i799 = i797[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i799[i + 0]) );
  }
  i796.bursts = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemBurst()
  var i803 = data
  i802.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[0], i802.count)
  i802.cycleCount = i803[1]
  i802.minCount = i803[2]
  i802.maxCount = i803[3]
  i802.repeatInterval = i803[4]
  i802.time = i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemRotationBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemRotationOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemShape()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.shapeType = i809[1]
  i808.randomDirectionAmount = i809[2]
  i808.sphericalDirectionAmount = i809[3]
  i808.randomPositionAmount = i809[4]
  i808.alignToDirection = !!i809[5]
  i808.radius = i809[6]
  i808.radiusMode = i809[7]
  i808.radiusSpread = i809[8]
  i808.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.radiusSpeed)
  i808.radiusThickness = i809[10]
  i808.angle = i809[11]
  i808.length = i809[12]
  i808.boxThickness = new pc.Vec3( i809[13], i809[14], i809[15] )
  i808.meshShapeType = i809[16]
  request.r(i809[17], i809[18], 0, i808, 'mesh')
  request.r(i809[19], i809[20], 0, i808, 'meshRenderer')
  request.r(i809[21], i809[22], 0, i808, 'skinnedMeshRenderer')
  i808.useMeshMaterialIndex = !!i809[23]
  i808.meshMaterialIndex = i809[24]
  i808.useMeshColors = !!i809[25]
  i808.normalOffset = i809[26]
  i808.arc = i809[27]
  i808.arcMode = i809[28]
  i808.arcSpread = i809[29]
  i808.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[30], i808.arcSpeed)
  i808.donutRadius = i809[31]
  i808.position = new pc.Vec3( i809[32], i809[33], i809[34] )
  i808.rotation = new pc.Vec3( i809[35], i809[36], i809[37] )
  i808.scale = new pc.Vec3( i809[38], i809[39], i809[40] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemSizeBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  i810.range = new pc.Vec2( i811[5], i811[6] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemSizeOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.animation = i815[2]
  i814.numTilesX = i815[3]
  i814.numTilesY = i815[4]
  i814.useRandomRow = !!i815[5]
  i814.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[6], i814.frameOverTime)
  i814.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.startFrame)
  i814.cycleCount = i815[8]
  i814.rowIndex = i815[9]
  i814.flipU = i815[10]
  i814.flipV = i815[11]
  i814.spriteCount = i815[12]
  var i817 = i815[13]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sprites = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[4], i820.speedModifier)
  i820.space = i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemNoise()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.separateAxes = !!i823[1]
  i822.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.strengthX)
  i822.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.strengthY)
  i822.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.strengthZ)
  i822.frequency = i823[5]
  i822.damping = !!i823[6]
  i822.octaveCount = i823[7]
  i822.octaveMultiplier = i823[8]
  i822.octaveScale = i823[9]
  i822.quality = i823[10]
  i822.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[11], i822.scrollSpeed)
  i822.scrollSpeedMultiplier = i823[12]
  i822.remapEnabled = !!i823[13]
  i822.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[14], i822.remapX)
  i822.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[15], i822.remapY)
  i822.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[16], i822.remapZ)
  i822.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[17], i822.positionAmount)
  i822.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[18], i822.rotationAmount)
  i822.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[19], i822.sizeAmount)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemInheritVelocity()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.mode = i825[1]
  i824.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.curve)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemForceOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.space = i827[4]
  i826.randomized = !!i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.limitX)
  i828.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.limitY)
  i828.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.limitZ)
  i828.dampen = i829[4]
  i828.separateAxes = !!i829[5]
  i828.space = i829[6]
  i828.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[7], i828.drag)
  i828.multiplyDragByParticleSize = !!i829[8]
  i828.multiplyDragByParticleVelocity = !!i829[9]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i831 = data
  i830.enabled = !!i831[0]
  request.r(i831[1], i831[2], 0, i830, 'sharedMaterial')
  var i833 = i831[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sharedMaterials = i832
  i830.receiveShadows = !!i831[4]
  i830.shadowCastingMode = i831[5]
  i830.sortingLayerID = i831[6]
  i830.sortingOrder = i831[7]
  i830.lightmapIndex = i831[8]
  i830.lightmapSceneIndex = i831[9]
  i830.lightmapScaleOffset = new pc.Vec4( i831[10], i831[11], i831[12], i831[13] )
  i830.lightProbeUsage = i831[14]
  i830.reflectionProbeUsage = i831[15]
  request.r(i831[16], i831[17], 0, i830, 'mesh')
  i830.meshCount = i831[18]
  i830.activeVertexStreamsCount = i831[19]
  i830.alignment = i831[20]
  i830.renderMode = i831[21]
  i830.sortMode = i831[22]
  i830.lengthScale = i831[23]
  i830.velocityScale = i831[24]
  i830.cameraVelocityScale = i831[25]
  i830.normalDirection = i831[26]
  i830.sortingFudge = i831[27]
  i830.minParticleSize = i831[28]
  i830.maxParticleSize = i831[29]
  i830.pivot = new pc.Vec3( i831[30], i831[31], i831[32] )
  request.r(i831[33], i831[34], 0, i830, 'trailMaterial')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i837 = data
  i836.name = i837[0]
  i836.tag = i837[1]
  i836.enabled = !!i837[2]
  i836.isStatic = !!i837[3]
  i836.layer = i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'sharedMesh')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'additionalVertexStreams')
  i840.enabled = !!i841[2]
  request.r(i841[3], i841[4], 0, i840, 'sharedMaterial')
  var i843 = i841[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.sharedMaterials = i842
  i840.receiveShadows = !!i841[6]
  i840.shadowCastingMode = i841[7]
  i840.sortingLayerID = i841[8]
  i840.sortingOrder = i841[9]
  i840.lightmapIndex = i841[10]
  i840.lightmapSceneIndex = i841[11]
  i840.lightmapScaleOffset = new pc.Vec4( i841[12], i841[13], i841[14], i841[15] )
  i840.lightProbeUsage = i841[16]
  i840.reflectionProbeUsage = i841[17]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i845 = data
  i844.name = i845[0]
  i844.halfPrecision = !!i845[1]
  i844.vertexCount = i845[2]
  i844.aabb = i845[3]
  var i847 = i845[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( !!i847[i + 0] );
  }
  i844.streams = i846
  i844.vertices = i845[5]
  var i849 = i845[6]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i849[i + 0]) );
  }
  i844.subMeshes = i848
  var i851 = i845[7]
  var i850 = []
  for(var i = 0; i < i851.length; i += 16) {
    i850.push( new pc.Mat4().setData(i851[i + 0], i851[i + 1], i851[i + 2], i851[i + 3],  i851[i + 4], i851[i + 5], i851[i + 6], i851[i + 7],  i851[i + 8], i851[i + 9], i851[i + 10], i851[i + 11],  i851[i + 12], i851[i + 13], i851[i + 14], i851[i + 15]) );
  }
  i844.bindposes = i850
  var i853 = i845[8]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i853[i + 0]) );
  }
  i844.blendShapes = i852
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i859 = data
  i858.triangles = i859[0]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i865 = data
  i864.name = i865[0]
  var i867 = i865[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i867[i + 0]) );
  }
  i864.frames = i866
  return i864
}

Deserializers["ScenarioFour.Path"] = function (request, data, root) {
  var i868 = root || request.c( 'ScenarioFour.Path' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868._points = i870
  return i868
}

Deserializers["ScenarioFour.PathPoint"] = function (request, data, root) {
  var i874 = root || request.c( 'ScenarioFour.PathPoint' )
  var i875 = data
  i874._time = i875[0]
  return i874
}

Deserializers["ScenarioFour.Bullet"] = function (request, data, root) {
  var i876 = root || request.c( 'ScenarioFour.Bullet' )
  var i877 = data
  i876._flyTime = i877[0]
  i876._flySpeed = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.isTrigger = !!i879[1]
  request.r(i879[2], i879[3], 0, i878, 'material')
  i878.center = new pc.Vec3( i879[4], i879[5], i879[6] )
  i878.radius = i879[7]
  return i878
}

Deserializers["ScenarioFour.Enemy"] = function (request, data, root) {
  var i880 = root || request.c( 'ScenarioFour.Enemy' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, '_animatedModel')
  request.r(i881[2], i881[3], 0, i880, '_bulletTemplate')
  request.r(i881[4], i881[5], 0, i880, '_shootPoint')
  request.r(i881[6], i881[7], 0, i880, '_bloodEffect')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'animatorController')
  i882.updateMode = i883[2]
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.humanBones = i884
  i882.enabled = !!i883[4]
  return i882
}

Deserializers["ScenarioFour.EnemyAnimatedModel"] = function (request, data, root) {
  var i888 = root || request.c( 'ScenarioFour.EnemyAnimatedModel' )
  var i889 = data
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i891 = data
  i890.enabled = !!i891[0]
  request.r(i891[1], i891[2], 0, i890, 'sharedMaterial')
  var i893 = i891[3]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.sharedMaterials = i892
  i890.receiveShadows = !!i891[4]
  i890.shadowCastingMode = i891[5]
  i890.sortingLayerID = i891[6]
  i890.sortingOrder = i891[7]
  i890.lightmapIndex = i891[8]
  i890.lightmapSceneIndex = i891[9]
  i890.lightmapScaleOffset = new pc.Vec4( i891[10], i891[11], i891[12], i891[13] )
  i890.lightProbeUsage = i891[14]
  i890.reflectionProbeUsage = i891[15]
  request.r(i891[16], i891[17], 0, i890, 'sharedMesh')
  var i895 = i891[18]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i890.bones = i894
  i890.updateWhenOffscreen = !!i891[19]
  i890.localBounds = i891[20]
  request.r(i891[21], i891[22], 0, i890, 'rootBone')
  var i897 = i891[23]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i897[i + 0]) );
  }
  i890.blendShapesWeights = i896
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i901 = data
  i900.weight = i901[0]
  return i900
}

Deserializers["ScenarioFour.Director"] = function (request, data, root) {
  var i902 = root || request.c( 'ScenarioFour.Director' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, '_girl')
  request.r(i903[2], i903[3], 0, i902, '_cameras')
  request.r(i903[4], i903[5], 0, i902, '_uiSwitcher')
  request.r(i903[6], i903[7], 0, i902, '_enemies')
  request.r(i903[8], i903[9], 0, i902, '_teleportEffectStatic')
  var i905 = i903[10]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('ScenarioFour.CameraTiming', i905[i + 0]) );
  }
  i902._timings = i904
  return i902
}

Deserializers["ScenarioFour.CameraTiming"] = function (request, data, root) {
  var i908 = root || request.c( 'ScenarioFour.CameraTiming' )
  var i909 = data
  i908._timing = i909[0]
  i908._cameraType = i909[1]
  return i908
}

Deserializers["ScenarioFour.Cameras"] = function (request, data, root) {
  var i910 = root || request.c( 'ScenarioFour.Cameras' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('ScenarioFour.CreoCamera', i913[i + 0]) );
  }
  i910._cameras = i912
  request.r(i911[1], i911[2], 0, i910, '_camerasFovList')
  request.r(i911[3], i911[4], 0, i910, '_cameraFovChanger')
  return i910
}

Deserializers["ScenarioFour.CreoCamera"] = function (request, data, root) {
  var i916 = root || request.c( 'ScenarioFour.CreoCamera' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, '_camera')
  i916._type = i917[2]
  return i916
}

Deserializers["CameraFovChanger"] = function (request, data, root) {
  var i918 = root || request.c( 'CameraFovChanger' )
  var i919 = data
  return i918
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i920 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_LookAt')
  request.r(i921[2], i921[3], 0, i920, 'm_Follow')
  i920.m_Lens = request.d('Cinemachine.LensSettings', i921[4], i920.m_Lens)
  i920.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i921[5], i920.m_Transitions)
  var i923 = i921[6]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.m_ExcludedPropertiesInInspector = i922
  var i925 = i921[7]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.m_LockStageInInspector = i924
  i920.m_Priority = i921[8]
  i920.m_StandbyUpdate = i921[9]
  i920.m_LegacyBlendHint = i921[10]
  request.r(i921[11], i921[12], 0, i920, 'm_ComponentOwner')
  i920.m_StreamingVersion = i921[13]
  return i920
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Cinemachine.LensSettings' )
  var i927 = data
  i926.FieldOfView = i927[0]
  i926.OrthographicSize = i927[1]
  i926.NearClipPlane = i927[2]
  i926.FarClipPlane = i927[3]
  i926.Dutch = i927[4]
  i926.LensShift = new pc.Vec2( i927[5], i927[6] )
  return i926
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i928 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i929 = data
  i928.m_BlendHint = i929[0]
  i928.m_InheritPosition = !!i929[1]
  i928.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i929[2], i928.m_OnCameraLive)
  return i928
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i930 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i931 = data
  i930.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i931[0], i930.m_PersistentCalls)
  return i930
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i933 = data
  var i935 = i933[0]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('UnityEngine.Events.PersistentCall', i935[i + 0]));
  }
  i932.m_Calls = i934
  return i932
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_Target')
  i938.m_TargetAssemblyTypeName = i939[2]
  i938.m_MethodName = i939[3]
  i938.m_Mode = i939[4]
  i938.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i939[5], i938.m_Arguments)
  i938.m_CallState = i939[6]
  return i938
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i944 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i945 = data
  return i944
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i946 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i947 = data
  i946.m_TrackedObjectOffset = new pc.Vec3( i947[0], i947[1], i947[2] )
  i946.m_LookaheadTime = i947[3]
  i946.m_LookaheadSmoothing = i947[4]
  i946.m_LookaheadIgnoreY = !!i947[5]
  i946.m_HorizontalDamping = i947[6]
  i946.m_VerticalDamping = i947[7]
  i946.m_ScreenX = i947[8]
  i946.m_ScreenY = i947[9]
  i946.m_DeadZoneWidth = i947[10]
  i946.m_DeadZoneHeight = i947[11]
  i946.m_SoftZoneWidth = i947[12]
  i946.m_SoftZoneHeight = i947[13]
  i946.m_BiasX = i947[14]
  i946.m_BiasY = i947[15]
  i946.m_CenterOnActivate = !!i947[16]
  return i946
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i948 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i949 = data
  i948.m_BindingMode = i949[0]
  i948.m_FollowOffset = new pc.Vec3( i949[1], i949[2], i949[3] )
  i948.m_XDamping = i949[4]
  i948.m_YDamping = i949[5]
  i948.m_ZDamping = i949[6]
  i948.m_AngularDampingMode = i949[7]
  i948.m_PitchDamping = i949[8]
  i948.m_YawDamping = i949[9]
  i948.m_RollDamping = i949[10]
  i948.m_AngularDamping = i949[11]
  return i948
}

Deserializers["Cinemachine.CinemachineBasicMultiChannelPerlin"] = function (request, data, root) {
  var i950 = root || request.c( 'Cinemachine.CinemachineBasicMultiChannelPerlin' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_NoiseProfile')
  i950.m_PivotOffset = new pc.Vec3( i951[2], i951[3], i951[4] )
  i950.m_AmplitudeGain = i951[5]
  i950.m_FrequencyGain = i951[6]
  i950.mNoiseOffsets = new pc.Vec3( i951[7], i951[8], i951[9] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i953 = data
  i952.enabled = !!i953[0]
  i952.isTrigger = !!i953[1]
  request.r(i953[2], i953[3], 0, i952, 'material')
  request.r(i953[4], i953[5], 0, i952, 'sharedMesh')
  i952.convex = !!i953[6]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i955 = data
  i954.center = new pc.Vec3( i955[0], i955[1], i955[2] )
  i954.size = new pc.Vec3( i955[3], i955[4], i955[5] )
  i954.enabled = !!i955[6]
  i954.isTrigger = !!i955[7]
  request.r(i955[8], i955[9], 0, i954, 'material')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i957 = data
  i956.center = new pc.Vec3( i957[0], i957[1], i957[2] )
  i956.radius = i957[3]
  i956.height = i957[4]
  i956.direction = i957[5]
  i956.enabled = !!i957[6]
  i956.isTrigger = !!i957[7]
  request.r(i957[8], i957[9], 0, i956, 'material')
  return i956
}

Deserializers["ScenarioFour.Enemies"] = function (request, data, root) {
  var i958 = root || request.c( 'ScenarioFour.Enemies' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, '_enemyRight')
  request.r(i959[2], i959[3], 0, i958, '_enemyLeft')
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i961 = data
  i960.name = i961[0]
  i960.atlasId = i961[1]
  i960.mipmapCount = i961[2]
  i960.hdr = !!i961[3]
  i960.size = i961[4]
  i960.anisoLevel = i961[5]
  i960.filterMode = i961[6]
  i960.wrapMode = i961[7]
  var i963 = i961[8]
  var i962 = []
  for(var i = 0; i < i963.length; i += 4) {
    i962.push( UnityEngine.Rect.MinMaxRect(i963[i + 0], i963[i + 1], i963[i + 2], i963[i + 3]) );
  }
  i960.rects = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i967 = data
  i966.name = i967[0]
  i966.index = i967[1]
  i966.startup = !!i967[2]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.aspect = i969[1]
  i968.orthographic = !!i969[2]
  i968.orthographicSize = i969[3]
  i968.backgroundColor = new pc.Color(i969[4], i969[5], i969[6], i969[7])
  i968.nearClipPlane = i969[8]
  i968.farClipPlane = i969[9]
  i968.fieldOfView = i969[10]
  i968.depth = i969[11]
  i968.clearFlags = i969[12]
  i968.cullingMask = i969[13]
  i968.rect = i969[14]
  request.r(i969[15], i969[16], 0, i968, 'targetTexture')
  return i968
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i970 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i971 = data
  i970.m_ShowDebugText = !!i971[0]
  i970.m_ShowCameraFrustum = !!i971[1]
  i970.m_IgnoreTimeScale = !!i971[2]
  request.r(i971[3], i971[4], 0, i970, 'm_WorldUpOverride')
  i970.m_UpdateMethod = i971[5]
  i970.m_BlendUpdateMethod = i971[6]
  i970.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i971[7], i970.m_DefaultBlend)
  request.r(i971[8], i971[9], 0, i970, 'm_CustomBlends')
  i970.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i971[10], i970.m_CameraCutEvent)
  i970.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i971[11], i970.m_CameraActivatedEvent)
  return i970
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i972 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i973 = data
  i972.m_Style = i973[0]
  i972.m_Time = i973[1]
  i972.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i973[2] } )
  return i972
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i974 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i975 = data
  i974.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i975[0], i974.m_PersistentCalls)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.type = i977[1]
  i976.color = new pc.Color(i977[2], i977[3], i977[4], i977[5])
  i976.cullingMask = i977[6]
  i976.intensity = i977[7]
  i976.range = i977[8]
  i976.spotAngle = i977[9]
  i976.shadows = i977[10]
  i976.shadowNormalBias = i977[11]
  i976.shadowBias = i977[12]
  i976.shadowStrength = i977[13]
  i976.shadowResolution = i977[14]
  i976.lightmapBakeType = i977[15]
  i976.renderMode = i977[16]
  request.r(i977[17], i977[18], 0, i976, 'cookie')
  i976.cookieSize = i977[19]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i979 = data
  i978.pivot = new pc.Vec2( i979[0], i979[1] )
  i978.anchorMin = new pc.Vec2( i979[2], i979[3] )
  i978.anchorMax = new pc.Vec2( i979[4], i979[5] )
  i978.sizeDelta = new pc.Vec2( i979[6], i979[7] )
  i978.anchoredPosition3D = new pc.Vec3( i979[8], i979[9], i979[10] )
  i978.rotation = new pc.Quat(i979[11], i979[12], i979[13], i979[14])
  i978.scale = new pc.Vec3( i979[15], i979[16], i979[17] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i981 = data
  i980.enabled = !!i981[0]
  i980.planeDistance = i981[1]
  i980.referencePixelsPerUnit = i981[2]
  i980.isFallbackOverlay = !!i981[3]
  i980.renderMode = i981[4]
  i980.renderOrder = i981[5]
  i980.sortingLayerName = i981[6]
  i980.sortingOrder = i981[7]
  i980.scaleFactor = i981[8]
  request.r(i981[9], i981[10], 0, i980, 'worldCamera')
  i980.overrideSorting = !!i981[11]
  i980.pixelPerfect = !!i981[12]
  i980.targetDisplay = i981[13]
  i980.overridePixelPerfect = !!i981[14]
  return i980
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i983 = data
  i982.m_UiScaleMode = i983[0]
  i982.m_ReferencePixelsPerUnit = i983[1]
  i982.m_ScaleFactor = i983[2]
  i982.m_ReferenceResolution = new pc.Vec2( i983[3], i983[4] )
  i982.m_ScreenMatchMode = i983[5]
  i982.m_MatchWidthOrHeight = i983[6]
  i982.m_PhysicalUnit = i983[7]
  i982.m_FallbackScreenDPI = i983[8]
  i982.m_DefaultSpriteDPI = i983[9]
  i982.m_DynamicPixelsPerUnit = i983[10]
  i982.m_PresetInfoIsWorld = !!i983[11]
  return i982
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i985 = data
  i984.m_IgnoreReversedGraphics = !!i985[0]
  i984.m_BlockingObjects = i985[1]
  i984.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i985[2] )
  return i984
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i986 = root || request.c( 'ChooseHandler' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, '_brain')
  request.r(i987[2], i987[3], 0, i986, '_ericSettings')
  request.r(i987[4], i987[5], 0, i986, '_viperSettings')
  request.r(i987[6], i987[7], 0, i986, '_ericScene')
  request.r(i987[8], i987[9], 0, i986, '_ericSceneBackground')
  request.r(i987[10], i987[11], 0, i986, '_viperScene')
  request.r(i987[12], i987[13], 0, i986, '_viperSceneBackground')
  request.r(i987[14], i987[15], 0, i986, '_chooseButton')
  var i989 = i987[16]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986._characters = i988
  request.r(i987[17], i987[18], 0, i986, '_frame')
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i993 = data
  i992.cullTransparentMesh = !!i993[0]
  return i992
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.Image' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'm_Sprite')
  i994.m_Type = i995[2]
  i994.m_PreserveAspect = !!i995[3]
  i994.m_FillCenter = !!i995[4]
  i994.m_FillMethod = i995[5]
  i994.m_FillAmount = i995[6]
  i994.m_FillClockwise = !!i995[7]
  i994.m_FillOrigin = i995[8]
  i994.m_UseSpriteMesh = !!i995[9]
  i994.m_PixelsPerUnitMultiplier = i995[10]
  request.r(i995[11], i995[12], 0, i994, 'm_Material')
  i994.m_Maskable = !!i995[13]
  i994.m_Color = new pc.Color(i995[14], i995[15], i995[16], i995[17])
  i994.m_RaycastTarget = !!i995[18]
  i994.m_RaycastPadding = new pc.Vec4( i995[19], i995[20], i995[21], i995[22] )
  return i994
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Mask' )
  var i997 = data
  i996.m_ShowMaskGraphic = !!i997[0]
  return i996
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Button' )
  var i999 = data
  i998.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i999[0], i998.m_OnClick)
  i998.m_Navigation = request.d('UnityEngine.UI.Navigation', i999[1], i998.m_Navigation)
  i998.m_Transition = i999[2]
  i998.m_Colors = request.d('UnityEngine.UI.ColorBlock', i999[3], i998.m_Colors)
  i998.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i999[4], i998.m_SpriteState)
  i998.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i999[5], i998.m_AnimationTriggers)
  i998.m_Interactable = !!i999[6]
  request.r(i999[7], i999[8], 0, i998, 'm_TargetGraphic')
  return i998
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1001 = data
  i1000.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1001[0], i1000.m_PersistentCalls)
  return i1000
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1003 = data
  i1002.m_Mode = i1003[0]
  i1002.m_WrapAround = !!i1003[1]
  request.r(i1003[2], i1003[3], 0, i1002, 'm_SelectOnUp')
  request.r(i1003[4], i1003[5], 0, i1002, 'm_SelectOnDown')
  request.r(i1003[6], i1003[7], 0, i1002, 'm_SelectOnLeft')
  request.r(i1003[8], i1003[9], 0, i1002, 'm_SelectOnRight')
  return i1002
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1005 = data
  i1004.m_NormalColor = new pc.Color(i1005[0], i1005[1], i1005[2], i1005[3])
  i1004.m_HighlightedColor = new pc.Color(i1005[4], i1005[5], i1005[6], i1005[7])
  i1004.m_PressedColor = new pc.Color(i1005[8], i1005[9], i1005[10], i1005[11])
  i1004.m_SelectedColor = new pc.Color(i1005[12], i1005[13], i1005[14], i1005[15])
  i1004.m_DisabledColor = new pc.Color(i1005[16], i1005[17], i1005[18], i1005[19])
  i1004.m_ColorMultiplier = i1005[20]
  i1004.m_FadeDuration = i1005[21]
  return i1004
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_HighlightedSprite')
  request.r(i1007[2], i1007[3], 0, i1006, 'm_PressedSprite')
  request.r(i1007[4], i1007[5], 0, i1006, 'm_SelectedSprite')
  request.r(i1007[6], i1007[7], 0, i1006, 'm_DisabledSprite')
  return i1006
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1009 = data
  i1008.m_NormalTrigger = i1009[0]
  i1008.m_HighlightedTrigger = i1009[1]
  i1008.m_PressedTrigger = i1009[2]
  i1008.m_SelectedTrigger = i1009[3]
  i1008.m_DisabledTrigger = i1009[4]
  return i1008
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1011 = data
  i1010.m_hasFontAssetChanged = !!i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'm_baseMaterial')
  i1010.m_maskOffset = new pc.Vec4( i1011[3], i1011[4], i1011[5], i1011[6] )
  i1010.m_text = i1011[7]
  i1010.m_isRightToLeft = !!i1011[8]
  request.r(i1011[9], i1011[10], 0, i1010, 'm_fontAsset')
  request.r(i1011[11], i1011[12], 0, i1010, 'm_sharedMaterial')
  var i1013 = i1011[13]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1010.m_fontSharedMaterials = i1012
  request.r(i1011[14], i1011[15], 0, i1010, 'm_fontMaterial')
  var i1015 = i1011[16]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1010.m_fontMaterials = i1014
  i1010.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1011[17], i1011[18], i1011[19], i1011[20])
  i1010.m_fontColor = new pc.Color(i1011[21], i1011[22], i1011[23], i1011[24])
  i1010.m_enableVertexGradient = !!i1011[25]
  i1010.m_colorMode = i1011[26]
  i1010.m_fontColorGradient = request.d('TMPro.VertexGradient', i1011[27], i1010.m_fontColorGradient)
  request.r(i1011[28], i1011[29], 0, i1010, 'm_fontColorGradientPreset')
  request.r(i1011[30], i1011[31], 0, i1010, 'm_spriteAsset')
  i1010.m_tintAllSprites = !!i1011[32]
  request.r(i1011[33], i1011[34], 0, i1010, 'm_StyleSheet')
  i1010.m_TextStyleHashCode = i1011[35]
  i1010.m_overrideHtmlColors = !!i1011[36]
  i1010.m_faceColor = UnityEngine.Color32.ConstructColor(i1011[37], i1011[38], i1011[39], i1011[40])
  i1010.m_fontSize = i1011[41]
  i1010.m_fontSizeBase = i1011[42]
  i1010.m_fontWeight = i1011[43]
  i1010.m_enableAutoSizing = !!i1011[44]
  i1010.m_fontSizeMin = i1011[45]
  i1010.m_fontSizeMax = i1011[46]
  i1010.m_fontStyle = i1011[47]
  i1010.m_HorizontalAlignment = i1011[48]
  i1010.m_VerticalAlignment = i1011[49]
  i1010.m_textAlignment = i1011[50]
  i1010.m_characterSpacing = i1011[51]
  i1010.m_wordSpacing = i1011[52]
  i1010.m_lineSpacing = i1011[53]
  i1010.m_lineSpacingMax = i1011[54]
  i1010.m_paragraphSpacing = i1011[55]
  i1010.m_charWidthMaxAdj = i1011[56]
  i1010.m_enableWordWrapping = !!i1011[57]
  i1010.m_wordWrappingRatios = i1011[58]
  i1010.m_overflowMode = i1011[59]
  request.r(i1011[60], i1011[61], 0, i1010, 'm_linkedTextComponent')
  request.r(i1011[62], i1011[63], 0, i1010, 'parentLinkedComponent')
  i1010.m_enableKerning = !!i1011[64]
  i1010.m_enableExtraPadding = !!i1011[65]
  i1010.checkPaddingRequired = !!i1011[66]
  i1010.m_isRichText = !!i1011[67]
  i1010.m_parseCtrlCharacters = !!i1011[68]
  i1010.m_isOrthographic = !!i1011[69]
  i1010.m_isCullingEnabled = !!i1011[70]
  i1010.m_horizontalMapping = i1011[71]
  i1010.m_verticalMapping = i1011[72]
  i1010.m_uvLineOffset = i1011[73]
  i1010.m_geometrySortingOrder = i1011[74]
  i1010.m_IsTextObjectScaleStatic = !!i1011[75]
  i1010.m_VertexBufferAutoSizeReduction = !!i1011[76]
  i1010.m_useMaxVisibleDescender = !!i1011[77]
  i1010.m_pageToDisplay = i1011[78]
  i1010.m_margin = new pc.Vec4( i1011[79], i1011[80], i1011[81], i1011[82] )
  i1010.m_isUsingLegacyAnimationComponent = !!i1011[83]
  i1010.m_isVolumetricText = !!i1011[84]
  request.r(i1011[85], i1011[86], 0, i1010, 'm_Material')
  i1010.m_Maskable = !!i1011[87]
  i1010.m_Color = new pc.Color(i1011[88], i1011[89], i1011[90], i1011[91])
  i1010.m_RaycastTarget = !!i1011[92]
  i1010.m_RaycastPadding = new pc.Vec4( i1011[93], i1011[94], i1011[95], i1011[96] )
  return i1010
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.VertexGradient' )
  var i1017 = data
  i1016.topLeft = new pc.Color(i1017[0], i1017[1], i1017[2], i1017[3])
  i1016.topRight = new pc.Color(i1017[4], i1017[5], i1017[6], i1017[7])
  i1016.bottomLeft = new pc.Color(i1017[8], i1017[9], i1017[10], i1017[11])
  i1016.bottomRight = new pc.Color(i1017[12], i1017[13], i1017[14], i1017[15])
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1019 = data
  i1018.m_Alpha = i1019[0]
  i1018.m_Interactable = !!i1019[1]
  i1018.m_BlocksRaycasts = !!i1019[2]
  i1018.m_IgnoreParentGroups = !!i1019[3]
  i1018.enabled = !!i1019[4]
  return i1018
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i1020 = root || request.c( 'JumpHandler' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, '_landJump')
  request.r(i1021[2], i1021[3], 0, i1020, '_secondLandJump')
  request.r(i1021[4], i1021[5], 0, i1020, '_spawnPoint')
  request.r(i1021[6], i1021[7], 0, i1020, '_enemy')
  request.r(i1021[8], i1021[9], 0, i1020, '_finalPoint')
  return i1020
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i1022 = root || request.c( 'AnimationHandler' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, '_jumpHandler')
  return i1022
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i1024 = root || request.c( 'EffectHandler' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, '_jumpHandler')
  request.r(i1025[2], i1025[3], 0, i1024, '_canvas')
  request.r(i1025[4], i1025[5], 0, i1024, '_jumpSmoke')
  request.r(i1025[6], i1025[7], 0, i1024, '_light')
  request.r(i1025[8], i1025[9], 0, i1024, '_smoke')
  request.r(i1025[10], i1025[11], 0, i1024, '_enemyPool')
  request.r(i1025[12], i1025[13], 0, i1024, '_specialEnemy')
  return i1024
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i1026 = root || request.c( 'StartCamera' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, '_startCamera')
  request.r(i1027[2], i1027[3], 0, i1026, '_path')
  request.r(i1027[4], i1027[5], 0, i1026, '_player')
  request.r(i1027[6], i1027[7], 0, i1026, '_canvas')
  return i1026
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i1028 = root || request.c( 'ResolutionHandler' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, '_secondCamera')
  request.r(i1029[2], i1029[3], 0, i1028, '_fourthCamera')
  request.r(i1029[4], i1029[5], 0, i1028, '_fifthCamera')
  return i1028
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i1030 = root || request.c( 'CameraHandler' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, '_jumpHandler')
  request.r(i1031[2], i1031[3], 0, i1030, '_firstCamera')
  request.r(i1031[4], i1031[5], 0, i1030, '_secondCamera')
  request.r(i1031[6], i1031[7], 0, i1030, '_thirdCamera')
  request.r(i1031[8], i1031[9], 0, i1030, '_fourthCamera')
  request.r(i1031[10], i1031[11], 0, i1030, '_fifthCamera')
  return i1030
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i1032 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'm_Path')
  i1032.m_PathPosition = i1033[2]
  i1032.m_PositionUnits = i1033[3]
  i1032.m_PathOffset = new pc.Vec3( i1033[4], i1033[5], i1033[6] )
  i1032.m_XDamping = i1033[7]
  i1032.m_YDamping = i1033[8]
  i1032.m_ZDamping = i1033[9]
  i1032.m_CameraUp = i1033[10]
  i1032.m_PitchDamping = i1033[11]
  i1032.m_YawDamping = i1033[12]
  i1032.m_RollDamping = i1033[13]
  i1032.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i1033[14], i1032.m_AutoDolly)
  return i1032
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i1034 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i1035 = data
  i1034.m_Enabled = !!i1035[0]
  i1034.m_PositionOffset = i1035[1]
  i1034.m_SearchRadius = i1035[2]
  i1034.m_SearchResolution = i1035[3]
  return i1034
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i1036 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i1037 = data
  i1036.m_Looped = !!i1037[0]
  var i1039 = i1037[1]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i1039[i + 0]) );
  }
  i1036.m_Waypoints = i1038
  i1036.m_Resolution = i1037[2]
  i1036.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i1037[3], i1036.m_Appearance)
  return i1036
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i1042 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i1043 = data
  i1042.position = new pc.Vec3( i1043[0], i1043[1], i1043[2] )
  i1042.roll = i1043[3]
  return i1042
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i1044 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i1045 = data
  i1044.pathColor = new pc.Color(i1045[0], i1045[1], i1045[2], i1045[3])
  i1044.inactivePathColor = new pc.Color(i1045[4], i1045[5], i1045[6], i1045[7])
  i1044.width = i1045[8]
  return i1044
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i1046 = root || request.c( 'UIHandler' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, '_jumpHandler')
  request.r(i1047[2], i1047[3], 0, i1046, '_powerButton')
  request.r(i1047[4], i1047[5], 0, i1046, '_cTAButton')
  request.r(i1047[6], i1047[7], 0, i1046, '_fade')
  request.r(i1047[8], i1047[9], 0, i1046, '_finalPanel')
  return i1046
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i1048 = root || request.c( 'EnemyPool' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1048._enemies = i1050
  return i1048
}

Deserializers["Stalker"] = function (request, data, root) {
  var i1054 = root || request.c( 'Stalker' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, '_target')
  return i1054
}

Deserializers["Enemy"] = function (request, data, root) {
  var i1056 = root || request.c( 'Enemy' )
  var i1057 = data
  return i1056
}

Deserializers["ScenarioFour.Girl"] = function (request, data, root) {
  var i1058 = root || request.c( 'ScenarioFour.Girl' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, '_path')
  request.r(i1059[2], i1059[3], 0, i1058, '_animatedModel')
  request.r(i1059[4], i1059[5], 0, i1058, '_model')
  request.r(i1059[6], i1059[7], 0, i1058, '_teleportEffect')
  request.r(i1059[8], i1059[9], 0, i1058, '_bulletTemplate')
  request.r(i1059[10], i1059[11], 0, i1058, '_shootPoint')
  return i1058
}

Deserializers["ScenarioFour.AnimatedModel"] = function (request, data, root) {
  var i1060 = root || request.c( 'ScenarioFour.AnimatedModel' )
  var i1061 = data
  return i1060
}

Deserializers["ScenarioFour.UISwitcher"] = function (request, data, root) {
  var i1062 = root || request.c( 'ScenarioFour.UISwitcher' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, '_powerButton')
  request.r(i1063[2], i1063[3], 0, i1062, '_attackButton')
  request.r(i1063[4], i1063[5], 0, i1062, '_playButton')
  request.r(i1063[6], i1063[7], 0, i1062, '_finalPanel')
  return i1062
}

Deserializers["ScenarioFour.PulseTransform"] = function (request, data, root) {
  var i1064 = root || request.c( 'ScenarioFour.PulseTransform' )
  var i1065 = data
  return i1064
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'm_FirstSelected')
  i1066.m_sendNavigationEvents = !!i1067[2]
  i1066.m_DragThreshold = i1067[3]
  return i1066
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1069 = data
  i1068.m_HorizontalAxis = i1069[0]
  i1068.m_VerticalAxis = i1069[1]
  i1068.m_SubmitButton = i1069[2]
  i1068.m_CancelButton = i1069[3]
  i1068.m_InputActionsPerSecond = i1069[4]
  i1068.m_RepeatDelay = i1069[5]
  i1068.m_ForceModuleActive = !!i1069[6]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1071 = data
  i1070.ambientIntensity = i1071[0]
  i1070.reflectionIntensity = i1071[1]
  i1070.ambientMode = i1071[2]
  i1070.ambientLight = new pc.Color(i1071[3], i1071[4], i1071[5], i1071[6])
  i1070.ambientSkyColor = new pc.Color(i1071[7], i1071[8], i1071[9], i1071[10])
  i1070.ambientGroundColor = new pc.Color(i1071[11], i1071[12], i1071[13], i1071[14])
  i1070.ambientEquatorColor = new pc.Color(i1071[15], i1071[16], i1071[17], i1071[18])
  i1070.fogColor = new pc.Color(i1071[19], i1071[20], i1071[21], i1071[22])
  i1070.fogEndDistance = i1071[23]
  i1070.fogStartDistance = i1071[24]
  i1070.fogDensity = i1071[25]
  i1070.fog = !!i1071[26]
  request.r(i1071[27], i1071[28], 0, i1070, 'skybox')
  i1070.fogMode = i1071[29]
  var i1073 = i1071[30]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1073[i + 0]) );
  }
  i1070.lightmaps = i1072
  i1070.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1071[31], i1070.lightProbes)
  i1070.lightmapsMode = i1071[32]
  i1070.environmentLightingMode = i1071[33]
  i1070.ambientProbe = new pc.SphericalHarmonicsL2(i1071[34])
  i1070.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1071[35])
  i1070.useReferenceAmbientProbe = !!i1071[36]
  request.r(i1071[37], i1071[38], 0, i1070, 'customReflection')
  request.r(i1071[39], i1071[40], 0, i1070, 'defaultReflection')
  i1070.defaultReflectionMode = i1071[41]
  i1070.defaultReflectionResolution = i1071[42]
  i1070.sunLightObjectId = i1071[43]
  i1070.pixelLightCount = i1071[44]
  i1070.defaultReflectionHDR = !!i1071[45]
  i1070.hasLightDataAsset = !!i1071[46]
  i1070.hasManualGenerate = !!i1071[47]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'lightmapColor')
  request.r(i1077[2], i1077[3], 0, i1076, 'lightmapDirection')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1078 = root || new UnityEngine.LightProbes()
  var i1079 = data
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(i1089[i + 0]);
  }
  i1086.invalidShaderVariants = i1088
  i1086.name = i1087[1]
  i1086.guid = i1087[2]
  var i1091 = i1087[3]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.shaderDefinedKeywords = i1090
  var i1093 = i1087[4]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1093[i + 0]) );
  }
  i1086.passes = i1092
  var i1095 = i1087[5]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1095[i + 0]) );
  }
  i1086.usePasses = i1094
  var i1097 = i1087[6]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1097[i + 0]) );
  }
  i1086.defaultParameterValues = i1096
  request.r(i1087[7], i1087[8], 0, i1086, 'unityFallbackShader')
  i1086.readDepth = !!i1087[9]
  i1086.isCreatedByShaderGraph = !!i1087[10]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1102 = root || new pc.UnityShaderPass()
  var i1103 = data
  i1102.id = i1103[0]
  i1102.subShaderIndex = i1103[1]
  i1102.name = i1103[2]
  i1102.passType = i1103[3]
  i1102.usePass = !!i1103[4]
  i1102.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[5], i1102.zTest)
  i1102.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[6], i1102.zWrite)
  i1102.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[7], i1102.culling)
  i1102.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[8], i1102.blending)
  i1102.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[9], i1102.alphaBlending)
  i1102.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[10], i1102.colorWriteMask)
  i1102.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[11], i1102.offsetUnits)
  i1102.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[12], i1102.offsetFactor)
  i1102.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[13], i1102.stencilRef)
  i1102.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[14], i1102.stencilReadMask)
  i1102.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[15], i1102.stencilWriteMask)
  i1102.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[16], i1102.stencilOp)
  i1102.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[17], i1102.stencilOpFront)
  i1102.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[18], i1102.stencilOpBack)
  var i1105 = i1103[19]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1105[i + 0]) );
  }
  i1102.tags = i1104
  var i1107 = i1103[20]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.passDefinedKeywords = i1106
  var i1109 = i1103[21]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1109[i + 0]) );
  }
  i1102.variants = i1108
  var i1111 = i1103[22]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1111[i + 0]) );
  }
  i1102.excludedVariants = i1110
  i1102.hasDepthReader = !!i1103[23]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1113 = data
  i1112.val = i1113[0]
  i1112.name = i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1115 = data
  i1114.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[0], i1114.src)
  i1114.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[1], i1114.dst)
  i1114.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[2], i1114.op)
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1117 = data
  i1116.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[0], i1116.pass)
  i1116.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[1], i1116.fail)
  i1116.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[2], i1116.zFail)
  i1116.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[3], i1116.comp)
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.value = i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1125 = data
  i1124.passId = i1125[0]
  i1124.subShaderIndex = i1125[1]
  var i1127 = i1125[2]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1124.keywords = i1126
  i1124.vertexProgram = i1125[3]
  i1124.fragmentProgram = i1125[4]
  i1124.readDepth = !!i1125[5]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'shader')
  i1130.pass = i1131[2]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.type = i1135[1]
  i1134.value = new pc.Vec4( i1135[2], i1135[3], i1135[4], i1135[5] )
  i1134.textureValue = i1135[6]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1137 = data
  i1136.name = i1137[0]
  request.r(i1137[1], i1137[2], 0, i1136, 'texture')
  i1136.aabb = i1137[3]
  i1136.vertices = i1137[4]
  i1136.triangles = i1137[5]
  i1136.textureRect = UnityEngine.Rect.MinMaxRect(i1137[6], i1137[7], i1137[8], i1137[9])
  i1136.packedRect = UnityEngine.Rect.MinMaxRect(i1137[10], i1137[11], i1137[12], i1137[13])
  i1136.border = new pc.Vec4( i1137[14], i1137[15], i1137[16], i1137[17] )
  i1136.transparency = i1137[18]
  i1136.bounds = i1137[19]
  i1136.pixelsPerUnit = i1137[20]
  i1136.textureWidth = i1137[21]
  i1136.textureHeight = i1137[22]
  i1136.nativeSize = new pc.Vec2( i1137[23], i1137[24] )
  i1136.pivot = new pc.Vec2( i1137[25], i1137[26] )
  i1136.textureRectOffset = new pc.Vec2( i1137[27], i1137[28] )
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.wrapMode = i1139[1]
  i1138.isLooping = !!i1139[2]
  i1138.length = i1139[3]
  var i1141 = i1139[4]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1141[i + 0]) );
  }
  i1138.curves = i1140
  var i1143 = i1139[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1143[i + 0]) );
  }
  i1138.events = i1142
  i1138.halfPrecision = !!i1139[6]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1147 = data
  i1146.path = i1147[0]
  i1146.componentType = i1147[1]
  i1146.property = i1147[2]
  i1146.keys = i1147[3]
  var i1149 = i1147[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1149[i + 0]) );
  }
  i1146.objectReferenceKeys = i1148
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1153 = data
  i1152.time = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'value')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1157 = data
  i1156.functionName = i1157[0]
  i1156.floatParameter = i1157[1]
  i1156.intParameter = i1157[2]
  i1156.stringParameter = i1157[3]
  request.r(i1157[4], i1157[5], 0, i1156, 'objectReferenceParameter')
  i1156.time = i1157[6]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.ascent = i1159[1]
  i1158.originalLineHeight = i1159[2]
  i1158.fontSize = i1159[3]
  var i1161 = i1159[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1161[i + 0]) );
  }
  i1158.characterInfo = i1160
  request.r(i1159[5], i1159[6], 0, i1158, 'texture')
  i1158.originalFontSize = i1159[7]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1165 = data
  i1164.index = i1165[0]
  i1164.advance = i1165[1]
  i1164.bearing = i1165[2]
  i1164.glyphWidth = i1165[3]
  i1164.glyphHeight = i1165[4]
  i1164.minX = i1165[5]
  i1164.maxX = i1165[6]
  i1164.minY = i1165[7]
  i1164.maxY = i1165[8]
  i1164.uvBottomLeftX = i1165[9]
  i1164.uvBottomLeftY = i1165[10]
  i1164.uvBottomRightX = i1165[11]
  i1164.uvBottomRightY = i1165[12]
  i1164.uvTopLeftX = i1165[13]
  i1164.uvTopLeftY = i1165[14]
  i1164.uvTopRightX = i1165[15]
  i1164.uvTopRightY = i1165[16]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1167 = data
  i1166.name = i1167[0]
  var i1169 = i1167[1]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1169[i + 0]) );
  }
  i1166.states = i1168
  var i1171 = i1167[2]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1171[i + 0]) );
  }
  i1166.layers = i1170
  var i1173 = i1167[3]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1173[i + 0]) );
  }
  i1166.parameters = i1172
  var i1175 = i1167[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1166.animationClips = i1174
  i1166.HasSubStateMachines = !!i1167[5]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1179 = data
  i1178.cycleOffset = i1179[0]
  i1178.cycleOffsetParameter = i1179[1]
  i1178.cycleOffsetParameterActive = !!i1179[2]
  i1178.mirror = !!i1179[3]
  i1178.mirrorParameter = i1179[4]
  i1178.mirrorParameterActive = !!i1179[5]
  i1178.motionId = i1179[6]
  i1178.nameHash = i1179[7]
  i1178.fullPathHash = i1179[8]
  i1178.speed = i1179[9]
  i1178.speedParameter = i1179[10]
  i1178.speedParameterActive = !!i1179[11]
  i1178.tag = i1179[12]
  i1178.name = i1179[13]
  i1178.writeDefaultValues = !!i1179[14]
  var i1181 = i1179[15]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1181[i + 0]) );
  }
  i1178.transitions = i1180
  var i1183 = i1179[16]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 2, i1182, '')
  }
  i1178.behaviours = i1182
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1187 = data
  i1186.fullPath = i1187[0]
  i1186.canTransitionToSelf = !!i1187[1]
  i1186.duration = i1187[2]
  i1186.exitTime = i1187[3]
  i1186.hasExitTime = !!i1187[4]
  i1186.hasFixedDuration = !!i1187[5]
  i1186.interruptionSource = i1187[6]
  i1186.offset = i1187[7]
  i1186.orderedInterruption = !!i1187[8]
  i1186.destinationStateNameHash = i1187[9]
  i1186.destinationStateMachineId = i1187[10]
  i1186.isExit = !!i1187[11]
  i1186.mute = !!i1187[12]
  i1186.solo = !!i1187[13]
  var i1189 = i1187[14]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1189[i + 0]) );
  }
  i1186.conditions = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1195 = data
  i1194.blendingMode = i1195[0]
  i1194.defaultWeight = i1195[1]
  i1194.name = i1195[2]
  i1194.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1195[3], i1194.stateMachine)
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1197 = data
  i1196.id = i1197[0]
  i1196.defaultStateNameHash = i1197[1]
  var i1199 = i1197[2]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1199[i + 0]) );
  }
  i1196.entryTransitions = i1198
  var i1201 = i1197[3]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1201[i + 0]) );
  }
  i1196.anyStateTransitions = i1200
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1205 = data
  i1204.destinationStateNameHash = i1205[0]
  i1204.destinationStateMachineId = i1205[1]
  i1204.isExit = !!i1205[2]
  i1204.mute = !!i1205[3]
  i1204.solo = !!i1205[4]
  var i1207 = i1205[5]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1211 = data
  i1210.defaultBool = !!i1211[0]
  i1210.defaultFloat = i1211[1]
  i1210.defaultInt = i1211[2]
  i1210.name = i1211[3]
  i1210.nameHash = i1211[4]
  i1210.type = i1211[5]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1215 = data
  i1214.mode = i1215[0]
  i1214.parameter = i1215[1]
  i1214.threshold = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.bytes64 = i1217[1]
  i1216.data = i1217[2]
  return i1216
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1219 = data
  i1218.hashCode = i1219[0]
  request.r(i1219[1], i1219[2], 0, i1218, 'material')
  i1218.materialHashCode = i1219[3]
  request.r(i1219[4], i1219[5], 0, i1218, 'atlas')
  i1218.normalStyle = i1219[6]
  i1218.normalSpacingOffset = i1219[7]
  i1218.boldStyle = i1219[8]
  i1218.boldSpacing = i1219[9]
  i1218.italicStyle = i1219[10]
  i1218.tabSize = i1219[11]
  i1218.m_Version = i1219[12]
  i1218.m_SourceFontFileGUID = i1219[13]
  request.r(i1219[14], i1219[15], 0, i1218, 'm_SourceFontFile_EditorRef')
  request.r(i1219[16], i1219[17], 0, i1218, 'm_SourceFontFile')
  i1218.m_AtlasPopulationMode = i1219[18]
  i1218.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1219[19], i1218.m_FaceInfo)
  var i1221 = i1219[20]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('UnityEngine.TextCore.Glyph', i1221[i + 0]));
  }
  i1218.m_GlyphTable = i1220
  var i1223 = i1219[21]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.TMP_Character', i1223[i + 0]));
  }
  i1218.m_CharacterTable = i1222
  var i1225 = i1219[22]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 2, i1224, '')
  }
  i1218.m_AtlasTextures = i1224
  i1218.m_AtlasTextureIndex = i1219[23]
  i1218.m_IsMultiAtlasTexturesEnabled = !!i1219[24]
  i1218.m_ClearDynamicDataOnBuild = !!i1219[25]
  var i1227 = i1219[26]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('UnityEngine.TextCore.GlyphRect', i1227[i + 0]));
  }
  i1218.m_UsedGlyphRects = i1226
  var i1229 = i1219[27]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.GlyphRect', i1229[i + 0]));
  }
  i1218.m_FreeGlyphRects = i1228
  i1218.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1219[28], i1218.m_fontInfo)
  i1218.m_AtlasWidth = i1219[29]
  i1218.m_AtlasHeight = i1219[30]
  i1218.m_AtlasPadding = i1219[31]
  i1218.m_AtlasRenderMode = i1219[32]
  var i1231 = i1219[33]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Glyph', i1231[i + 0]));
  }
  i1218.m_glyphInfoList = i1230
  i1218.m_KerningTable = request.d('TMPro.KerningTable', i1219[34], i1218.m_KerningTable)
  i1218.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1219[35], i1218.m_FontFeatureTable)
  var i1233 = i1219[36]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 1, i1232, '')
  }
  i1218.fallbackFontAssets = i1232
  var i1235 = i1219[37]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1218.m_FallbackFontAssetTable = i1234
  i1218.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1219[38], i1218.m_CreationSettings)
  var i1237 = i1219[39]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('TMPro.TMP_FontWeightPair', i1237[i + 0]) );
  }
  i1218.m_FontWeightTable = i1236
  var i1239 = i1219[40]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('TMPro.TMP_FontWeightPair', i1239[i + 0]) );
  }
  i1218.fontWeights = i1238
  return i1218
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1241 = data
  i1240.m_FaceIndex = i1241[0]
  i1240.m_FamilyName = i1241[1]
  i1240.m_StyleName = i1241[2]
  i1240.m_PointSize = i1241[3]
  i1240.m_Scale = i1241[4]
  i1240.m_LineHeight = i1241[5]
  i1240.m_AscentLine = i1241[6]
  i1240.m_CapLine = i1241[7]
  i1240.m_MeanLine = i1241[8]
  i1240.m_Baseline = i1241[9]
  i1240.m_DescentLine = i1241[10]
  i1240.m_SuperscriptOffset = i1241[11]
  i1240.m_SuperscriptSize = i1241[12]
  i1240.m_SubscriptOffset = i1241[13]
  i1240.m_SubscriptSize = i1241[14]
  i1240.m_UnderlineOffset = i1241[15]
  i1240.m_UnderlineThickness = i1241[16]
  i1240.m_StrikethroughOffset = i1241[17]
  i1240.m_StrikethroughThickness = i1241[18]
  i1240.m_TabWidth = i1241[19]
  return i1240
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1245 = data
  i1244.m_Index = i1245[0]
  i1244.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1245[1], i1244.m_Metrics)
  i1244.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1245[2], i1244.m_GlyphRect)
  i1244.m_Scale = i1245[3]
  i1244.m_AtlasIndex = i1245[4]
  return i1244
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1247 = data
  i1246.m_Width = i1247[0]
  i1246.m_Height = i1247[1]
  i1246.m_HorizontalBearingX = i1247[2]
  i1246.m_HorizontalBearingY = i1247[3]
  i1246.m_HorizontalAdvance = i1247[4]
  return i1246
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1249 = data
  i1248.m_X = i1249[0]
  i1248.m_Y = i1249[1]
  i1248.m_Width = i1249[2]
  i1248.m_Height = i1249[3]
  return i1248
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_Character' )
  var i1253 = data
  i1252.m_ElementType = i1253[0]
  i1252.m_Unicode = i1253[1]
  i1252.m_GlyphIndex = i1253[2]
  i1252.m_Scale = i1253[3]
  return i1252
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1259 = data
  i1258.Name = i1259[0]
  i1258.PointSize = i1259[1]
  i1258.Scale = i1259[2]
  i1258.CharacterCount = i1259[3]
  i1258.LineHeight = i1259[4]
  i1258.Baseline = i1259[5]
  i1258.Ascender = i1259[6]
  i1258.CapHeight = i1259[7]
  i1258.Descender = i1259[8]
  i1258.CenterLine = i1259[9]
  i1258.SuperscriptOffset = i1259[10]
  i1258.SubscriptOffset = i1259[11]
  i1258.SubSize = i1259[12]
  i1258.Underline = i1259[13]
  i1258.UnderlineThickness = i1259[14]
  i1258.strikethrough = i1259[15]
  i1258.strikethroughThickness = i1259[16]
  i1258.TabWidth = i1259[17]
  i1258.Padding = i1259[18]
  i1258.AtlasWidth = i1259[19]
  i1258.AtlasHeight = i1259[20]
  return i1258
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.x = i1263[1]
  i1262.y = i1263[2]
  i1262.width = i1263[3]
  i1262.height = i1263[4]
  i1262.xOffset = i1263[5]
  i1262.yOffset = i1263[6]
  i1262.xAdvance = i1263[7]
  i1262.scale = i1263[8]
  return i1262
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.KerningTable' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.KerningPair', i1267[i + 0]));
  }
  i1264.kerningPairs = i1266
  return i1264
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.KerningPair' )
  var i1271 = data
  i1270.xOffset = i1271[0]
  i1270.m_FirstGlyph = i1271[1]
  i1270.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1271[2], i1270.m_FirstGlyphAdjustments)
  i1270.m_SecondGlyph = i1271[3]
  i1270.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1271[4], i1270.m_SecondGlyphAdjustments)
  i1270.m_IgnoreSpacingAdjustments = !!i1271[5]
  return i1270
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1275[i + 0]));
  }
  i1272.m_GlyphPairAdjustmentRecords = i1274
  return i1272
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1279 = data
  i1278.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1279[0], i1278.m_FirstAdjustmentRecord)
  i1278.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1279[1], i1278.m_SecondAdjustmentRecord)
  i1278.m_FeatureLookupFlags = i1279[2]
  return i1278
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1283 = data
  i1282.sourceFontFileName = i1283[0]
  i1282.sourceFontFileGUID = i1283[1]
  i1282.pointSizeSamplingMode = i1283[2]
  i1282.pointSize = i1283[3]
  i1282.padding = i1283[4]
  i1282.packingMode = i1283[5]
  i1282.atlasWidth = i1283[6]
  i1282.atlasHeight = i1283[7]
  i1282.characterSetSelectionMode = i1283[8]
  i1282.characterSequence = i1283[9]
  i1282.referencedFontAssetGUID = i1283[10]
  i1282.referencedTextAssetGUID = i1283[11]
  i1282.fontStyle = i1283[12]
  i1282.fontStyleModifier = i1283[13]
  i1282.renderMode = i1283[14]
  i1282.includeFontFeatures = !!i1283[15]
  return i1282
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'regularTypeface')
  request.r(i1287[2], i1287[3], 0, i1286, 'italicTypeface')
  return i1286
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i1288 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i1291[i + 0]) );
  }
  i1288.m_CustomBlends = i1290
  return i1288
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i1294 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i1295 = data
  i1294.m_From = i1295[0]
  i1294.m_To = i1295[1]
  i1294.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i1295[2], i1294.m_Blend)
  return i1294
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i1299[i + 0]) );
  }
  i1296.PositionNoise = i1298
  var i1301 = i1297[1]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i1301[i + 0]) );
  }
  i1296.OrientationNoise = i1300
  return i1296
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i1304 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i1305 = data
  i1304.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i1305[0], i1304.X)
  i1304.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i1305[1], i1304.Y)
  i1304.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i1305[2], i1304.Z)
  return i1304
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i1306 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i1307 = data
  i1306.Frequency = i1307[0]
  i1306.Amplitude = i1307[1]
  i1306.Constant = !!i1307[2]
  return i1306
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i1308 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('ScenarioFour.CameraFov', i1311[i + 0]) );
  }
  i1308._fovList = i1310
  return i1308
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i1314 = root || request.c( 'ScenarioFour.CameraFov' )
  var i1315 = data
  i1314._cameraType = i1315[0]
  i1314._landscape = i1315[1]
  i1314._portrait = i1315[2]
  return i1314
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1316 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1317 = data
  i1316.useSafeMode = !!i1317[0]
  i1316.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1317[1], i1316.safeModeOptions)
  i1316.timeScale = i1317[2]
  i1316.useSmoothDeltaTime = !!i1317[3]
  i1316.maxSmoothUnscaledTime = i1317[4]
  i1316.rewindCallbackMode = i1317[5]
  i1316.showUnityEditorReport = !!i1317[6]
  i1316.logBehaviour = i1317[7]
  i1316.drawGizmos = !!i1317[8]
  i1316.defaultRecyclable = !!i1317[9]
  i1316.defaultAutoPlay = i1317[10]
  i1316.defaultUpdateType = i1317[11]
  i1316.defaultTimeScaleIndependent = !!i1317[12]
  i1316.defaultEaseType = i1317[13]
  i1316.defaultEaseOvershootOrAmplitude = i1317[14]
  i1316.defaultEasePeriod = i1317[15]
  i1316.defaultAutoKill = !!i1317[16]
  i1316.defaultLoopType = i1317[17]
  i1316.debugMode = !!i1317[18]
  i1316.debugStoreTargetId = !!i1317[19]
  i1316.showPreviewPanel = !!i1317[20]
  i1316.storeSettingsLocation = i1317[21]
  i1316.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1317[22], i1316.modules)
  i1316.createASMDEF = !!i1317[23]
  i1316.showPlayingTweens = !!i1317[24]
  i1316.showPausedTweens = !!i1317[25]
  return i1316
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1318 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1319 = data
  i1318.logBehaviour = i1319[0]
  i1318.nestedTweenFailureBehaviour = i1319[1]
  return i1318
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1320 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1321 = data
  i1320.showPanel = !!i1321[0]
  i1320.audioEnabled = !!i1321[1]
  i1320.physicsEnabled = !!i1321[2]
  i1320.physics2DEnabled = !!i1321[3]
  i1320.spriteEnabled = !!i1321[4]
  i1320.uiEnabled = !!i1321[5]
  i1320.textMeshProEnabled = !!i1321[6]
  i1320.tk2DEnabled = !!i1321[7]
  i1320.deAudioEnabled = !!i1321[8]
  i1320.deUnityExtendedEnabled = !!i1321[9]
  i1320.epoOutlineEnabled = !!i1321[10]
  return i1320
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_Settings' )
  var i1323 = data
  i1322.m_enableWordWrapping = !!i1323[0]
  i1322.m_enableKerning = !!i1323[1]
  i1322.m_enableExtraPadding = !!i1323[2]
  i1322.m_enableTintAllSprites = !!i1323[3]
  i1322.m_enableParseEscapeCharacters = !!i1323[4]
  i1322.m_EnableRaycastTarget = !!i1323[5]
  i1322.m_GetFontFeaturesAtRuntime = !!i1323[6]
  i1322.m_missingGlyphCharacter = i1323[7]
  i1322.m_warningsDisabled = !!i1323[8]
  request.r(i1323[9], i1323[10], 0, i1322, 'm_defaultFontAsset')
  i1322.m_defaultFontAssetPath = i1323[11]
  i1322.m_defaultFontSize = i1323[12]
  i1322.m_defaultAutoSizeMinRatio = i1323[13]
  i1322.m_defaultAutoSizeMaxRatio = i1323[14]
  i1322.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1323[15], i1323[16] )
  i1322.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1323[17], i1323[18] )
  i1322.m_autoSizeTextContainer = !!i1323[19]
  i1322.m_IsTextObjectScaleStatic = !!i1323[20]
  var i1325 = i1323[21]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1322.m_fallbackFontAssets = i1324
  i1322.m_matchMaterialPreset = !!i1323[22]
  request.r(i1323[23], i1323[24], 0, i1322, 'm_defaultSpriteAsset')
  i1322.m_defaultSpriteAssetPath = i1323[25]
  i1322.m_enableEmojiSupport = !!i1323[26]
  i1322.m_MissingCharacterSpriteUnicode = i1323[27]
  i1322.m_defaultColorGradientPresetsPath = i1323[28]
  request.r(i1323[29], i1323[30], 0, i1322, 'm_defaultStyleSheet')
  i1322.m_StyleSheetsResourcePath = i1323[31]
  request.r(i1323[32], i1323[33], 0, i1322, 'm_leadingCharacters')
  request.r(i1323[34], i1323[35], 0, i1322, 'm_followingCharacters')
  i1322.m_UseModernHangulLineBreakingRules = !!i1323[36]
  return i1322
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1327 = data
  i1326.m_GlyphIndex = i1327[0]
  i1326.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1327[1], i1326.m_GlyphValueRecord)
  return i1326
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1329 = data
  i1328.m_XPlacement = i1329[0]
  i1328.m_YPlacement = i1329[1]
  i1328.m_XAdvance = i1329[2]
  i1328.m_YAdvance = i1329[3]
  return i1328
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1331 = data
  i1330.hashCode = i1331[0]
  request.r(i1331[1], i1331[2], 0, i1330, 'material')
  i1330.materialHashCode = i1331[3]
  request.r(i1331[4], i1331[5], 0, i1330, 'spriteSheet')
  var i1333 = i1331[6]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.TMP_Sprite', i1333[i + 0]));
  }
  i1330.spriteInfoList = i1332
  var i1335 = i1331[7]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 1, i1334, '')
  }
  i1330.fallbackSpriteAssets = i1334
  i1330.m_Version = i1331[8]
  i1330.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1331[9], i1330.m_FaceInfo)
  var i1337 = i1331[10]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_SpriteCharacter', i1337[i + 0]));
  }
  i1330.m_SpriteCharacterTable = i1336
  var i1339 = i1331[11]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('TMPro.TMP_SpriteGlyph', i1339[i + 0]));
  }
  i1330.m_SpriteGlyphTable = i1338
  return i1330
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.hashCode = i1343[1]
  i1342.unicode = i1343[2]
  i1342.pivot = new pc.Vec2( i1343[3], i1343[4] )
  request.r(i1343[5], i1343[6], 0, i1342, 'sprite')
  i1342.id = i1343[7]
  i1342.x = i1343[8]
  i1342.y = i1343[9]
  i1342.width = i1343[10]
  i1342.height = i1343[11]
  i1342.xOffset = i1343[12]
  i1342.yOffset = i1343[13]
  i1342.xAdvance = i1343[14]
  i1342.scale = i1343[15]
  return i1342
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1349 = data
  i1348.m_Name = i1349[0]
  i1348.m_HashCode = i1349[1]
  i1348.m_ElementType = i1349[2]
  i1348.m_Unicode = i1349[3]
  i1348.m_GlyphIndex = i1349[4]
  i1348.m_Scale = i1349[5]
  return i1348
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'sprite')
  i1352.m_Index = i1353[2]
  i1352.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1353[3], i1352.m_Metrics)
  i1352.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1353[4], i1352.m_GlyphRect)
  i1352.m_Scale = i1353[5]
  i1352.m_AtlasIndex = i1353[6]
  return i1352
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_Style', i1357[i + 0]));
  }
  i1354.m_StyleList = i1356
  return i1354
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_Style' )
  var i1361 = data
  i1360.m_Name = i1361[0]
  i1360.m_HashCode = i1361[1]
  i1360.m_OpeningDefinition = i1361[2]
  i1360.m_ClosingDefinition = i1361[3]
  i1360.m_OpeningTagArray = i1361[4]
  i1360.m_ClosingTagArray = i1361[5]
  i1360.m_OpeningTagUnicodeArray = i1361[6]
  i1360.m_ClosingTagUnicodeArray = i1361[7]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1365[i + 0]) );
  }
  i1362.files = i1364
  i1362.componentToPrefabIds = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1369 = data
  i1368.path = i1369[0]
  request.r(i1369[1], i1369[2], 0, i1368, 'unityObject')
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1373[i + 0]) );
  }
  i1370.scriptsExecutionOrder = i1372
  var i1375 = i1371[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1375[i + 0]) );
  }
  i1370.sortingLayers = i1374
  var i1377 = i1371[2]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1377[i + 0]) );
  }
  i1370.cullingLayers = i1376
  i1370.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1371[3], i1370.timeSettings)
  i1370.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1371[4], i1370.physicsSettings)
  i1370.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1371[5], i1370.physics2DSettings)
  i1370.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1371[6], i1370.qualitySettings)
  i1370.enableRealtimeShadows = !!i1371[7]
  i1370.autoInstantiatePrefabs = !!i1371[8]
  i1370.enableAutoInstancing = !!i1371[9]
  i1370.lightmapEncodingQuality = i1371[10]
  i1370.desiredColorSpace = i1371[11]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.value = i1381[1]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1385 = data
  i1384.id = i1385[0]
  i1384.name = i1385[1]
  i1384.value = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1389 = data
  i1388.id = i1389[0]
  i1388.name = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1391 = data
  i1390.fixedDeltaTime = i1391[0]
  i1390.maximumDeltaTime = i1391[1]
  i1390.timeScale = i1391[2]
  i1390.maximumParticleTimestep = i1391[3]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1393 = data
  i1392.gravity = new pc.Vec3( i1393[0], i1393[1], i1393[2] )
  i1392.defaultSolverIterations = i1393[3]
  i1392.bounceThreshold = i1393[4]
  i1392.autoSyncTransforms = !!i1393[5]
  i1392.autoSimulation = !!i1393[6]
  var i1395 = i1393[7]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1395[i + 0]) );
  }
  i1392.collisionMatrix = i1394
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1399 = data
  i1398.enabled = !!i1399[0]
  i1398.layerId = i1399[1]
  i1398.otherLayerId = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'material')
  i1400.gravity = new pc.Vec2( i1401[2], i1401[3] )
  i1400.positionIterations = i1401[4]
  i1400.velocityIterations = i1401[5]
  i1400.velocityThreshold = i1401[6]
  i1400.maxLinearCorrection = i1401[7]
  i1400.maxAngularCorrection = i1401[8]
  i1400.maxTranslationSpeed = i1401[9]
  i1400.maxRotationSpeed = i1401[10]
  i1400.timeToSleep = i1401[11]
  i1400.linearSleepTolerance = i1401[12]
  i1400.angularSleepTolerance = i1401[13]
  i1400.defaultContactOffset = i1401[14]
  i1400.autoSimulation = !!i1401[15]
  i1400.queriesHitTriggers = !!i1401[16]
  i1400.queriesStartInColliders = !!i1401[17]
  i1400.callbacksOnDisable = !!i1401[18]
  i1400.reuseCollisionCallbacks = !!i1401[19]
  i1400.autoSyncTransforms = !!i1401[20]
  var i1403 = i1401[21]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1403[i + 0]) );
  }
  i1400.collisionMatrix = i1402
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.layerId = i1407[1]
  i1406.otherLayerId = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1409 = data
  var i1411 = i1409[0]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1411[i + 0]) );
  }
  i1408.qualityLevels = i1410
  var i1413 = i1409[1]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( i1413[i + 0] );
  }
  i1408.names = i1412
  i1408.shadows = i1409[2]
  i1408.anisotropicFiltering = i1409[3]
  i1408.antiAliasing = i1409[4]
  i1408.lodBias = i1409[5]
  i1408.shadowCascades = i1409[6]
  i1408.shadowDistance = i1409[7]
  i1408.shadowmaskMode = i1409[8]
  i1408.shadowProjection = i1409[9]
  i1408.shadowResolution = i1409[10]
  i1408.softParticles = !!i1409[11]
  i1408.softVegetation = !!i1409[12]
  i1408.activeColorSpace = i1409[13]
  i1408.desiredColorSpace = i1409[14]
  i1408.masterTextureLimit = i1409[15]
  i1408.maxQueuedFrames = i1409[16]
  i1408.particleRaycastBudget = i1409[17]
  i1408.pixelLightCount = i1409[18]
  i1408.realtimeReflectionProbes = !!i1409[19]
  i1408.shadowCascade2Split = i1409[20]
  i1408.shadowCascade4Split = new pc.Vec3( i1409[21], i1409[22], i1409[23] )
  i1408.streamingMipmapsActive = !!i1409[24]
  i1408.vSyncCount = i1409[25]
  i1408.asyncUploadBufferSize = i1409[26]
  i1408.asyncUploadTimeSlice = i1409[27]
  i1408.billboardsFaceCameraPosition = !!i1409[28]
  i1408.shadowNearPlaneOffset = i1409[29]
  i1408.streamingMipmapsMemoryBudget = i1409[30]
  i1408.maximumLODLevel = i1409[31]
  i1408.streamingMipmapsAddAllCameras = !!i1409[32]
  i1408.streamingMipmapsMaxLevelReduction = i1409[33]
  i1408.streamingMipmapsRenderersPerFrame = i1409[34]
  i1408.resolutionScalingFixedDPIFactor = i1409[35]
  i1408.streamingMipmapsMaxFileIORequests = i1409[36]
  i1408.currentQualityLevel = i1409[37]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1419 = data
  i1418.weight = i1419[0]
  i1418.vertices = i1419[1]
  i1418.normals = i1419[2]
  i1418.tangents = i1419[3]
  return i1418
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'm_ObjectArgument')
  i1420.m_ObjectArgumentAssemblyTypeName = i1421[2]
  i1420.m_IntArgument = i1421[3]
  i1420.m_FloatArgument = i1421[4]
  i1420.m_StringArgument = i1421[5]
  i1420.m_BoolArgument = !!i1421[6]
  return i1420
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1422 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1423 = data
  i1422.xPlacement = i1423[0]
  i1422.yPlacement = i1423[1]
  i1422.xAdvance = i1423[2]
  i1422.yAdvance = i1423[3]
  return i1422
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[19],"86":[35],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[96],"97":[96],"98":[96],"99":[96],"100":[96],"101":[96],"102":[96],"103":[96],"104":[96],"105":[96],"106":[96],"107":[96],"108":[96],"109":[35],"110":[8],"111":[112],"113":[112],"40":[39],"55":[17],"59":[17],"67":[17],"16":[17],"114":[35],"115":[116],"117":[35],"118":[39],"119":[49,39],"120":[8],"121":[49,39],"122":[39],"123":[8,39],"51":[39,49],"124":[39],"125":[39],"126":[39],"43":[40],"47":[49,39],"127":[39],"42":[40],"128":[39],"129":[39],"130":[39],"131":[39],"132":[39],"133":[39],"134":[39],"50":[39],"135":[39],"136":[49,39],"137":[39],"138":[39],"139":[39],"140":[39],"141":[49,39],"142":[39],"143":[70],"144":[70],"71":[70],"145":[70],"146":[35],"147":[35]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ScenarioFour.Path","ScenarioFour.PathPoint","ScenarioFour.Bullet","UnityEngine.SphereCollider","ScenarioFour.Enemy","ScenarioFour.EnemyAnimatedModel","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","ScenarioFour.Director","ScenarioFour.Cameras","Cinemachine.CinemachineVirtualCamera","ScenarioFour.CameraFovList","CameraFovChanger","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","Cinemachine.CinemachineBasicMultiChannelPerlin","Cinemachine.NoiseSettings","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","ScenarioFour.Enemies","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ChooseHandler","Cinemachine.CinemachineBlenderSettings","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.CanvasGroup","JumpHandler","AnimationHandler","EffectHandler","UIHandler","EnemyPool","Enemy","StartCamera","Cinemachine.CinemachineSmoothPath","ResolutionHandler","CameraHandler","Cinemachine.CinemachineTrackedDolly","Stalker","ScenarioFour.Girl","ScenarioFour.AnimatedModel","ScenarioFour.UISwitcher","ScenarioFour.PulseTransform","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Rendering.PostProcessing.PostProcessLayer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "CRSEDPlayableAd";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "16.2";

Deserializers.lunaVersion = "4.0.0";

Deserializers.lunaSHA = "5046d9954fe68e1599eaaf3688d6669074172d3a";

Deserializers.creativeName = "Eric_draft";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1151";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4230";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CRSEDPlayableAd";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "0c3835d4-6edf-4e54-bcf5-7bcac2590448";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

