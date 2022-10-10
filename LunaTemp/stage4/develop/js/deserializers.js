var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4746 = root || request.c( 'UnityEngine.JointSpring' )
  var i4747 = data
  i4746.spring = i4747[0]
  i4746.damper = i4747[1]
  i4746.targetPosition = i4747[2]
  return i4746
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4748 = root || request.c( 'UnityEngine.JointMotor' )
  var i4749 = data
  i4748.m_TargetVelocity = i4749[0]
  i4748.m_Force = i4749[1]
  i4748.m_FreeSpin = i4749[2]
  return i4748
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4750 = root || request.c( 'UnityEngine.JointLimits' )
  var i4751 = data
  i4750.m_Min = i4751[0]
  i4750.m_Max = i4751[1]
  i4750.m_Bounciness = i4751[2]
  i4750.m_BounceMinVelocity = i4751[3]
  i4750.m_ContactDistance = i4751[4]
  i4750.minBounce = i4751[5]
  i4750.maxBounce = i4751[6]
  return i4750
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4752 = root || request.c( 'UnityEngine.JointDrive' )
  var i4753 = data
  i4752.m_PositionSpring = i4753[0]
  i4752.m_PositionDamper = i4753[1]
  i4752.m_MaximumForce = i4753[2]
  return i4752
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4754 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4755 = data
  i4754.m_Spring = i4755[0]
  i4754.m_Damper = i4755[1]
  return i4754
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4756 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4757 = data
  i4756.m_Limit = i4757[0]
  i4756.m_Bounciness = i4757[1]
  i4756.m_ContactDistance = i4757[2]
  return i4756
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4758 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4759 = data
  i4758.m_ExtremumSlip = i4759[0]
  i4758.m_ExtremumValue = i4759[1]
  i4758.m_AsymptoteSlip = i4759[2]
  i4758.m_AsymptoteValue = i4759[3]
  i4758.m_Stiffness = i4759[4]
  return i4758
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4760 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4761 = data
  i4760.m_LowerAngle = i4761[0]
  i4760.m_UpperAngle = i4761[1]
  return i4760
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4762 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4763 = data
  i4762.m_MotorSpeed = i4763[0]
  i4762.m_MaximumMotorTorque = i4763[1]
  return i4762
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4764 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4765 = data
  i4764.m_DampingRatio = i4765[0]
  i4764.m_Frequency = i4765[1]
  i4764.m_Angle = i4765[2]
  return i4764
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4766 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4767 = data
  i4766.m_LowerTranslation = i4767[0]
  i4766.m_UpperTranslation = i4767[1]
  return i4766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4768 = root || new pc.UnityMaterial()
  var i4769 = data
  i4768.name = i4769[0]
  request.r(i4769[1], i4769[2], 0, i4768, 'shader')
  i4768.renderQueue = i4769[3]
  i4768.enableInstancing = !!i4769[4]
  var i4771 = i4769[5]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 1) {
    i4770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4771[i + 0]) );
  }
  i4768.floatParameters = i4770
  var i4773 = i4769[6]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 1) {
    i4772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4773[i + 0]) );
  }
  i4768.colorParameters = i4772
  var i4775 = i4769[7]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 1) {
    i4774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4775[i + 0]) );
  }
  i4768.vectorParameters = i4774
  var i4777 = i4769[8]
  var i4776 = []
  for(var i = 0; i < i4777.length; i += 1) {
    i4776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4777[i + 0]) );
  }
  i4768.textureParameters = i4776
  var i4779 = i4769[9]
  var i4778 = []
  for(var i = 0; i < i4779.length; i += 1) {
    i4778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4779[i + 0]) );
  }
  i4768.materialFlags = i4778
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4783 = data
  i4782.name = i4783[0]
  i4782.value = i4783[1]
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4787 = data
  i4786.name = i4787[0]
  i4786.value = new pc.Color(i4787[1], i4787[2], i4787[3], i4787[4])
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4791 = data
  i4790.name = i4791[0]
  i4790.value = new pc.Vec4( i4791[1], i4791[2], i4791[3], i4791[4] )
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4795 = data
  i4794.name = i4795[0]
  request.r(i4795[1], i4795[2], 0, i4794, 'value')
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4799 = data
  i4798.name = i4799[0]
  i4798.enabled = !!i4799[1]
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4801 = data
  i4800.name = i4801[0]
  i4800.width = i4801[1]
  i4800.height = i4801[2]
  i4800.mipmapCount = i4801[3]
  i4800.anisoLevel = i4801[4]
  i4800.filterMode = i4801[5]
  i4800.hdr = !!i4801[6]
  i4800.format = i4801[7]
  i4800.wrapMode = i4801[8]
  i4800.alphaIsTransparency = !!i4801[9]
  i4800.alphaSource = i4801[10]
  return i4800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4803 = data
  i4802.position = new pc.Vec3( i4803[0], i4803[1], i4803[2] )
  i4802.scale = new pc.Vec3( i4803[3], i4803[4], i4803[5] )
  i4802.rotation = new pc.Quat(i4803[6], i4803[7], i4803[8], i4803[9])
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4805 = data
  i4804.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4805[0], i4804.main)
  i4804.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4805[1], i4804.colorBySpeed)
  i4804.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4805[2], i4804.colorOverLifetime)
  i4804.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4805[3], i4804.emission)
  i4804.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4805[4], i4804.rotationBySpeed)
  i4804.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4805[5], i4804.rotationOverLifetime)
  i4804.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4805[6], i4804.shape)
  i4804.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4805[7], i4804.sizeBySpeed)
  i4804.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4805[8], i4804.sizeOverLifetime)
  i4804.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4805[9], i4804.textureSheetAnimation)
  i4804.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4805[10], i4804.velocityOverLifetime)
  i4804.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4805[11], i4804.noise)
  i4804.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4805[12], i4804.inheritVelocity)
  i4804.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4805[13], i4804.forceOverLifetime)
  i4804.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4805[14], i4804.limitVelocityOverLifetime)
  i4804.useAutoRandomSeed = !!i4805[15]
  i4804.randomSeed = i4805[16]
  return i4804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4806 = root || new pc.ParticleSystemMain()
  var i4807 = data
  i4806.duration = i4807[0]
  i4806.loop = !!i4807[1]
  i4806.prewarm = !!i4807[2]
  i4806.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[3], i4806.startDelay)
  i4806.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[4], i4806.startLifetime)
  i4806.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[5], i4806.startSpeed)
  i4806.startSize3D = !!i4807[6]
  i4806.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[7], i4806.startSizeX)
  i4806.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[8], i4806.startSizeY)
  i4806.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[9], i4806.startSizeZ)
  i4806.startRotation3D = !!i4807[10]
  i4806.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[11], i4806.startRotationX)
  i4806.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[12], i4806.startRotationY)
  i4806.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[13], i4806.startRotationZ)
  i4806.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4807[14], i4806.startColor)
  i4806.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4807[15], i4806.gravityModifier)
  i4806.simulationSpace = i4807[16]
  request.r(i4807[17], i4807[18], 0, i4806, 'customSimulationSpace')
  i4806.simulationSpeed = i4807[19]
  i4806.useUnscaledTime = !!i4807[20]
  i4806.scalingMode = i4807[21]
  i4806.playOnAwake = !!i4807[22]
  i4806.maxParticles = i4807[23]
  i4806.emitterVelocityMode = i4807[24]
  i4806.stopAction = i4807[25]
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4808 = root || new pc.MinMaxCurve()
  var i4809 = data
  i4808.mode = i4809[0]
  i4808.curveMin = new pc.AnimationCurve( { keys_flow: i4809[1] } )
  i4808.curveMax = new pc.AnimationCurve( { keys_flow: i4809[2] } )
  i4808.curveMultiplier = i4809[3]
  i4808.constantMin = i4809[4]
  i4808.constantMax = i4809[5]
  return i4808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4810 = root || new pc.MinMaxGradient()
  var i4811 = data
  i4810.mode = i4811[0]
  i4810.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4811[1], i4810.gradientMin)
  i4810.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4811[2], i4810.gradientMax)
  i4810.colorMin = new pc.Color(i4811[3], i4811[4], i4811[5], i4811[6])
  i4810.colorMax = new pc.Color(i4811[7], i4811[8], i4811[9], i4811[10])
  return i4810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4813 = data
  i4812.mode = i4813[0]
  var i4815 = i4813[1]
  var i4814 = []
  for(var i = 0; i < i4815.length; i += 1) {
    i4814.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4815[i + 0]) );
  }
  i4812.colorKeys = i4814
  var i4817 = i4813[2]
  var i4816 = []
  for(var i = 0; i < i4817.length; i += 1) {
    i4816.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4817[i + 0]) );
  }
  i4812.alphaKeys = i4816
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4818 = root || new pc.ParticleSystemColorBySpeed()
  var i4819 = data
  i4818.enabled = !!i4819[0]
  i4818.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4819[1], i4818.color)
  i4818.range = new pc.Vec2( i4819[2], i4819[3] )
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4823 = data
  i4822.color = new pc.Color(i4823[0], i4823[1], i4823[2], i4823[3])
  i4822.time = i4823[4]
  return i4822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4827 = data
  i4826.alpha = i4827[0]
  i4826.time = i4827[1]
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4828 = root || new pc.ParticleSystemColorOverLifetime()
  var i4829 = data
  i4828.enabled = !!i4829[0]
  i4828.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4829[1], i4828.color)
  return i4828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4830 = root || new pc.ParticleSystemEmitter()
  var i4831 = data
  i4830.enabled = !!i4831[0]
  i4830.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4831[1], i4830.rateOverTime)
  i4830.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4831[2], i4830.rateOverDistance)
  var i4833 = i4831[3]
  var i4832 = []
  for(var i = 0; i < i4833.length; i += 1) {
    i4832.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4833[i + 0]) );
  }
  i4830.bursts = i4832
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4836 = root || new pc.ParticleSystemBurst()
  var i4837 = data
  i4836.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4837[0], i4836.count)
  i4836.cycleCount = i4837[1]
  i4836.minCount = i4837[2]
  i4836.maxCount = i4837[3]
  i4836.repeatInterval = i4837[4]
  i4836.time = i4837[5]
  return i4836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4838 = root || new pc.ParticleSystemRotationBySpeed()
  var i4839 = data
  i4838.enabled = !!i4839[0]
  i4838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4839[1], i4838.x)
  i4838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4839[2], i4838.y)
  i4838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4839[3], i4838.z)
  i4838.separateAxes = !!i4839[4]
  i4838.range = new pc.Vec2( i4839[5], i4839[6] )
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4840 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4841 = data
  i4840.enabled = !!i4841[0]
  i4840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4841[1], i4840.x)
  i4840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4841[2], i4840.y)
  i4840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4841[3], i4840.z)
  i4840.separateAxes = !!i4841[4]
  return i4840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4842 = root || new pc.ParticleSystemShape()
  var i4843 = data
  i4842.enabled = !!i4843[0]
  i4842.shapeType = i4843[1]
  i4842.randomDirectionAmount = i4843[2]
  i4842.sphericalDirectionAmount = i4843[3]
  i4842.randomPositionAmount = i4843[4]
  i4842.alignToDirection = !!i4843[5]
  i4842.radius = i4843[6]
  i4842.radiusMode = i4843[7]
  i4842.radiusSpread = i4843[8]
  i4842.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[9], i4842.radiusSpeed)
  i4842.radiusThickness = i4843[10]
  i4842.angle = i4843[11]
  i4842.length = i4843[12]
  i4842.boxThickness = new pc.Vec3( i4843[13], i4843[14], i4843[15] )
  i4842.meshShapeType = i4843[16]
  request.r(i4843[17], i4843[18], 0, i4842, 'mesh')
  request.r(i4843[19], i4843[20], 0, i4842, 'meshRenderer')
  request.r(i4843[21], i4843[22], 0, i4842, 'skinnedMeshRenderer')
  i4842.useMeshMaterialIndex = !!i4843[23]
  i4842.meshMaterialIndex = i4843[24]
  i4842.useMeshColors = !!i4843[25]
  i4842.normalOffset = i4843[26]
  i4842.arc = i4843[27]
  i4842.arcMode = i4843[28]
  i4842.arcSpread = i4843[29]
  i4842.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4843[30], i4842.arcSpeed)
  i4842.donutRadius = i4843[31]
  i4842.position = new pc.Vec3( i4843[32], i4843[33], i4843[34] )
  i4842.rotation = new pc.Vec3( i4843[35], i4843[36], i4843[37] )
  i4842.scale = new pc.Vec3( i4843[38], i4843[39], i4843[40] )
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4844 = root || new pc.ParticleSystemSizeBySpeed()
  var i4845 = data
  i4844.enabled = !!i4845[0]
  i4844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[1], i4844.x)
  i4844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[2], i4844.y)
  i4844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4845[3], i4844.z)
  i4844.separateAxes = !!i4845[4]
  i4844.range = new pc.Vec2( i4845[5], i4845[6] )
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4846 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4847 = data
  i4846.enabled = !!i4847[0]
  i4846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4847[1], i4846.x)
  i4846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4847[2], i4846.y)
  i4846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4847[3], i4846.z)
  i4846.separateAxes = !!i4847[4]
  return i4846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4848 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4849 = data
  i4848.enabled = !!i4849[0]
  i4848.mode = i4849[1]
  i4848.animation = i4849[2]
  i4848.numTilesX = i4849[3]
  i4848.numTilesY = i4849[4]
  i4848.useRandomRow = !!i4849[5]
  i4848.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4849[6], i4848.frameOverTime)
  i4848.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4849[7], i4848.startFrame)
  i4848.cycleCount = i4849[8]
  i4848.rowIndex = i4849[9]
  i4848.flipU = i4849[10]
  i4848.flipV = i4849[11]
  i4848.spriteCount = i4849[12]
  var i4851 = i4849[13]
  var i4850 = []
  for(var i = 0; i < i4851.length; i += 2) {
  request.r(i4851[i + 0], i4851[i + 1], 2, i4850, '')
  }
  i4848.sprites = i4850
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4854 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4855 = data
  i4854.enabled = !!i4855[0]
  i4854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4855[1], i4854.x)
  i4854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4855[2], i4854.y)
  i4854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4855[3], i4854.z)
  i4854.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4855[4], i4854.speedModifier)
  i4854.space = i4855[5]
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4856 = root || new pc.ParticleSystemNoise()
  var i4857 = data
  i4856.enabled = !!i4857[0]
  i4856.separateAxes = !!i4857[1]
  i4856.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[2], i4856.strengthX)
  i4856.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[3], i4856.strengthY)
  i4856.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[4], i4856.strengthZ)
  i4856.frequency = i4857[5]
  i4856.damping = !!i4857[6]
  i4856.octaveCount = i4857[7]
  i4856.octaveMultiplier = i4857[8]
  i4856.octaveScale = i4857[9]
  i4856.quality = i4857[10]
  i4856.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[11], i4856.scrollSpeed)
  i4856.scrollSpeedMultiplier = i4857[12]
  i4856.remapEnabled = !!i4857[13]
  i4856.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[14], i4856.remapX)
  i4856.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[15], i4856.remapY)
  i4856.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[16], i4856.remapZ)
  i4856.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[17], i4856.positionAmount)
  i4856.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[18], i4856.rotationAmount)
  i4856.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4857[19], i4856.sizeAmount)
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4858 = root || new pc.ParticleSystemInheritVelocity()
  var i4859 = data
  i4858.enabled = !!i4859[0]
  i4858.mode = i4859[1]
  i4858.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4859[2], i4858.curve)
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4860 = root || new pc.ParticleSystemForceOverLifetime()
  var i4861 = data
  i4860.enabled = !!i4861[0]
  i4860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4861[1], i4860.x)
  i4860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4861[2], i4860.y)
  i4860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4861[3], i4860.z)
  i4860.space = i4861[4]
  i4860.randomized = !!i4861[5]
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4862 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4863 = data
  i4862.enabled = !!i4863[0]
  i4862.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[1], i4862.limitX)
  i4862.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[2], i4862.limitY)
  i4862.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[3], i4862.limitZ)
  i4862.dampen = i4863[4]
  i4862.separateAxes = !!i4863[5]
  i4862.space = i4863[6]
  i4862.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4863[7], i4862.drag)
  i4862.multiplyDragByParticleSize = !!i4863[8]
  i4862.multiplyDragByParticleVelocity = !!i4863[9]
  return i4862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4865 = data
  i4864.enabled = !!i4865[0]
  request.r(i4865[1], i4865[2], 0, i4864, 'sharedMaterial')
  var i4867 = i4865[3]
  var i4866 = []
  for(var i = 0; i < i4867.length; i += 2) {
  request.r(i4867[i + 0], i4867[i + 1], 2, i4866, '')
  }
  i4864.sharedMaterials = i4866
  i4864.receiveShadows = !!i4865[4]
  i4864.shadowCastingMode = i4865[5]
  i4864.sortingLayerID = i4865[6]
  i4864.sortingOrder = i4865[7]
  i4864.lightmapIndex = i4865[8]
  i4864.lightmapSceneIndex = i4865[9]
  i4864.lightmapScaleOffset = new pc.Vec4( i4865[10], i4865[11], i4865[12], i4865[13] )
  i4864.lightProbeUsage = i4865[14]
  i4864.reflectionProbeUsage = i4865[15]
  request.r(i4865[16], i4865[17], 0, i4864, 'mesh')
  i4864.meshCount = i4865[18]
  i4864.activeVertexStreamsCount = i4865[19]
  i4864.alignment = i4865[20]
  i4864.renderMode = i4865[21]
  i4864.sortMode = i4865[22]
  i4864.lengthScale = i4865[23]
  i4864.velocityScale = i4865[24]
  i4864.cameraVelocityScale = i4865[25]
  i4864.normalDirection = i4865[26]
  i4864.sortingFudge = i4865[27]
  i4864.minParticleSize = i4865[28]
  i4864.maxParticleSize = i4865[29]
  i4864.pivot = new pc.Vec3( i4865[30], i4865[31], i4865[32] )
  request.r(i4865[33], i4865[34], 0, i4864, 'trailMaterial')
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4871 = data
  i4870.name = i4871[0]
  i4870.tag = i4871[1]
  i4870.enabled = !!i4871[2]
  i4870.isStatic = !!i4871[3]
  i4870.layer = i4871[4]
  return i4870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4873 = data
  request.r(i4873[0], i4873[1], 0, i4872, 'sharedMesh')
  return i4872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4875 = data
  request.r(i4875[0], i4875[1], 0, i4874, 'additionalVertexStreams')
  i4874.enabled = !!i4875[2]
  request.r(i4875[3], i4875[4], 0, i4874, 'sharedMaterial')
  var i4877 = i4875[5]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 2) {
  request.r(i4877[i + 0], i4877[i + 1], 2, i4876, '')
  }
  i4874.sharedMaterials = i4876
  i4874.receiveShadows = !!i4875[6]
  i4874.shadowCastingMode = i4875[7]
  i4874.sortingLayerID = i4875[8]
  i4874.sortingOrder = i4875[9]
  i4874.lightmapIndex = i4875[10]
  i4874.lightmapSceneIndex = i4875[11]
  i4874.lightmapScaleOffset = new pc.Vec4( i4875[12], i4875[13], i4875[14], i4875[15] )
  i4874.lightProbeUsage = i4875[16]
  i4874.reflectionProbeUsage = i4875[17]
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4879 = data
  i4878.name = i4879[0]
  i4878.halfPrecision = !!i4879[1]
  i4878.vertexCount = i4879[2]
  i4878.aabb = i4879[3]
  var i4881 = i4879[4]
  var i4880 = []
  for(var i = 0; i < i4881.length; i += 1) {
    i4880.push( !!i4881[i + 0] );
  }
  i4878.streams = i4880
  i4878.vertices = i4879[5]
  var i4883 = i4879[6]
  var i4882 = []
  for(var i = 0; i < i4883.length; i += 1) {
    i4882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4883[i + 0]) );
  }
  i4878.subMeshes = i4882
  var i4885 = i4879[7]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 16) {
    i4884.push( new pc.Mat4().setData(i4885[i + 0], i4885[i + 1], i4885[i + 2], i4885[i + 3],  i4885[i + 4], i4885[i + 5], i4885[i + 6], i4885[i + 7],  i4885[i + 8], i4885[i + 9], i4885[i + 10], i4885[i + 11],  i4885[i + 12], i4885[i + 13], i4885[i + 14], i4885[i + 15]) );
  }
  i4878.bindposes = i4884
  var i4887 = i4879[8]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4887[i + 0]) );
  }
  i4878.blendShapes = i4886
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4893 = data
  i4892.triangles = i4893[0]
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4899 = data
  i4898.name = i4899[0]
  var i4901 = i4899[1]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4901[i + 0]) );
  }
  i4898.frames = i4900
  return i4898
}

Deserializers["ScenarioFour.Path"] = function (request, data, root) {
  var i4902 = root || request.c( 'ScenarioFour.Path' )
  var i4903 = data
  var i4905 = i4903[0]
  var i4904 = []
  for(var i = 0; i < i4905.length; i += 2) {
  request.r(i4905[i + 0], i4905[i + 1], 2, i4904, '')
  }
  i4902._points = i4904
  return i4902
}

Deserializers["ScenarioFour.PathPoint"] = function (request, data, root) {
  var i4908 = root || request.c( 'ScenarioFour.PathPoint' )
  var i4909 = data
  i4908._time = i4909[0]
  return i4908
}

Deserializers["ScenarioFour.Bullet"] = function (request, data, root) {
  var i4910 = root || request.c( 'ScenarioFour.Bullet' )
  var i4911 = data
  i4910._flyTime = i4911[0]
  i4910._flySpeed = i4911[1]
  return i4910
}

Deserializers["ScenarioFour.Enemy"] = function (request, data, root) {
  var i4912 = root || request.c( 'ScenarioFour.Enemy' )
  var i4913 = data
  request.r(i4913[0], i4913[1], 0, i4912, '_animatedModel')
  request.r(i4913[2], i4913[3], 0, i4912, '_bulletTemplate')
  request.r(i4913[4], i4913[5], 0, i4912, '_shootPoint')
  request.r(i4913[6], i4913[7], 0, i4912, '_bloodEffect')
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4915 = data
  request.r(i4915[0], i4915[1], 0, i4914, 'animatorController')
  i4914.updateMode = i4915[2]
  var i4917 = i4915[3]
  var i4916 = []
  for(var i = 0; i < i4917.length; i += 2) {
  request.r(i4917[i + 0], i4917[i + 1], 2, i4916, '')
  }
  i4914.humanBones = i4916
  i4914.enabled = !!i4915[4]
  return i4914
}

Deserializers["ScenarioFour.EnemyAnimatedModel"] = function (request, data, root) {
  var i4920 = root || request.c( 'ScenarioFour.EnemyAnimatedModel' )
  var i4921 = data
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4923 = data
  i4922.enabled = !!i4923[0]
  request.r(i4923[1], i4923[2], 0, i4922, 'sharedMaterial')
  var i4925 = i4923[3]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 2) {
  request.r(i4925[i + 0], i4925[i + 1], 2, i4924, '')
  }
  i4922.sharedMaterials = i4924
  i4922.receiveShadows = !!i4923[4]
  i4922.shadowCastingMode = i4923[5]
  i4922.sortingLayerID = i4923[6]
  i4922.sortingOrder = i4923[7]
  i4922.lightmapIndex = i4923[8]
  i4922.lightmapSceneIndex = i4923[9]
  i4922.lightmapScaleOffset = new pc.Vec4( i4923[10], i4923[11], i4923[12], i4923[13] )
  i4922.lightProbeUsage = i4923[14]
  i4922.reflectionProbeUsage = i4923[15]
  request.r(i4923[16], i4923[17], 0, i4922, 'sharedMesh')
  var i4927 = i4923[18]
  var i4926 = []
  for(var i = 0; i < i4927.length; i += 2) {
  request.r(i4927[i + 0], i4927[i + 1], 2, i4926, '')
  }
  i4922.bones = i4926
  i4922.updateWhenOffscreen = !!i4923[19]
  i4922.localBounds = i4923[20]
  request.r(i4923[21], i4923[22], 0, i4922, 'rootBone')
  var i4929 = i4923[23]
  var i4928 = []
  for(var i = 0; i < i4929.length; i += 1) {
    i4928.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4929[i + 0]) );
  }
  i4922.blendShapesWeights = i4928
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4933 = data
  i4932.weight = i4933[0]
  return i4932
}

Deserializers["ScenarioFour.Director"] = function (request, data, root) {
  var i4934 = root || request.c( 'ScenarioFour.Director' )
  var i4935 = data
  request.r(i4935[0], i4935[1], 0, i4934, '_girl')
  request.r(i4935[2], i4935[3], 0, i4934, '_cameras')
  request.r(i4935[4], i4935[5], 0, i4934, '_uiSwitcher')
  request.r(i4935[6], i4935[7], 0, i4934, '_enemies')
  request.r(i4935[8], i4935[9], 0, i4934, '_teleportEffectStatic')
  var i4937 = i4935[10]
  var i4936 = []
  for(var i = 0; i < i4937.length; i += 1) {
    i4936.push( request.d('ScenarioFour.CameraTiming', i4937[i + 0]) );
  }
  i4934._timings = i4936
  return i4934
}

Deserializers["ScenarioFour.CameraTiming"] = function (request, data, root) {
  var i4940 = root || request.c( 'ScenarioFour.CameraTiming' )
  var i4941 = data
  i4940._timing = i4941[0]
  i4940._cameraType = i4941[1]
  return i4940
}

Deserializers["ScenarioFour.Cameras"] = function (request, data, root) {
  var i4942 = root || request.c( 'ScenarioFour.Cameras' )
  var i4943 = data
  var i4945 = i4943[0]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('ScenarioFour.CreoCamera', i4945[i + 0]) );
  }
  i4942._cameras = i4944
  request.r(i4943[1], i4943[2], 0, i4942, '_camerasFovList')
  request.r(i4943[3], i4943[4], 0, i4942, '_cameraFovChanger')
  return i4942
}

Deserializers["ScenarioFour.CreoCamera"] = function (request, data, root) {
  var i4948 = root || request.c( 'ScenarioFour.CreoCamera' )
  var i4949 = data
  request.r(i4949[0], i4949[1], 0, i4948, '_camera')
  i4948._type = i4949[2]
  return i4948
}

Deserializers["CameraFovChanger"] = function (request, data, root) {
  var i4950 = root || request.c( 'CameraFovChanger' )
  var i4951 = data
  return i4950
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i4952 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i4953 = data
  request.r(i4953[0], i4953[1], 0, i4952, 'm_LookAt')
  request.r(i4953[2], i4953[3], 0, i4952, 'm_Follow')
  i4952.m_Lens = request.d('Cinemachine.LensSettings', i4953[4], i4952.m_Lens)
  i4952.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i4953[5], i4952.m_Transitions)
  var i4955 = i4953[6]
  var i4954 = []
  for(var i = 0; i < i4955.length; i += 1) {
    i4954.push( i4955[i + 0] );
  }
  i4952.m_ExcludedPropertiesInInspector = i4954
  var i4957 = i4953[7]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.push( i4957[i + 0] );
  }
  i4952.m_LockStageInInspector = i4956
  i4952.m_Priority = i4953[8]
  i4952.m_StandbyUpdate = i4953[9]
  i4952.m_LegacyBlendHint = i4953[10]
  request.r(i4953[11], i4953[12], 0, i4952, 'm_ComponentOwner')
  i4952.m_StreamingVersion = i4953[13]
  return i4952
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i4958 = root || request.c( 'Cinemachine.LensSettings' )
  var i4959 = data
  i4958.FieldOfView = i4959[0]
  i4958.OrthographicSize = i4959[1]
  i4958.NearClipPlane = i4959[2]
  i4958.FarClipPlane = i4959[3]
  i4958.Dutch = i4959[4]
  i4958.LensShift = new pc.Vec2( i4959[5], i4959[6] )
  return i4958
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i4960 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i4961 = data
  i4960.m_BlendHint = i4961[0]
  i4960.m_InheritPosition = !!i4961[1]
  i4960.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i4961[2], i4960.m_OnCameraLive)
  return i4960
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i4962 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i4963 = data
  i4962.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4963[0], i4962.m_PersistentCalls)
  return i4962
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4964 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4965 = data
  var i4967 = i4965[0]
  var i4966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4967.length; i += 1) {
    i4966.add(request.d('UnityEngine.Events.PersistentCall', i4967[i + 0]));
  }
  i4964.m_Calls = i4966
  return i4964
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4970 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4971 = data
  request.r(i4971[0], i4971[1], 0, i4970, 'm_Target')
  i4970.m_TargetAssemblyTypeName = i4971[2]
  i4970.m_MethodName = i4971[3]
  i4970.m_Mode = i4971[4]
  i4970.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4971[5], i4970.m_Arguments)
  i4970.m_CallState = i4971[6]
  return i4970
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i4976 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i4977 = data
  return i4976
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i4978 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i4979 = data
  i4978.m_TrackedObjectOffset = new pc.Vec3( i4979[0], i4979[1], i4979[2] )
  i4978.m_LookaheadTime = i4979[3]
  i4978.m_LookaheadSmoothing = i4979[4]
  i4978.m_LookaheadIgnoreY = !!i4979[5]
  i4978.m_HorizontalDamping = i4979[6]
  i4978.m_VerticalDamping = i4979[7]
  i4978.m_ScreenX = i4979[8]
  i4978.m_ScreenY = i4979[9]
  i4978.m_DeadZoneWidth = i4979[10]
  i4978.m_DeadZoneHeight = i4979[11]
  i4978.m_SoftZoneWidth = i4979[12]
  i4978.m_SoftZoneHeight = i4979[13]
  i4978.m_BiasX = i4979[14]
  i4978.m_BiasY = i4979[15]
  i4978.m_CenterOnActivate = !!i4979[16]
  return i4978
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i4980 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i4981 = data
  i4980.m_BindingMode = i4981[0]
  i4980.m_FollowOffset = new pc.Vec3( i4981[1], i4981[2], i4981[3] )
  i4980.m_XDamping = i4981[4]
  i4980.m_YDamping = i4981[5]
  i4980.m_ZDamping = i4981[6]
  i4980.m_AngularDampingMode = i4981[7]
  i4980.m_PitchDamping = i4981[8]
  i4980.m_YawDamping = i4981[9]
  i4980.m_RollDamping = i4981[10]
  i4980.m_AngularDamping = i4981[11]
  return i4980
}

Deserializers["Cinemachine.CinemachineBasicMultiChannelPerlin"] = function (request, data, root) {
  var i4982 = root || request.c( 'Cinemachine.CinemachineBasicMultiChannelPerlin' )
  var i4983 = data
  request.r(i4983[0], i4983[1], 0, i4982, 'm_NoiseProfile')
  i4982.m_PivotOffset = new pc.Vec3( i4983[2], i4983[3], i4983[4] )
  i4982.m_AmplitudeGain = i4983[5]
  i4982.m_FrequencyGain = i4983[6]
  i4982.mNoiseOffsets = new pc.Vec3( i4983[7], i4983[8], i4983[9] )
  return i4982
}

Deserializers["ScenarioFour.Enemies"] = function (request, data, root) {
  var i4984 = root || request.c( 'ScenarioFour.Enemies' )
  var i4985 = data
  request.r(i4985[0], i4985[1], 0, i4984, '_enemyRight')
  request.r(i4985[2], i4985[3], 0, i4984, '_enemyLeft')
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4987 = data
  i4986.name = i4987[0]
  i4986.atlasId = i4987[1]
  i4986.mipmapCount = i4987[2]
  i4986.hdr = !!i4987[3]
  i4986.size = i4987[4]
  i4986.anisoLevel = i4987[5]
  i4986.filterMode = i4987[6]
  i4986.wrapMode = i4987[7]
  var i4989 = i4987[8]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 4) {
    i4988.push( UnityEngine.Rect.MinMaxRect(i4989[i + 0], i4989[i + 1], i4989[i + 2], i4989[i + 3]) );
  }
  i4986.rects = i4988
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4993 = data
  i4992.name = i4993[0]
  i4992.index = i4993[1]
  i4992.startup = !!i4993[2]
  return i4992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4995 = data
  i4994.enabled = !!i4995[0]
  i4994.aspect = i4995[1]
  i4994.orthographic = !!i4995[2]
  i4994.orthographicSize = i4995[3]
  i4994.backgroundColor = new pc.Color(i4995[4], i4995[5], i4995[6], i4995[7])
  i4994.nearClipPlane = i4995[8]
  i4994.farClipPlane = i4995[9]
  i4994.fieldOfView = i4995[10]
  i4994.depth = i4995[11]
  i4994.clearFlags = i4995[12]
  i4994.cullingMask = i4995[13]
  i4994.rect = i4995[14]
  request.r(i4995[15], i4995[16], 0, i4994, 'targetTexture')
  return i4994
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i4996 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i4997 = data
  i4996.m_ShowDebugText = !!i4997[0]
  i4996.m_ShowCameraFrustum = !!i4997[1]
  i4996.m_IgnoreTimeScale = !!i4997[2]
  request.r(i4997[3], i4997[4], 0, i4996, 'm_WorldUpOverride')
  i4996.m_UpdateMethod = i4997[5]
  i4996.m_BlendUpdateMethod = i4997[6]
  i4996.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i4997[7], i4996.m_DefaultBlend)
  request.r(i4997[8], i4997[9], 0, i4996, 'm_CustomBlends')
  i4996.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i4997[10], i4996.m_CameraCutEvent)
  i4996.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i4997[11], i4996.m_CameraActivatedEvent)
  return i4996
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i4998 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i4999 = data
  i4998.m_Style = i4999[0]
  i4998.m_Time = i4999[1]
  i4998.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i4999[2] } )
  return i4998
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i5000 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i5001 = data
  i5000.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5001[0], i5000.m_PersistentCalls)
  return i5000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5003 = data
  request.r(i5003[0], i5003[1], 0, i5002, 'clip')
  request.r(i5003[2], i5003[3], 0, i5002, 'outputAudioMixerGroup')
  i5002.playOnAwake = !!i5003[4]
  i5002.loop = !!i5003[5]
  i5002.time = i5003[6]
  i5002.volume = i5003[7]
  i5002.pitch = i5003[8]
  i5002.enabled = !!i5003[9]
  return i5002
}

Deserializers["SoundHandler"] = function (request, data, root) {
  var i5004 = root || request.c( 'SoundHandler' )
  var i5005 = data
  request.r(i5005[0], i5005[1], 0, i5004, '_audioSource')
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5007 = data
  i5006.enabled = !!i5007[0]
  i5006.type = i5007[1]
  i5006.color = new pc.Color(i5007[2], i5007[3], i5007[4], i5007[5])
  i5006.cullingMask = i5007[6]
  i5006.intensity = i5007[7]
  i5006.range = i5007[8]
  i5006.spotAngle = i5007[9]
  i5006.shadows = i5007[10]
  i5006.shadowNormalBias = i5007[11]
  i5006.shadowBias = i5007[12]
  i5006.shadowStrength = i5007[13]
  i5006.shadowResolution = i5007[14]
  i5006.lightmapBakeType = i5007[15]
  i5006.renderMode = i5007[16]
  request.r(i5007[17], i5007[18], 0, i5006, 'cookie')
  i5006.cookieSize = i5007[19]
  return i5006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5009 = data
  i5008.pivot = new pc.Vec2( i5009[0], i5009[1] )
  i5008.anchorMin = new pc.Vec2( i5009[2], i5009[3] )
  i5008.anchorMax = new pc.Vec2( i5009[4], i5009[5] )
  i5008.sizeDelta = new pc.Vec2( i5009[6], i5009[7] )
  i5008.anchoredPosition3D = new pc.Vec3( i5009[8], i5009[9], i5009[10] )
  i5008.rotation = new pc.Quat(i5009[11], i5009[12], i5009[13], i5009[14])
  i5008.scale = new pc.Vec3( i5009[15], i5009[16], i5009[17] )
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5011 = data
  i5010.enabled = !!i5011[0]
  i5010.planeDistance = i5011[1]
  i5010.referencePixelsPerUnit = i5011[2]
  i5010.isFallbackOverlay = !!i5011[3]
  i5010.renderMode = i5011[4]
  i5010.renderOrder = i5011[5]
  i5010.sortingLayerName = i5011[6]
  i5010.sortingOrder = i5011[7]
  i5010.scaleFactor = i5011[8]
  request.r(i5011[9], i5011[10], 0, i5010, 'worldCamera')
  i5010.overrideSorting = !!i5011[11]
  i5010.pixelPerfect = !!i5011[12]
  i5010.targetDisplay = i5011[13]
  i5010.overridePixelPerfect = !!i5011[14]
  return i5010
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5013 = data
  i5012.m_UiScaleMode = i5013[0]
  i5012.m_ReferencePixelsPerUnit = i5013[1]
  i5012.m_ScaleFactor = i5013[2]
  i5012.m_ReferenceResolution = new pc.Vec2( i5013[3], i5013[4] )
  i5012.m_ScreenMatchMode = i5013[5]
  i5012.m_MatchWidthOrHeight = i5013[6]
  i5012.m_PhysicalUnit = i5013[7]
  i5012.m_FallbackScreenDPI = i5013[8]
  i5012.m_DefaultSpriteDPI = i5013[9]
  i5012.m_DynamicPixelsPerUnit = i5013[10]
  i5012.m_PresetInfoIsWorld = !!i5013[11]
  return i5012
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5015 = data
  i5014.m_IgnoreReversedGraphics = !!i5015[0]
  i5014.m_BlockingObjects = i5015[1]
  i5014.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5015[2] )
  return i5014
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i5016 = root || request.c( 'ChooseHandler' )
  var i5017 = data
  request.r(i5017[0], i5017[1], 0, i5016, '_brain')
  request.r(i5017[2], i5017[3], 0, i5016, '_soundHandler')
  request.r(i5017[4], i5017[5], 0, i5016, '_ericSettings')
  request.r(i5017[6], i5017[7], 0, i5016, '_viperSettings')
  request.r(i5017[8], i5017[9], 0, i5016, '_ericScene')
  request.r(i5017[10], i5017[11], 0, i5016, '_ericSceneBackground')
  request.r(i5017[12], i5017[13], 0, i5016, '_viperScene')
  request.r(i5017[14], i5017[15], 0, i5016, '_viperSceneBackground')
  request.r(i5017[16], i5017[17], 0, i5016, '_chooseButton')
  var i5019 = i5017[18]
  var i5018 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5019.length; i += 2) {
  request.r(i5019[i + 0], i5019[i + 1], 1, i5018, '')
  }
  i5016._characters = i5018
  request.r(i5017[19], i5017[20], 0, i5016, '_frame')
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5023 = data
  i5022.cullTransparentMesh = !!i5023[0]
  return i5022
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5024 = root || request.c( 'UnityEngine.UI.Image' )
  var i5025 = data
  request.r(i5025[0], i5025[1], 0, i5024, 'm_Sprite')
  i5024.m_Type = i5025[2]
  i5024.m_PreserveAspect = !!i5025[3]
  i5024.m_FillCenter = !!i5025[4]
  i5024.m_FillMethod = i5025[5]
  i5024.m_FillAmount = i5025[6]
  i5024.m_FillClockwise = !!i5025[7]
  i5024.m_FillOrigin = i5025[8]
  i5024.m_UseSpriteMesh = !!i5025[9]
  i5024.m_PixelsPerUnitMultiplier = i5025[10]
  request.r(i5025[11], i5025[12], 0, i5024, 'm_Material')
  i5024.m_Maskable = !!i5025[13]
  i5024.m_Color = new pc.Color(i5025[14], i5025[15], i5025[16], i5025[17])
  i5024.m_RaycastTarget = !!i5025[18]
  i5024.m_RaycastPadding = new pc.Vec4( i5025[19], i5025[20], i5025[21], i5025[22] )
  return i5024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5027 = data
  i5026.m_Alpha = i5027[0]
  i5026.m_Interactable = !!i5027[1]
  i5026.m_BlocksRaycasts = !!i5027[2]
  i5026.m_IgnoreParentGroups = !!i5027[3]
  i5026.enabled = !!i5027[4]
  return i5026
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5028 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5029 = data
  i5028.m_ShowMaskGraphic = !!i5029[0]
  return i5028
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5030 = root || request.c( 'UnityEngine.UI.Button' )
  var i5031 = data
  i5030.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5031[0], i5030.m_OnClick)
  i5030.m_Navigation = request.d('UnityEngine.UI.Navigation', i5031[1], i5030.m_Navigation)
  i5030.m_Transition = i5031[2]
  i5030.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5031[3], i5030.m_Colors)
  i5030.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5031[4], i5030.m_SpriteState)
  i5030.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5031[5], i5030.m_AnimationTriggers)
  i5030.m_Interactable = !!i5031[6]
  request.r(i5031[7], i5031[8], 0, i5030, 'm_TargetGraphic')
  return i5030
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5032 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5033 = data
  i5032.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5033[0], i5032.m_PersistentCalls)
  return i5032
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5034 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5035 = data
  i5034.m_Mode = i5035[0]
  i5034.m_WrapAround = !!i5035[1]
  request.r(i5035[2], i5035[3], 0, i5034, 'm_SelectOnUp')
  request.r(i5035[4], i5035[5], 0, i5034, 'm_SelectOnDown')
  request.r(i5035[6], i5035[7], 0, i5034, 'm_SelectOnLeft')
  request.r(i5035[8], i5035[9], 0, i5034, 'm_SelectOnRight')
  return i5034
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5036 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5037 = data
  i5036.m_NormalColor = new pc.Color(i5037[0], i5037[1], i5037[2], i5037[3])
  i5036.m_HighlightedColor = new pc.Color(i5037[4], i5037[5], i5037[6], i5037[7])
  i5036.m_PressedColor = new pc.Color(i5037[8], i5037[9], i5037[10], i5037[11])
  i5036.m_SelectedColor = new pc.Color(i5037[12], i5037[13], i5037[14], i5037[15])
  i5036.m_DisabledColor = new pc.Color(i5037[16], i5037[17], i5037[18], i5037[19])
  i5036.m_ColorMultiplier = i5037[20]
  i5036.m_FadeDuration = i5037[21]
  return i5036
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5038 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5039 = data
  request.r(i5039[0], i5039[1], 0, i5038, 'm_HighlightedSprite')
  request.r(i5039[2], i5039[3], 0, i5038, 'm_PressedSprite')
  request.r(i5039[4], i5039[5], 0, i5038, 'm_SelectedSprite')
  request.r(i5039[6], i5039[7], 0, i5038, 'm_DisabledSprite')
  return i5038
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5040 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5041 = data
  i5040.m_NormalTrigger = i5041[0]
  i5040.m_HighlightedTrigger = i5041[1]
  i5040.m_PressedTrigger = i5041[2]
  i5040.m_SelectedTrigger = i5041[3]
  i5040.m_DisabledTrigger = i5041[4]
  return i5040
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5042 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5043 = data
  i5042.m_hasFontAssetChanged = !!i5043[0]
  request.r(i5043[1], i5043[2], 0, i5042, 'm_baseMaterial')
  i5042.m_maskOffset = new pc.Vec4( i5043[3], i5043[4], i5043[5], i5043[6] )
  i5042.m_text = i5043[7]
  i5042.m_isRightToLeft = !!i5043[8]
  request.r(i5043[9], i5043[10], 0, i5042, 'm_fontAsset')
  request.r(i5043[11], i5043[12], 0, i5042, 'm_sharedMaterial')
  var i5045 = i5043[13]
  var i5044 = []
  for(var i = 0; i < i5045.length; i += 2) {
  request.r(i5045[i + 0], i5045[i + 1], 2, i5044, '')
  }
  i5042.m_fontSharedMaterials = i5044
  request.r(i5043[14], i5043[15], 0, i5042, 'm_fontMaterial')
  var i5047 = i5043[16]
  var i5046 = []
  for(var i = 0; i < i5047.length; i += 2) {
  request.r(i5047[i + 0], i5047[i + 1], 2, i5046, '')
  }
  i5042.m_fontMaterials = i5046
  i5042.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5043[17], i5043[18], i5043[19], i5043[20])
  i5042.m_fontColor = new pc.Color(i5043[21], i5043[22], i5043[23], i5043[24])
  i5042.m_enableVertexGradient = !!i5043[25]
  i5042.m_colorMode = i5043[26]
  i5042.m_fontColorGradient = request.d('TMPro.VertexGradient', i5043[27], i5042.m_fontColorGradient)
  request.r(i5043[28], i5043[29], 0, i5042, 'm_fontColorGradientPreset')
  request.r(i5043[30], i5043[31], 0, i5042, 'm_spriteAsset')
  i5042.m_tintAllSprites = !!i5043[32]
  request.r(i5043[33], i5043[34], 0, i5042, 'm_StyleSheet')
  i5042.m_TextStyleHashCode = i5043[35]
  i5042.m_overrideHtmlColors = !!i5043[36]
  i5042.m_faceColor = UnityEngine.Color32.ConstructColor(i5043[37], i5043[38], i5043[39], i5043[40])
  i5042.m_fontSize = i5043[41]
  i5042.m_fontSizeBase = i5043[42]
  i5042.m_fontWeight = i5043[43]
  i5042.m_enableAutoSizing = !!i5043[44]
  i5042.m_fontSizeMin = i5043[45]
  i5042.m_fontSizeMax = i5043[46]
  i5042.m_fontStyle = i5043[47]
  i5042.m_HorizontalAlignment = i5043[48]
  i5042.m_VerticalAlignment = i5043[49]
  i5042.m_textAlignment = i5043[50]
  i5042.m_characterSpacing = i5043[51]
  i5042.m_wordSpacing = i5043[52]
  i5042.m_lineSpacing = i5043[53]
  i5042.m_lineSpacingMax = i5043[54]
  i5042.m_paragraphSpacing = i5043[55]
  i5042.m_charWidthMaxAdj = i5043[56]
  i5042.m_enableWordWrapping = !!i5043[57]
  i5042.m_wordWrappingRatios = i5043[58]
  i5042.m_overflowMode = i5043[59]
  request.r(i5043[60], i5043[61], 0, i5042, 'm_linkedTextComponent')
  request.r(i5043[62], i5043[63], 0, i5042, 'parentLinkedComponent')
  i5042.m_enableKerning = !!i5043[64]
  i5042.m_enableExtraPadding = !!i5043[65]
  i5042.checkPaddingRequired = !!i5043[66]
  i5042.m_isRichText = !!i5043[67]
  i5042.m_parseCtrlCharacters = !!i5043[68]
  i5042.m_isOrthographic = !!i5043[69]
  i5042.m_isCullingEnabled = !!i5043[70]
  i5042.m_horizontalMapping = i5043[71]
  i5042.m_verticalMapping = i5043[72]
  i5042.m_uvLineOffset = i5043[73]
  i5042.m_geometrySortingOrder = i5043[74]
  i5042.m_IsTextObjectScaleStatic = !!i5043[75]
  i5042.m_VertexBufferAutoSizeReduction = !!i5043[76]
  i5042.m_useMaxVisibleDescender = !!i5043[77]
  i5042.m_pageToDisplay = i5043[78]
  i5042.m_margin = new pc.Vec4( i5043[79], i5043[80], i5043[81], i5043[82] )
  i5042.m_isUsingLegacyAnimationComponent = !!i5043[83]
  i5042.m_isVolumetricText = !!i5043[84]
  request.r(i5043[85], i5043[86], 0, i5042, 'm_Material')
  i5042.m_Maskable = !!i5043[87]
  i5042.m_Color = new pc.Color(i5043[88], i5043[89], i5043[90], i5043[91])
  i5042.m_RaycastTarget = !!i5043[92]
  i5042.m_RaycastPadding = new pc.Vec4( i5043[93], i5043[94], i5043[95], i5043[96] )
  return i5042
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5048 = root || request.c( 'TMPro.VertexGradient' )
  var i5049 = data
  i5048.topLeft = new pc.Color(i5049[0], i5049[1], i5049[2], i5049[3])
  i5048.topRight = new pc.Color(i5049[4], i5049[5], i5049[6], i5049[7])
  i5048.bottomLeft = new pc.Color(i5049[8], i5049[9], i5049[10], i5049[11])
  i5048.bottomRight = new pc.Color(i5049[12], i5049[13], i5049[14], i5049[15])
  return i5048
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i5050 = root || request.c( 'JumpHandler' )
  var i5051 = data
  request.r(i5051[0], i5051[1], 0, i5050, '_landJump')
  request.r(i5051[2], i5051[3], 0, i5050, '_secondLandJump')
  request.r(i5051[4], i5051[5], 0, i5050, '_spawnPoint')
  request.r(i5051[6], i5051[7], 0, i5050, '_enemy')
  request.r(i5051[8], i5051[9], 0, i5050, '_finalPoint')
  return i5050
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i5052 = root || request.c( 'AnimationHandler' )
  var i5053 = data
  request.r(i5053[0], i5053[1], 0, i5052, '_jumpHandler')
  return i5052
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i5054 = root || request.c( 'EffectHandler' )
  var i5055 = data
  request.r(i5055[0], i5055[1], 0, i5054, '_jumpHandler')
  request.r(i5055[2], i5055[3], 0, i5054, '_canvas')
  request.r(i5055[4], i5055[5], 0, i5054, '_jumpSmoke')
  request.r(i5055[6], i5055[7], 0, i5054, '_light')
  request.r(i5055[8], i5055[9], 0, i5054, '_smoke')
  request.r(i5055[10], i5055[11], 0, i5054, '_enemyPool')
  request.r(i5055[12], i5055[13], 0, i5054, '_specialEnemy')
  return i5054
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i5056 = root || request.c( 'StartCamera' )
  var i5057 = data
  request.r(i5057[0], i5057[1], 0, i5056, '_startCamera')
  request.r(i5057[2], i5057[3], 0, i5056, '_path')
  request.r(i5057[4], i5057[5], 0, i5056, '_player')
  request.r(i5057[6], i5057[7], 0, i5056, '_canvas')
  return i5056
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i5058 = root || request.c( 'ResolutionHandler' )
  var i5059 = data
  request.r(i5059[0], i5059[1], 0, i5058, '_secondCamera')
  request.r(i5059[2], i5059[3], 0, i5058, '_fourthCamera')
  request.r(i5059[4], i5059[5], 0, i5058, '_fifthCamera')
  return i5058
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i5060 = root || request.c( 'CameraHandler' )
  var i5061 = data
  request.r(i5061[0], i5061[1], 0, i5060, '_jumpHandler')
  request.r(i5061[2], i5061[3], 0, i5060, '_firstCamera')
  request.r(i5061[4], i5061[5], 0, i5060, '_secondCamera')
  request.r(i5061[6], i5061[7], 0, i5060, '_thirdCamera')
  request.r(i5061[8], i5061[9], 0, i5060, '_fourthCamera')
  request.r(i5061[10], i5061[11], 0, i5060, '_fifthCamera')
  return i5060
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i5062 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i5063 = data
  request.r(i5063[0], i5063[1], 0, i5062, 'm_Path')
  i5062.m_PathPosition = i5063[2]
  i5062.m_PositionUnits = i5063[3]
  i5062.m_PathOffset = new pc.Vec3( i5063[4], i5063[5], i5063[6] )
  i5062.m_XDamping = i5063[7]
  i5062.m_YDamping = i5063[8]
  i5062.m_ZDamping = i5063[9]
  i5062.m_CameraUp = i5063[10]
  i5062.m_PitchDamping = i5063[11]
  i5062.m_YawDamping = i5063[12]
  i5062.m_RollDamping = i5063[13]
  i5062.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i5063[14], i5062.m_AutoDolly)
  return i5062
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i5064 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i5065 = data
  i5064.m_Enabled = !!i5065[0]
  i5064.m_PositionOffset = i5065[1]
  i5064.m_SearchRadius = i5065[2]
  i5064.m_SearchResolution = i5065[3]
  return i5064
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i5066 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i5067 = data
  i5066.m_Looped = !!i5067[0]
  var i5069 = i5067[1]
  var i5068 = []
  for(var i = 0; i < i5069.length; i += 1) {
    i5068.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i5069[i + 0]) );
  }
  i5066.m_Waypoints = i5068
  i5066.m_Resolution = i5067[2]
  i5066.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i5067[3], i5066.m_Appearance)
  return i5066
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i5072 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i5073 = data
  i5072.position = new pc.Vec3( i5073[0], i5073[1], i5073[2] )
  i5072.roll = i5073[3]
  return i5072
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i5074 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i5075 = data
  i5074.pathColor = new pc.Color(i5075[0], i5075[1], i5075[2], i5075[3])
  i5074.inactivePathColor = new pc.Color(i5075[4], i5075[5], i5075[6], i5075[7])
  i5074.width = i5075[8]
  return i5074
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i5076 = root || request.c( 'UIHandler' )
  var i5077 = data
  request.r(i5077[0], i5077[1], 0, i5076, '_jumpHandler')
  request.r(i5077[2], i5077[3], 0, i5076, '_powerButton')
  request.r(i5077[4], i5077[5], 0, i5076, '_cTAButton')
  request.r(i5077[6], i5077[7], 0, i5076, '_fade')
  request.r(i5077[8], i5077[9], 0, i5076, '_finalPanel')
  return i5076
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i5078 = root || request.c( 'EnemyPool' )
  var i5079 = data
  var i5081 = i5079[0]
  var i5080 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i5081.length; i += 2) {
  request.r(i5081[i + 0], i5081[i + 1], 1, i5080, '')
  }
  i5078._enemies = i5080
  return i5078
}

Deserializers["Stalker"] = function (request, data, root) {
  var i5084 = root || request.c( 'Stalker' )
  var i5085 = data
  request.r(i5085[0], i5085[1], 0, i5084, '_target')
  return i5084
}

Deserializers["Enemy"] = function (request, data, root) {
  var i5086 = root || request.c( 'Enemy' )
  var i5087 = data
  return i5086
}

Deserializers["ScenarioFour.Girl"] = function (request, data, root) {
  var i5088 = root || request.c( 'ScenarioFour.Girl' )
  var i5089 = data
  request.r(i5089[0], i5089[1], 0, i5088, '_path')
  request.r(i5089[2], i5089[3], 0, i5088, '_animatedModel')
  request.r(i5089[4], i5089[5], 0, i5088, '_model')
  request.r(i5089[6], i5089[7], 0, i5088, '_bulletTemplate')
  request.r(i5089[8], i5089[9], 0, i5088, '_shootPoint')
  return i5088
}

Deserializers["ScenarioFour.AnimatedModel"] = function (request, data, root) {
  var i5090 = root || request.c( 'ScenarioFour.AnimatedModel' )
  var i5091 = data
  return i5090
}

Deserializers["ScenarioFour.UISwitcher"] = function (request, data, root) {
  var i5092 = root || request.c( 'ScenarioFour.UISwitcher' )
  var i5093 = data
  request.r(i5093[0], i5093[1], 0, i5092, '_powerButton')
  request.r(i5093[2], i5093[3], 0, i5092, '_attackButton')
  request.r(i5093[4], i5093[5], 0, i5092, '_playButton')
  request.r(i5093[6], i5093[7], 0, i5092, '_finalPanel')
  return i5092
}

Deserializers["ScenarioFour.PulseTransform"] = function (request, data, root) {
  var i5094 = root || request.c( 'ScenarioFour.PulseTransform' )
  var i5095 = data
  return i5094
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5096 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5097 = data
  request.r(i5097[0], i5097[1], 0, i5096, 'm_FirstSelected')
  i5096.m_sendNavigationEvents = !!i5097[2]
  i5096.m_DragThreshold = i5097[3]
  return i5096
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5098 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5099 = data
  i5098.m_HorizontalAxis = i5099[0]
  i5098.m_VerticalAxis = i5099[1]
  i5098.m_SubmitButton = i5099[2]
  i5098.m_CancelButton = i5099[3]
  i5098.m_InputActionsPerSecond = i5099[4]
  i5098.m_RepeatDelay = i5099[5]
  i5098.m_ForceModuleActive = !!i5099[6]
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5101 = data
  i5100.ambientIntensity = i5101[0]
  i5100.reflectionIntensity = i5101[1]
  i5100.ambientMode = i5101[2]
  i5100.ambientLight = new pc.Color(i5101[3], i5101[4], i5101[5], i5101[6])
  i5100.ambientSkyColor = new pc.Color(i5101[7], i5101[8], i5101[9], i5101[10])
  i5100.ambientGroundColor = new pc.Color(i5101[11], i5101[12], i5101[13], i5101[14])
  i5100.ambientEquatorColor = new pc.Color(i5101[15], i5101[16], i5101[17], i5101[18])
  i5100.fogColor = new pc.Color(i5101[19], i5101[20], i5101[21], i5101[22])
  i5100.fogEndDistance = i5101[23]
  i5100.fogStartDistance = i5101[24]
  i5100.fogDensity = i5101[25]
  i5100.fog = !!i5101[26]
  request.r(i5101[27], i5101[28], 0, i5100, 'skybox')
  i5100.fogMode = i5101[29]
  var i5103 = i5101[30]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5103[i + 0]) );
  }
  i5100.lightmaps = i5102
  i5100.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5101[31], i5100.lightProbes)
  i5100.lightmapsMode = i5101[32]
  i5100.environmentLightingMode = i5101[33]
  i5100.ambientProbe = new pc.SphericalHarmonicsL2(i5101[34])
  i5100.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5101[35])
  i5100.useReferenceAmbientProbe = !!i5101[36]
  request.r(i5101[37], i5101[38], 0, i5100, 'customReflection')
  request.r(i5101[39], i5101[40], 0, i5100, 'defaultReflection')
  i5100.defaultReflectionMode = i5101[41]
  i5100.defaultReflectionResolution = i5101[42]
  i5100.sunLightObjectId = i5101[43]
  i5100.pixelLightCount = i5101[44]
  i5100.defaultReflectionHDR = !!i5101[45]
  i5100.hasLightDataAsset = !!i5101[46]
  i5100.hasManualGenerate = !!i5101[47]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5107 = data
  request.r(i5107[0], i5107[1], 0, i5106, 'lightmapColor')
  request.r(i5107[2], i5107[3], 0, i5106, 'lightmapDirection')
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5108 = root || new UnityEngine.LightProbes()
  var i5109 = data
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5117 = data
  var i5119 = i5117[0]
  var i5118 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.add(i5119[i + 0]);
  }
  i5116.invalidShaderVariants = i5118
  i5116.name = i5117[1]
  i5116.guid = i5117[2]
  var i5121 = i5117[3]
  var i5120 = []
  for(var i = 0; i < i5121.length; i += 1) {
    i5120.push( i5121[i + 0] );
  }
  i5116.shaderDefinedKeywords = i5120
  var i5123 = i5117[4]
  var i5122 = []
  for(var i = 0; i < i5123.length; i += 1) {
    i5122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5123[i + 0]) );
  }
  i5116.passes = i5122
  var i5125 = i5117[5]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5125[i + 0]) );
  }
  i5116.usePasses = i5124
  var i5127 = i5117[6]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5127[i + 0]) );
  }
  i5116.defaultParameterValues = i5126
  request.r(i5117[7], i5117[8], 0, i5116, 'unityFallbackShader')
  i5116.readDepth = !!i5117[9]
  i5116.isCreatedByShaderGraph = !!i5117[10]
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5132 = root || new pc.UnityShaderPass()
  var i5133 = data
  i5132.id = i5133[0]
  i5132.subShaderIndex = i5133[1]
  i5132.name = i5133[2]
  i5132.passType = i5133[3]
  i5132.usePass = !!i5133[4]
  i5132.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[5], i5132.zTest)
  i5132.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[6], i5132.zWrite)
  i5132.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[7], i5132.culling)
  i5132.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5133[8], i5132.blending)
  i5132.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5133[9], i5132.alphaBlending)
  i5132.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[10], i5132.colorWriteMask)
  i5132.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[11], i5132.offsetUnits)
  i5132.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[12], i5132.offsetFactor)
  i5132.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[13], i5132.stencilRef)
  i5132.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[14], i5132.stencilReadMask)
  i5132.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5133[15], i5132.stencilWriteMask)
  i5132.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5133[16], i5132.stencilOp)
  i5132.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5133[17], i5132.stencilOpFront)
  i5132.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5133[18], i5132.stencilOpBack)
  var i5135 = i5133[19]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5135[i + 0]) );
  }
  i5132.tags = i5134
  var i5137 = i5133[20]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( i5137[i + 0] );
  }
  i5132.passDefinedKeywords = i5136
  var i5139 = i5133[21]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5139[i + 0]) );
  }
  i5132.variants = i5138
  var i5141 = i5133[22]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5141[i + 0]) );
  }
  i5132.excludedVariants = i5140
  i5132.hasDepthReader = !!i5133[23]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5143 = data
  i5142.val = i5143[0]
  i5142.name = i5143[1]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5145 = data
  i5144.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5145[0], i5144.src)
  i5144.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5145[1], i5144.dst)
  i5144.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5145[2], i5144.op)
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5147 = data
  i5146.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[0], i5146.pass)
  i5146.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[1], i5146.fail)
  i5146.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[2], i5146.zFail)
  i5146.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[3], i5146.comp)
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5151 = data
  i5150.name = i5151[0]
  i5150.value = i5151[1]
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5155 = data
  i5154.passId = i5155[0]
  i5154.subShaderIndex = i5155[1]
  var i5157 = i5155[2]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( i5157[i + 0] );
  }
  i5154.keywords = i5156
  i5154.vertexProgram = i5155[3]
  i5154.fragmentProgram = i5155[4]
  i5154.readDepth = !!i5155[5]
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5161 = data
  request.r(i5161[0], i5161[1], 0, i5160, 'shader')
  i5160.pass = i5161[2]
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5165 = data
  i5164.name = i5165[0]
  i5164.type = i5165[1]
  i5164.value = new pc.Vec4( i5165[2], i5165[3], i5165[4], i5165[5] )
  i5164.textureValue = i5165[6]
  return i5164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5167 = data
  i5166.name = i5167[0]
  request.r(i5167[1], i5167[2], 0, i5166, 'texture')
  i5166.aabb = i5167[3]
  i5166.vertices = i5167[4]
  i5166.triangles = i5167[5]
  i5166.textureRect = UnityEngine.Rect.MinMaxRect(i5167[6], i5167[7], i5167[8], i5167[9])
  i5166.packedRect = UnityEngine.Rect.MinMaxRect(i5167[10], i5167[11], i5167[12], i5167[13])
  i5166.border = new pc.Vec4( i5167[14], i5167[15], i5167[16], i5167[17] )
  i5166.transparency = i5167[18]
  i5166.bounds = i5167[19]
  i5166.pixelsPerUnit = i5167[20]
  i5166.textureWidth = i5167[21]
  i5166.textureHeight = i5167[22]
  i5166.nativeSize = new pc.Vec2( i5167[23], i5167[24] )
  i5166.pivot = new pc.Vec2( i5167[25], i5167[26] )
  i5166.textureRectOffset = new pc.Vec2( i5167[27], i5167[28] )
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5169 = data
  i5168.name = i5169[0]
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5171 = data
  i5170.name = i5171[0]
  i5170.wrapMode = i5171[1]
  i5170.isLooping = !!i5171[2]
  i5170.length = i5171[3]
  var i5173 = i5171[4]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 1) {
    i5172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5173[i + 0]) );
  }
  i5170.curves = i5172
  var i5175 = i5171[5]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 1) {
    i5174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5175[i + 0]) );
  }
  i5170.events = i5174
  i5170.halfPrecision = !!i5171[6]
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5179 = data
  i5178.path = i5179[0]
  i5178.componentType = i5179[1]
  i5178.property = i5179[2]
  i5178.keys = i5179[3]
  var i5181 = i5179[4]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5181[i + 0]) );
  }
  i5178.objectReferenceKeys = i5180
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5185 = data
  i5184.time = i5185[0]
  request.r(i5185[1], i5185[2], 0, i5184, 'value')
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5189 = data
  i5188.functionName = i5189[0]
  i5188.floatParameter = i5189[1]
  i5188.intParameter = i5189[2]
  i5188.stringParameter = i5189[3]
  request.r(i5189[4], i5189[5], 0, i5188, 'objectReferenceParameter')
  i5188.time = i5189[6]
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5191 = data
  i5190.name = i5191[0]
  var i5193 = i5191[1]
  var i5192 = []
  for(var i = 0; i < i5193.length; i += 1) {
    i5192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5193[i + 0]) );
  }
  i5190.states = i5192
  var i5195 = i5191[2]
  var i5194 = []
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5195[i + 0]) );
  }
  i5190.layers = i5194
  var i5197 = i5191[3]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 1) {
    i5196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5197[i + 0]) );
  }
  i5190.parameters = i5196
  var i5199 = i5191[4]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 1) {
    i5198.push( i5199[i + 0] );
  }
  i5190.animationClips = i5198
  i5190.HasSubStateMachines = !!i5191[5]
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5203 = data
  i5202.cycleOffset = i5203[0]
  i5202.cycleOffsetParameter = i5203[1]
  i5202.cycleOffsetParameterActive = !!i5203[2]
  i5202.mirror = !!i5203[3]
  i5202.mirrorParameter = i5203[4]
  i5202.mirrorParameterActive = !!i5203[5]
  i5202.motionId = i5203[6]
  i5202.nameHash = i5203[7]
  i5202.fullPathHash = i5203[8]
  i5202.speed = i5203[9]
  i5202.speedParameter = i5203[10]
  i5202.speedParameterActive = !!i5203[11]
  i5202.tag = i5203[12]
  i5202.name = i5203[13]
  i5202.writeDefaultValues = !!i5203[14]
  var i5205 = i5203[15]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5205[i + 0]) );
  }
  i5202.transitions = i5204
  var i5207 = i5203[16]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 2) {
  request.r(i5207[i + 0], i5207[i + 1], 2, i5206, '')
  }
  i5202.behaviours = i5206
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5211 = data
  i5210.fullPath = i5211[0]
  i5210.canTransitionToSelf = !!i5211[1]
  i5210.duration = i5211[2]
  i5210.exitTime = i5211[3]
  i5210.hasExitTime = !!i5211[4]
  i5210.hasFixedDuration = !!i5211[5]
  i5210.interruptionSource = i5211[6]
  i5210.offset = i5211[7]
  i5210.orderedInterruption = !!i5211[8]
  i5210.destinationStateNameHash = i5211[9]
  i5210.destinationStateMachineId = i5211[10]
  i5210.isExit = !!i5211[11]
  i5210.mute = !!i5211[12]
  i5210.solo = !!i5211[13]
  var i5213 = i5211[14]
  var i5212 = []
  for(var i = 0; i < i5213.length; i += 1) {
    i5212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5213[i + 0]) );
  }
  i5210.conditions = i5212
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5219 = data
  i5218.blendingMode = i5219[0]
  i5218.defaultWeight = i5219[1]
  i5218.name = i5219[2]
  i5218.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5219[3], i5218.stateMachine)
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5221 = data
  i5220.id = i5221[0]
  i5220.defaultStateNameHash = i5221[1]
  var i5223 = i5221[2]
  var i5222 = []
  for(var i = 0; i < i5223.length; i += 1) {
    i5222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5223[i + 0]) );
  }
  i5220.entryTransitions = i5222
  var i5225 = i5221[3]
  var i5224 = []
  for(var i = 0; i < i5225.length; i += 1) {
    i5224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5225[i + 0]) );
  }
  i5220.anyStateTransitions = i5224
  return i5220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5229 = data
  i5228.destinationStateNameHash = i5229[0]
  i5228.destinationStateMachineId = i5229[1]
  i5228.isExit = !!i5229[2]
  i5228.mute = !!i5229[3]
  i5228.solo = !!i5229[4]
  var i5231 = i5229[5]
  var i5230 = []
  for(var i = 0; i < i5231.length; i += 1) {
    i5230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5231[i + 0]) );
  }
  i5228.conditions = i5230
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5235 = data
  i5234.defaultBool = !!i5235[0]
  i5234.defaultFloat = i5235[1]
  i5234.defaultInt = i5235[2]
  i5234.name = i5235[3]
  i5234.nameHash = i5235[4]
  i5234.type = i5235[5]
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5239 = data
  i5238.mode = i5239[0]
  i5238.parameter = i5239[1]
  i5238.threshold = i5239[2]
  return i5238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5241 = data
  i5240.name = i5241[0]
  i5240.bytes64 = i5241[1]
  i5240.data = i5241[2]
  return i5240
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5242 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5243 = data
  i5242.hashCode = i5243[0]
  request.r(i5243[1], i5243[2], 0, i5242, 'material')
  i5242.materialHashCode = i5243[3]
  request.r(i5243[4], i5243[5], 0, i5242, 'atlas')
  i5242.normalStyle = i5243[6]
  i5242.normalSpacingOffset = i5243[7]
  i5242.boldStyle = i5243[8]
  i5242.boldSpacing = i5243[9]
  i5242.italicStyle = i5243[10]
  i5242.tabSize = i5243[11]
  i5242.m_Version = i5243[12]
  i5242.m_SourceFontFileGUID = i5243[13]
  request.r(i5243[14], i5243[15], 0, i5242, 'm_SourceFontFile_EditorRef')
  request.r(i5243[16], i5243[17], 0, i5242, 'm_SourceFontFile')
  i5242.m_AtlasPopulationMode = i5243[18]
  i5242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5243[19], i5242.m_FaceInfo)
  var i5245 = i5243[20]
  var i5244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5245.length; i += 1) {
    i5244.add(request.d('UnityEngine.TextCore.Glyph', i5245[i + 0]));
  }
  i5242.m_GlyphTable = i5244
  var i5247 = i5243[21]
  var i5246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5247.length; i += 1) {
    i5246.add(request.d('TMPro.TMP_Character', i5247[i + 0]));
  }
  i5242.m_CharacterTable = i5246
  var i5249 = i5243[22]
  var i5248 = []
  for(var i = 0; i < i5249.length; i += 2) {
  request.r(i5249[i + 0], i5249[i + 1], 2, i5248, '')
  }
  i5242.m_AtlasTextures = i5248
  i5242.m_AtlasTextureIndex = i5243[23]
  i5242.m_IsMultiAtlasTexturesEnabled = !!i5243[24]
  i5242.m_ClearDynamicDataOnBuild = !!i5243[25]
  var i5251 = i5243[26]
  var i5250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.add(request.d('UnityEngine.TextCore.GlyphRect', i5251[i + 0]));
  }
  i5242.m_UsedGlyphRects = i5250
  var i5253 = i5243[27]
  var i5252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5253.length; i += 1) {
    i5252.add(request.d('UnityEngine.TextCore.GlyphRect', i5253[i + 0]));
  }
  i5242.m_FreeGlyphRects = i5252
  i5242.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5243[28], i5242.m_fontInfo)
  i5242.m_AtlasWidth = i5243[29]
  i5242.m_AtlasHeight = i5243[30]
  i5242.m_AtlasPadding = i5243[31]
  i5242.m_AtlasRenderMode = i5243[32]
  var i5255 = i5243[33]
  var i5254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.add(request.d('TMPro.TMP_Glyph', i5255[i + 0]));
  }
  i5242.m_glyphInfoList = i5254
  i5242.m_KerningTable = request.d('TMPro.KerningTable', i5243[34], i5242.m_KerningTable)
  i5242.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5243[35], i5242.m_FontFeatureTable)
  var i5257 = i5243[36]
  var i5256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5257.length; i += 2) {
  request.r(i5257[i + 0], i5257[i + 1], 1, i5256, '')
  }
  i5242.fallbackFontAssets = i5256
  var i5259 = i5243[37]
  var i5258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5259.length; i += 2) {
  request.r(i5259[i + 0], i5259[i + 1], 1, i5258, '')
  }
  i5242.m_FallbackFontAssetTable = i5258
  i5242.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5243[38], i5242.m_CreationSettings)
  var i5261 = i5243[39]
  var i5260 = []
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.push( request.d('TMPro.TMP_FontWeightPair', i5261[i + 0]) );
  }
  i5242.m_FontWeightTable = i5260
  var i5263 = i5243[40]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( request.d('TMPro.TMP_FontWeightPair', i5263[i + 0]) );
  }
  i5242.fontWeights = i5262
  return i5242
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5264 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5265 = data
  i5264.m_FaceIndex = i5265[0]
  i5264.m_FamilyName = i5265[1]
  i5264.m_StyleName = i5265[2]
  i5264.m_PointSize = i5265[3]
  i5264.m_Scale = i5265[4]
  i5264.m_LineHeight = i5265[5]
  i5264.m_AscentLine = i5265[6]
  i5264.m_CapLine = i5265[7]
  i5264.m_MeanLine = i5265[8]
  i5264.m_Baseline = i5265[9]
  i5264.m_DescentLine = i5265[10]
  i5264.m_SuperscriptOffset = i5265[11]
  i5264.m_SuperscriptSize = i5265[12]
  i5264.m_SubscriptOffset = i5265[13]
  i5264.m_SubscriptSize = i5265[14]
  i5264.m_UnderlineOffset = i5265[15]
  i5264.m_UnderlineThickness = i5265[16]
  i5264.m_StrikethroughOffset = i5265[17]
  i5264.m_StrikethroughThickness = i5265[18]
  i5264.m_TabWidth = i5265[19]
  return i5264
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5268 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5269 = data
  i5268.m_Index = i5269[0]
  i5268.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5269[1], i5268.m_Metrics)
  i5268.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5269[2], i5268.m_GlyphRect)
  i5268.m_Scale = i5269[3]
  i5268.m_AtlasIndex = i5269[4]
  return i5268
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5270 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5271 = data
  i5270.m_Width = i5271[0]
  i5270.m_Height = i5271[1]
  i5270.m_HorizontalBearingX = i5271[2]
  i5270.m_HorizontalBearingY = i5271[3]
  i5270.m_HorizontalAdvance = i5271[4]
  return i5270
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5272 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5273 = data
  i5272.m_X = i5273[0]
  i5272.m_Y = i5273[1]
  i5272.m_Width = i5273[2]
  i5272.m_Height = i5273[3]
  return i5272
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5276 = root || request.c( 'TMPro.TMP_Character' )
  var i5277 = data
  i5276.m_ElementType = i5277[0]
  i5276.m_Unicode = i5277[1]
  i5276.m_GlyphIndex = i5277[2]
  i5276.m_Scale = i5277[3]
  return i5276
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5282 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5283 = data
  i5282.Name = i5283[0]
  i5282.PointSize = i5283[1]
  i5282.Scale = i5283[2]
  i5282.CharacterCount = i5283[3]
  i5282.LineHeight = i5283[4]
  i5282.Baseline = i5283[5]
  i5282.Ascender = i5283[6]
  i5282.CapHeight = i5283[7]
  i5282.Descender = i5283[8]
  i5282.CenterLine = i5283[9]
  i5282.SuperscriptOffset = i5283[10]
  i5282.SubscriptOffset = i5283[11]
  i5282.SubSize = i5283[12]
  i5282.Underline = i5283[13]
  i5282.UnderlineThickness = i5283[14]
  i5282.strikethrough = i5283[15]
  i5282.strikethroughThickness = i5283[16]
  i5282.TabWidth = i5283[17]
  i5282.Padding = i5283[18]
  i5282.AtlasWidth = i5283[19]
  i5282.AtlasHeight = i5283[20]
  return i5282
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5286 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5287 = data
  i5286.id = i5287[0]
  i5286.x = i5287[1]
  i5286.y = i5287[2]
  i5286.width = i5287[3]
  i5286.height = i5287[4]
  i5286.xOffset = i5287[5]
  i5286.yOffset = i5287[6]
  i5286.xAdvance = i5287[7]
  i5286.scale = i5287[8]
  return i5286
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5288 = root || request.c( 'TMPro.KerningTable' )
  var i5289 = data
  var i5291 = i5289[0]
  var i5290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.add(request.d('TMPro.KerningPair', i5291[i + 0]));
  }
  i5288.kerningPairs = i5290
  return i5288
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5294 = root || request.c( 'TMPro.KerningPair' )
  var i5295 = data
  i5294.xOffset = i5295[0]
  i5294.m_FirstGlyph = i5295[1]
  i5294.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5295[2], i5294.m_FirstGlyphAdjustments)
  i5294.m_SecondGlyph = i5295[3]
  i5294.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5295[4], i5294.m_SecondGlyphAdjustments)
  i5294.m_IgnoreSpacingAdjustments = !!i5295[5]
  return i5294
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5296 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5297 = data
  var i5299 = i5297[0]
  var i5298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5299.length; i += 1) {
    i5298.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5299[i + 0]));
  }
  i5296.m_GlyphPairAdjustmentRecords = i5298
  return i5296
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5302 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5303 = data
  i5302.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5303[0], i5302.m_FirstAdjustmentRecord)
  i5302.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5303[1], i5302.m_SecondAdjustmentRecord)
  i5302.m_FeatureLookupFlags = i5303[2]
  return i5302
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5306 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5307 = data
  i5306.sourceFontFileName = i5307[0]
  i5306.sourceFontFileGUID = i5307[1]
  i5306.pointSizeSamplingMode = i5307[2]
  i5306.pointSize = i5307[3]
  i5306.padding = i5307[4]
  i5306.packingMode = i5307[5]
  i5306.atlasWidth = i5307[6]
  i5306.atlasHeight = i5307[7]
  i5306.characterSetSelectionMode = i5307[8]
  i5306.characterSequence = i5307[9]
  i5306.referencedFontAssetGUID = i5307[10]
  i5306.referencedTextAssetGUID = i5307[11]
  i5306.fontStyle = i5307[12]
  i5306.fontStyleModifier = i5307[13]
  i5306.renderMode = i5307[14]
  i5306.includeFontFeatures = !!i5307[15]
  return i5306
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5310 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5311 = data
  request.r(i5311[0], i5311[1], 0, i5310, 'regularTypeface')
  request.r(i5311[2], i5311[3], 0, i5310, 'italicTypeface')
  return i5310
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i5312 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i5313 = data
  var i5315 = i5313[0]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i5315[i + 0]) );
  }
  i5312.m_CustomBlends = i5314
  return i5312
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i5318 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i5319 = data
  i5318.m_From = i5319[0]
  i5318.m_To = i5319[1]
  i5318.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i5319[2], i5318.m_Blend)
  return i5318
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i5320 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i5321 = data
  var i5323 = i5321[0]
  var i5322 = []
  for(var i = 0; i < i5323.length; i += 1) {
    i5322.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i5323[i + 0]) );
  }
  i5320.PositionNoise = i5322
  var i5325 = i5321[1]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i5325[i + 0]) );
  }
  i5320.OrientationNoise = i5324
  return i5320
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i5328 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i5329 = data
  i5328.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i5329[0], i5328.X)
  i5328.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i5329[1], i5328.Y)
  i5328.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i5329[2], i5328.Z)
  return i5328
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i5330 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i5331 = data
  i5330.Frequency = i5331[0]
  i5330.Amplitude = i5331[1]
  i5330.Constant = !!i5331[2]
  return i5330
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i5332 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i5333 = data
  var i5335 = i5333[0]
  var i5334 = []
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.push( request.d('ScenarioFour.CameraFov', i5335[i + 0]) );
  }
  i5332._fovList = i5334
  return i5332
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i5338 = root || request.c( 'ScenarioFour.CameraFov' )
  var i5339 = data
  i5338._cameraType = i5339[0]
  i5338._landscape = i5339[1]
  i5338._portrait = i5339[2]
  return i5338
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5340 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5341 = data
  i5340.useSafeMode = !!i5341[0]
  i5340.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5341[1], i5340.safeModeOptions)
  i5340.timeScale = i5341[2]
  i5340.useSmoothDeltaTime = !!i5341[3]
  i5340.maxSmoothUnscaledTime = i5341[4]
  i5340.rewindCallbackMode = i5341[5]
  i5340.showUnityEditorReport = !!i5341[6]
  i5340.logBehaviour = i5341[7]
  i5340.drawGizmos = !!i5341[8]
  i5340.defaultRecyclable = !!i5341[9]
  i5340.defaultAutoPlay = i5341[10]
  i5340.defaultUpdateType = i5341[11]
  i5340.defaultTimeScaleIndependent = !!i5341[12]
  i5340.defaultEaseType = i5341[13]
  i5340.defaultEaseOvershootOrAmplitude = i5341[14]
  i5340.defaultEasePeriod = i5341[15]
  i5340.defaultAutoKill = !!i5341[16]
  i5340.defaultLoopType = i5341[17]
  i5340.debugMode = !!i5341[18]
  i5340.debugStoreTargetId = !!i5341[19]
  i5340.showPreviewPanel = !!i5341[20]
  i5340.storeSettingsLocation = i5341[21]
  i5340.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5341[22], i5340.modules)
  i5340.createASMDEF = !!i5341[23]
  i5340.showPlayingTweens = !!i5341[24]
  i5340.showPausedTweens = !!i5341[25]
  return i5340
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5343 = data
  i5342.logBehaviour = i5343[0]
  i5342.nestedTweenFailureBehaviour = i5343[1]
  return i5342
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5344 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5345 = data
  i5344.showPanel = !!i5345[0]
  i5344.audioEnabled = !!i5345[1]
  i5344.physicsEnabled = !!i5345[2]
  i5344.physics2DEnabled = !!i5345[3]
  i5344.spriteEnabled = !!i5345[4]
  i5344.uiEnabled = !!i5345[5]
  i5344.textMeshProEnabled = !!i5345[6]
  i5344.tk2DEnabled = !!i5345[7]
  i5344.deAudioEnabled = !!i5345[8]
  i5344.deUnityExtendedEnabled = !!i5345[9]
  i5344.epoOutlineEnabled = !!i5345[10]
  return i5344
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5346 = root || request.c( 'TMPro.TMP_Settings' )
  var i5347 = data
  i5346.m_enableWordWrapping = !!i5347[0]
  i5346.m_enableKerning = !!i5347[1]
  i5346.m_enableExtraPadding = !!i5347[2]
  i5346.m_enableTintAllSprites = !!i5347[3]
  i5346.m_enableParseEscapeCharacters = !!i5347[4]
  i5346.m_EnableRaycastTarget = !!i5347[5]
  i5346.m_GetFontFeaturesAtRuntime = !!i5347[6]
  i5346.m_missingGlyphCharacter = i5347[7]
  i5346.m_warningsDisabled = !!i5347[8]
  request.r(i5347[9], i5347[10], 0, i5346, 'm_defaultFontAsset')
  i5346.m_defaultFontAssetPath = i5347[11]
  i5346.m_defaultFontSize = i5347[12]
  i5346.m_defaultAutoSizeMinRatio = i5347[13]
  i5346.m_defaultAutoSizeMaxRatio = i5347[14]
  i5346.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5347[15], i5347[16] )
  i5346.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5347[17], i5347[18] )
  i5346.m_autoSizeTextContainer = !!i5347[19]
  i5346.m_IsTextObjectScaleStatic = !!i5347[20]
  var i5349 = i5347[21]
  var i5348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5349.length; i += 2) {
  request.r(i5349[i + 0], i5349[i + 1], 1, i5348, '')
  }
  i5346.m_fallbackFontAssets = i5348
  i5346.m_matchMaterialPreset = !!i5347[22]
  request.r(i5347[23], i5347[24], 0, i5346, 'm_defaultSpriteAsset')
  i5346.m_defaultSpriteAssetPath = i5347[25]
  i5346.m_enableEmojiSupport = !!i5347[26]
  i5346.m_MissingCharacterSpriteUnicode = i5347[27]
  i5346.m_defaultColorGradientPresetsPath = i5347[28]
  request.r(i5347[29], i5347[30], 0, i5346, 'm_defaultStyleSheet')
  i5346.m_StyleSheetsResourcePath = i5347[31]
  request.r(i5347[32], i5347[33], 0, i5346, 'm_leadingCharacters')
  request.r(i5347[34], i5347[35], 0, i5346, 'm_followingCharacters')
  i5346.m_UseModernHangulLineBreakingRules = !!i5347[36]
  return i5346
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5350 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5351 = data
  var i5353 = i5351[0]
  var i5352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5353.length; i += 1) {
    i5352.add(request.d('TMPro.TMP_Style', i5353[i + 0]));
  }
  i5350.m_StyleList = i5352
  return i5350
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5356 = root || request.c( 'TMPro.TMP_Style' )
  var i5357 = data
  i5356.m_Name = i5357[0]
  i5356.m_HashCode = i5357[1]
  i5356.m_OpeningDefinition = i5357[2]
  i5356.m_ClosingDefinition = i5357[3]
  i5356.m_OpeningTagArray = i5357[4]
  i5356.m_ClosingTagArray = i5357[5]
  i5356.m_OpeningTagUnicodeArray = i5357[6]
  i5356.m_ClosingTagUnicodeArray = i5357[7]
  return i5356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5359 = data
  var i5361 = i5359[0]
  var i5360 = []
  for(var i = 0; i < i5361.length; i += 1) {
    i5360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5361[i + 0]) );
  }
  i5358.files = i5360
  i5358.componentToPrefabIds = i5359[1]
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5365 = data
  i5364.path = i5365[0]
  request.r(i5365[1], i5365[2], 0, i5364, 'unityObject')
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5367 = data
  var i5369 = i5367[0]
  var i5368 = []
  for(var i = 0; i < i5369.length; i += 1) {
    i5368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5369[i + 0]) );
  }
  i5366.scriptsExecutionOrder = i5368
  var i5371 = i5367[1]
  var i5370 = []
  for(var i = 0; i < i5371.length; i += 1) {
    i5370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5371[i + 0]) );
  }
  i5366.sortingLayers = i5370
  var i5373 = i5367[2]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5373[i + 0]) );
  }
  i5366.cullingLayers = i5372
  i5366.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5367[3], i5366.timeSettings)
  i5366.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5367[4], i5366.physicsSettings)
  i5366.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5367[5], i5366.physics2DSettings)
  i5366.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5367[6], i5366.qualitySettings)
  i5366.enableRealtimeShadows = !!i5367[7]
  i5366.autoInstantiatePrefabs = !!i5367[8]
  i5366.enableAutoInstancing = !!i5367[9]
  i5366.lightmapEncodingQuality = i5367[10]
  i5366.desiredColorSpace = i5367[11]
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5377 = data
  i5376.name = i5377[0]
  i5376.value = i5377[1]
  return i5376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5381 = data
  i5380.id = i5381[0]
  i5380.name = i5381[1]
  i5380.value = i5381[2]
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5385 = data
  i5384.id = i5385[0]
  i5384.name = i5385[1]
  return i5384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5387 = data
  i5386.fixedDeltaTime = i5387[0]
  i5386.maximumDeltaTime = i5387[1]
  i5386.timeScale = i5387[2]
  i5386.maximumParticleTimestep = i5387[3]
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5389 = data
  i5388.gravity = new pc.Vec3( i5389[0], i5389[1], i5389[2] )
  i5388.defaultSolverIterations = i5389[3]
  i5388.bounceThreshold = i5389[4]
  i5388.autoSyncTransforms = !!i5389[5]
  i5388.autoSimulation = !!i5389[6]
  var i5391 = i5389[7]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5391[i + 0]) );
  }
  i5388.collisionMatrix = i5390
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5395 = data
  i5394.enabled = !!i5395[0]
  i5394.layerId = i5395[1]
  i5394.otherLayerId = i5395[2]
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5397 = data
  request.r(i5397[0], i5397[1], 0, i5396, 'material')
  i5396.gravity = new pc.Vec2( i5397[2], i5397[3] )
  i5396.positionIterations = i5397[4]
  i5396.velocityIterations = i5397[5]
  i5396.velocityThreshold = i5397[6]
  i5396.maxLinearCorrection = i5397[7]
  i5396.maxAngularCorrection = i5397[8]
  i5396.maxTranslationSpeed = i5397[9]
  i5396.maxRotationSpeed = i5397[10]
  i5396.timeToSleep = i5397[11]
  i5396.linearSleepTolerance = i5397[12]
  i5396.angularSleepTolerance = i5397[13]
  i5396.defaultContactOffset = i5397[14]
  i5396.autoSimulation = !!i5397[15]
  i5396.queriesHitTriggers = !!i5397[16]
  i5396.queriesStartInColliders = !!i5397[17]
  i5396.callbacksOnDisable = !!i5397[18]
  i5396.reuseCollisionCallbacks = !!i5397[19]
  i5396.autoSyncTransforms = !!i5397[20]
  var i5399 = i5397[21]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5399[i + 0]) );
  }
  i5396.collisionMatrix = i5398
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5403 = data
  i5402.enabled = !!i5403[0]
  i5402.layerId = i5403[1]
  i5402.otherLayerId = i5403[2]
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5405 = data
  var i5407 = i5405[0]
  var i5406 = []
  for(var i = 0; i < i5407.length; i += 1) {
    i5406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5407[i + 0]) );
  }
  i5404.qualityLevels = i5406
  var i5409 = i5405[1]
  var i5408 = []
  for(var i = 0; i < i5409.length; i += 1) {
    i5408.push( i5409[i + 0] );
  }
  i5404.names = i5408
  i5404.shadows = i5405[2]
  i5404.anisotropicFiltering = i5405[3]
  i5404.antiAliasing = i5405[4]
  i5404.lodBias = i5405[5]
  i5404.shadowCascades = i5405[6]
  i5404.shadowDistance = i5405[7]
  i5404.shadowmaskMode = i5405[8]
  i5404.shadowProjection = i5405[9]
  i5404.shadowResolution = i5405[10]
  i5404.softParticles = !!i5405[11]
  i5404.softVegetation = !!i5405[12]
  i5404.activeColorSpace = i5405[13]
  i5404.desiredColorSpace = i5405[14]
  i5404.masterTextureLimit = i5405[15]
  i5404.maxQueuedFrames = i5405[16]
  i5404.particleRaycastBudget = i5405[17]
  i5404.pixelLightCount = i5405[18]
  i5404.realtimeReflectionProbes = !!i5405[19]
  i5404.shadowCascade2Split = i5405[20]
  i5404.shadowCascade4Split = new pc.Vec3( i5405[21], i5405[22], i5405[23] )
  i5404.streamingMipmapsActive = !!i5405[24]
  i5404.vSyncCount = i5405[25]
  i5404.asyncUploadBufferSize = i5405[26]
  i5404.asyncUploadTimeSlice = i5405[27]
  i5404.billboardsFaceCameraPosition = !!i5405[28]
  i5404.shadowNearPlaneOffset = i5405[29]
  i5404.streamingMipmapsMemoryBudget = i5405[30]
  i5404.maximumLODLevel = i5405[31]
  i5404.streamingMipmapsAddAllCameras = !!i5405[32]
  i5404.streamingMipmapsMaxLevelReduction = i5405[33]
  i5404.streamingMipmapsRenderersPerFrame = i5405[34]
  i5404.resolutionScalingFixedDPIFactor = i5405[35]
  i5404.streamingMipmapsMaxFileIORequests = i5405[36]
  i5404.currentQualityLevel = i5405[37]
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5415 = data
  i5414.weight = i5415[0]
  i5414.vertices = i5415[1]
  i5414.normals = i5415[2]
  i5414.tangents = i5415[3]
  return i5414
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5416 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5417 = data
  request.r(i5417[0], i5417[1], 0, i5416, 'm_ObjectArgument')
  i5416.m_ObjectArgumentAssemblyTypeName = i5417[2]
  i5416.m_IntArgument = i5417[3]
  i5416.m_FloatArgument = i5417[4]
  i5416.m_StringArgument = i5417[5]
  i5416.m_BoolArgument = !!i5417[6]
  return i5416
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5418 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5419 = data
  i5418.xPlacement = i5419[0]
  i5418.yPlacement = i5419[1]
  i5418.xAdvance = i5419[2]
  i5418.yAdvance = i5419[3]
  return i5418
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5420 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5421 = data
  i5420.m_GlyphIndex = i5421[0]
  i5420.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5421[1], i5420.m_GlyphValueRecord)
  return i5420
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5422 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5423 = data
  i5422.m_XPlacement = i5423[0]
  i5422.m_YPlacement = i5423[1]
  i5422.m_XAdvance = i5423[2]
  i5422.m_YAdvance = i5423[3]
  return i5422
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1149";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CRSEDPlayableAdRepack";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "869b6e5e-5885-440f-a516-da01b8e6e5a1";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

