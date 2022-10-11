var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i9558 = root || request.c( 'UnityEngine.JointSpring' )
  var i9559 = data
  i9558.spring = i9559[0]
  i9558.damper = i9559[1]
  i9558.targetPosition = i9559[2]
  return i9558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i9560 = root || request.c( 'UnityEngine.JointMotor' )
  var i9561 = data
  i9560.m_TargetVelocity = i9561[0]
  i9560.m_Force = i9561[1]
  i9560.m_FreeSpin = i9561[2]
  return i9560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i9562 = root || request.c( 'UnityEngine.JointLimits' )
  var i9563 = data
  i9562.m_Min = i9563[0]
  i9562.m_Max = i9563[1]
  i9562.m_Bounciness = i9563[2]
  i9562.m_BounceMinVelocity = i9563[3]
  i9562.m_ContactDistance = i9563[4]
  i9562.minBounce = i9563[5]
  i9562.maxBounce = i9563[6]
  return i9562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i9564 = root || request.c( 'UnityEngine.JointDrive' )
  var i9565 = data
  i9564.m_PositionSpring = i9565[0]
  i9564.m_PositionDamper = i9565[1]
  i9564.m_MaximumForce = i9565[2]
  return i9564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i9566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i9567 = data
  i9566.m_Spring = i9567[0]
  i9566.m_Damper = i9567[1]
  return i9566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i9568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i9569 = data
  i9568.m_Limit = i9569[0]
  i9568.m_Bounciness = i9569[1]
  i9568.m_ContactDistance = i9569[2]
  return i9568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i9570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i9571 = data
  i9570.m_ExtremumSlip = i9571[0]
  i9570.m_ExtremumValue = i9571[1]
  i9570.m_AsymptoteSlip = i9571[2]
  i9570.m_AsymptoteValue = i9571[3]
  i9570.m_Stiffness = i9571[4]
  return i9570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i9572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i9573 = data
  i9572.m_LowerAngle = i9573[0]
  i9572.m_UpperAngle = i9573[1]
  return i9572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i9574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i9575 = data
  i9574.m_MotorSpeed = i9575[0]
  i9574.m_MaximumMotorTorque = i9575[1]
  return i9574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i9576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i9577 = data
  i9576.m_DampingRatio = i9577[0]
  i9576.m_Frequency = i9577[1]
  i9576.m_Angle = i9577[2]
  return i9576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i9578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i9579 = data
  i9578.m_LowerTranslation = i9579[0]
  i9578.m_UpperTranslation = i9579[1]
  return i9578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i9580 = root || new pc.UnityMaterial()
  var i9581 = data
  i9580.name = i9581[0]
  request.r(i9581[1], i9581[2], 0, i9580, 'shader')
  i9580.renderQueue = i9581[3]
  i9580.enableInstancing = !!i9581[4]
  var i9583 = i9581[5]
  var i9582 = []
  for(var i = 0; i < i9583.length; i += 1) {
    i9582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i9583[i + 0]) );
  }
  i9580.floatParameters = i9582
  var i9585 = i9581[6]
  var i9584 = []
  for(var i = 0; i < i9585.length; i += 1) {
    i9584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i9585[i + 0]) );
  }
  i9580.colorParameters = i9584
  var i9587 = i9581[7]
  var i9586 = []
  for(var i = 0; i < i9587.length; i += 1) {
    i9586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i9587[i + 0]) );
  }
  i9580.vectorParameters = i9586
  var i9589 = i9581[8]
  var i9588 = []
  for(var i = 0; i < i9589.length; i += 1) {
    i9588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i9589[i + 0]) );
  }
  i9580.textureParameters = i9588
  var i9591 = i9581[9]
  var i9590 = []
  for(var i = 0; i < i9591.length; i += 1) {
    i9590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i9591[i + 0]) );
  }
  i9580.materialFlags = i9590
  return i9580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i9594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i9595 = data
  i9594.name = i9595[0]
  i9594.value = i9595[1]
  return i9594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i9598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i9599 = data
  i9598.name = i9599[0]
  i9598.value = new pc.Color(i9599[1], i9599[2], i9599[3], i9599[4])
  return i9598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i9602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i9603 = data
  i9602.name = i9603[0]
  i9602.value = new pc.Vec4( i9603[1], i9603[2], i9603[3], i9603[4] )
  return i9602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i9606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i9607 = data
  i9606.name = i9607[0]
  request.r(i9607[1], i9607[2], 0, i9606, 'value')
  return i9606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i9610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i9611 = data
  i9610.name = i9611[0]
  i9610.enabled = !!i9611[1]
  return i9610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i9612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i9613 = data
  i9612.name = i9613[0]
  i9612.width = i9613[1]
  i9612.height = i9613[2]
  i9612.mipmapCount = i9613[3]
  i9612.anisoLevel = i9613[4]
  i9612.filterMode = i9613[5]
  i9612.hdr = !!i9613[6]
  i9612.format = i9613[7]
  i9612.wrapMode = i9613[8]
  i9612.alphaIsTransparency = !!i9613[9]
  i9612.alphaSource = i9613[10]
  return i9612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i9614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i9615 = data
  i9614.position = new pc.Vec3( i9615[0], i9615[1], i9615[2] )
  i9614.scale = new pc.Vec3( i9615[3], i9615[4], i9615[5] )
  i9614.rotation = new pc.Quat(i9615[6], i9615[7], i9615[8], i9615[9])
  return i9614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i9616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i9617 = data
  i9616.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i9617[0], i9616.main)
  i9616.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i9617[1], i9616.colorBySpeed)
  i9616.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i9617[2], i9616.colorOverLifetime)
  i9616.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i9617[3], i9616.emission)
  i9616.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i9617[4], i9616.rotationBySpeed)
  i9616.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i9617[5], i9616.rotationOverLifetime)
  i9616.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i9617[6], i9616.shape)
  i9616.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i9617[7], i9616.sizeBySpeed)
  i9616.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i9617[8], i9616.sizeOverLifetime)
  i9616.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i9617[9], i9616.textureSheetAnimation)
  i9616.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i9617[10], i9616.velocityOverLifetime)
  i9616.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i9617[11], i9616.noise)
  i9616.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i9617[12], i9616.inheritVelocity)
  i9616.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i9617[13], i9616.forceOverLifetime)
  i9616.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i9617[14], i9616.limitVelocityOverLifetime)
  i9616.useAutoRandomSeed = !!i9617[15]
  i9616.randomSeed = i9617[16]
  return i9616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i9618 = root || new pc.ParticleSystemMain()
  var i9619 = data
  i9618.duration = i9619[0]
  i9618.loop = !!i9619[1]
  i9618.prewarm = !!i9619[2]
  i9618.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[3], i9618.startDelay)
  i9618.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[4], i9618.startLifetime)
  i9618.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[5], i9618.startSpeed)
  i9618.startSize3D = !!i9619[6]
  i9618.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[7], i9618.startSizeX)
  i9618.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[8], i9618.startSizeY)
  i9618.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[9], i9618.startSizeZ)
  i9618.startRotation3D = !!i9619[10]
  i9618.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[11], i9618.startRotationX)
  i9618.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[12], i9618.startRotationY)
  i9618.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[13], i9618.startRotationZ)
  i9618.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9619[14], i9618.startColor)
  i9618.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9619[15], i9618.gravityModifier)
  i9618.simulationSpace = i9619[16]
  request.r(i9619[17], i9619[18], 0, i9618, 'customSimulationSpace')
  i9618.simulationSpeed = i9619[19]
  i9618.useUnscaledTime = !!i9619[20]
  i9618.scalingMode = i9619[21]
  i9618.playOnAwake = !!i9619[22]
  i9618.maxParticles = i9619[23]
  i9618.emitterVelocityMode = i9619[24]
  i9618.stopAction = i9619[25]
  return i9618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i9620 = root || new pc.MinMaxCurve()
  var i9621 = data
  i9620.mode = i9621[0]
  i9620.curveMin = new pc.AnimationCurve( { keys_flow: i9621[1] } )
  i9620.curveMax = new pc.AnimationCurve( { keys_flow: i9621[2] } )
  i9620.curveMultiplier = i9621[3]
  i9620.constantMin = i9621[4]
  i9620.constantMax = i9621[5]
  return i9620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i9622 = root || new pc.MinMaxGradient()
  var i9623 = data
  i9622.mode = i9623[0]
  i9622.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i9623[1], i9622.gradientMin)
  i9622.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i9623[2], i9622.gradientMax)
  i9622.colorMin = new pc.Color(i9623[3], i9623[4], i9623[5], i9623[6])
  i9622.colorMax = new pc.Color(i9623[7], i9623[8], i9623[9], i9623[10])
  return i9622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i9624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i9625 = data
  i9624.mode = i9625[0]
  var i9627 = i9625[1]
  var i9626 = []
  for(var i = 0; i < i9627.length; i += 1) {
    i9626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i9627[i + 0]) );
  }
  i9624.colorKeys = i9626
  var i9629 = i9625[2]
  var i9628 = []
  for(var i = 0; i < i9629.length; i += 1) {
    i9628.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i9629[i + 0]) );
  }
  i9624.alphaKeys = i9628
  return i9624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i9630 = root || new pc.ParticleSystemColorBySpeed()
  var i9631 = data
  i9630.enabled = !!i9631[0]
  i9630.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9631[1], i9630.color)
  i9630.range = new pc.Vec2( i9631[2], i9631[3] )
  return i9630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i9634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i9635 = data
  i9634.color = new pc.Color(i9635[0], i9635[1], i9635[2], i9635[3])
  i9634.time = i9635[4]
  return i9634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i9638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i9639 = data
  i9638.alpha = i9639[0]
  i9638.time = i9639[1]
  return i9638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i9640 = root || new pc.ParticleSystemColorOverLifetime()
  var i9641 = data
  i9640.enabled = !!i9641[0]
  i9640.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i9641[1], i9640.color)
  return i9640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i9642 = root || new pc.ParticleSystemEmitter()
  var i9643 = data
  i9642.enabled = !!i9643[0]
  i9642.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9643[1], i9642.rateOverTime)
  i9642.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9643[2], i9642.rateOverDistance)
  var i9645 = i9643[3]
  var i9644 = []
  for(var i = 0; i < i9645.length; i += 1) {
    i9644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i9645[i + 0]) );
  }
  i9642.bursts = i9644
  return i9642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i9648 = root || new pc.ParticleSystemBurst()
  var i9649 = data
  i9648.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9649[0], i9648.count)
  i9648.cycleCount = i9649[1]
  i9648.minCount = i9649[2]
  i9648.maxCount = i9649[3]
  i9648.repeatInterval = i9649[4]
  i9648.time = i9649[5]
  return i9648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i9650 = root || new pc.ParticleSystemRotationBySpeed()
  var i9651 = data
  i9650.enabled = !!i9651[0]
  i9650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9651[1], i9650.x)
  i9650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9651[2], i9650.y)
  i9650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9651[3], i9650.z)
  i9650.separateAxes = !!i9651[4]
  i9650.range = new pc.Vec2( i9651[5], i9651[6] )
  return i9650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i9652 = root || new pc.ParticleSystemRotationOverLifetime()
  var i9653 = data
  i9652.enabled = !!i9653[0]
  i9652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9653[1], i9652.x)
  i9652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9653[2], i9652.y)
  i9652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9653[3], i9652.z)
  i9652.separateAxes = !!i9653[4]
  return i9652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i9654 = root || new pc.ParticleSystemShape()
  var i9655 = data
  i9654.enabled = !!i9655[0]
  i9654.shapeType = i9655[1]
  i9654.randomDirectionAmount = i9655[2]
  i9654.sphericalDirectionAmount = i9655[3]
  i9654.randomPositionAmount = i9655[4]
  i9654.alignToDirection = !!i9655[5]
  i9654.radius = i9655[6]
  i9654.radiusMode = i9655[7]
  i9654.radiusSpread = i9655[8]
  i9654.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9655[9], i9654.radiusSpeed)
  i9654.radiusThickness = i9655[10]
  i9654.angle = i9655[11]
  i9654.length = i9655[12]
  i9654.boxThickness = new pc.Vec3( i9655[13], i9655[14], i9655[15] )
  i9654.meshShapeType = i9655[16]
  request.r(i9655[17], i9655[18], 0, i9654, 'mesh')
  request.r(i9655[19], i9655[20], 0, i9654, 'meshRenderer')
  request.r(i9655[21], i9655[22], 0, i9654, 'skinnedMeshRenderer')
  i9654.useMeshMaterialIndex = !!i9655[23]
  i9654.meshMaterialIndex = i9655[24]
  i9654.useMeshColors = !!i9655[25]
  i9654.normalOffset = i9655[26]
  i9654.arc = i9655[27]
  i9654.arcMode = i9655[28]
  i9654.arcSpread = i9655[29]
  i9654.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9655[30], i9654.arcSpeed)
  i9654.donutRadius = i9655[31]
  i9654.position = new pc.Vec3( i9655[32], i9655[33], i9655[34] )
  i9654.rotation = new pc.Vec3( i9655[35], i9655[36], i9655[37] )
  i9654.scale = new pc.Vec3( i9655[38], i9655[39], i9655[40] )
  return i9654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i9656 = root || new pc.ParticleSystemSizeBySpeed()
  var i9657 = data
  i9656.enabled = !!i9657[0]
  i9656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9657[1], i9656.x)
  i9656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9657[2], i9656.y)
  i9656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9657[3], i9656.z)
  i9656.separateAxes = !!i9657[4]
  i9656.range = new pc.Vec2( i9657[5], i9657[6] )
  return i9656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i9658 = root || new pc.ParticleSystemSizeOverLifetime()
  var i9659 = data
  i9658.enabled = !!i9659[0]
  i9658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9659[1], i9658.x)
  i9658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9659[2], i9658.y)
  i9658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9659[3], i9658.z)
  i9658.separateAxes = !!i9659[4]
  return i9658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i9660 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i9661 = data
  i9660.enabled = !!i9661[0]
  i9660.mode = i9661[1]
  i9660.animation = i9661[2]
  i9660.numTilesX = i9661[3]
  i9660.numTilesY = i9661[4]
  i9660.useRandomRow = !!i9661[5]
  i9660.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9661[6], i9660.frameOverTime)
  i9660.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9661[7], i9660.startFrame)
  i9660.cycleCount = i9661[8]
  i9660.rowIndex = i9661[9]
  i9660.flipU = i9661[10]
  i9660.flipV = i9661[11]
  i9660.spriteCount = i9661[12]
  var i9663 = i9661[13]
  var i9662 = []
  for(var i = 0; i < i9663.length; i += 2) {
  request.r(i9663[i + 0], i9663[i + 1], 2, i9662, '')
  }
  i9660.sprites = i9662
  return i9660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i9666 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i9667 = data
  i9666.enabled = !!i9667[0]
  i9666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9667[1], i9666.x)
  i9666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9667[2], i9666.y)
  i9666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9667[3], i9666.z)
  i9666.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9667[4], i9666.speedModifier)
  i9666.space = i9667[5]
  return i9666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i9668 = root || new pc.ParticleSystemNoise()
  var i9669 = data
  i9668.enabled = !!i9669[0]
  i9668.separateAxes = !!i9669[1]
  i9668.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[2], i9668.strengthX)
  i9668.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[3], i9668.strengthY)
  i9668.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[4], i9668.strengthZ)
  i9668.frequency = i9669[5]
  i9668.damping = !!i9669[6]
  i9668.octaveCount = i9669[7]
  i9668.octaveMultiplier = i9669[8]
  i9668.octaveScale = i9669[9]
  i9668.quality = i9669[10]
  i9668.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[11], i9668.scrollSpeed)
  i9668.scrollSpeedMultiplier = i9669[12]
  i9668.remapEnabled = !!i9669[13]
  i9668.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[14], i9668.remapX)
  i9668.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[15], i9668.remapY)
  i9668.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[16], i9668.remapZ)
  i9668.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[17], i9668.positionAmount)
  i9668.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[18], i9668.rotationAmount)
  i9668.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9669[19], i9668.sizeAmount)
  return i9668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i9670 = root || new pc.ParticleSystemInheritVelocity()
  var i9671 = data
  i9670.enabled = !!i9671[0]
  i9670.mode = i9671[1]
  i9670.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9671[2], i9670.curve)
  return i9670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i9672 = root || new pc.ParticleSystemForceOverLifetime()
  var i9673 = data
  i9672.enabled = !!i9673[0]
  i9672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9673[1], i9672.x)
  i9672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9673[2], i9672.y)
  i9672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9673[3], i9672.z)
  i9672.space = i9673[4]
  i9672.randomized = !!i9673[5]
  return i9672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i9674 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i9675 = data
  i9674.enabled = !!i9675[0]
  i9674.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9675[1], i9674.limitX)
  i9674.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9675[2], i9674.limitY)
  i9674.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9675[3], i9674.limitZ)
  i9674.dampen = i9675[4]
  i9674.separateAxes = !!i9675[5]
  i9674.space = i9675[6]
  i9674.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i9675[7], i9674.drag)
  i9674.multiplyDragByParticleSize = !!i9675[8]
  i9674.multiplyDragByParticleVelocity = !!i9675[9]
  return i9674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i9676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i9677 = data
  i9676.enabled = !!i9677[0]
  request.r(i9677[1], i9677[2], 0, i9676, 'sharedMaterial')
  var i9679 = i9677[3]
  var i9678 = []
  for(var i = 0; i < i9679.length; i += 2) {
  request.r(i9679[i + 0], i9679[i + 1], 2, i9678, '')
  }
  i9676.sharedMaterials = i9678
  i9676.receiveShadows = !!i9677[4]
  i9676.shadowCastingMode = i9677[5]
  i9676.sortingLayerID = i9677[6]
  i9676.sortingOrder = i9677[7]
  i9676.lightmapIndex = i9677[8]
  i9676.lightmapSceneIndex = i9677[9]
  i9676.lightmapScaleOffset = new pc.Vec4( i9677[10], i9677[11], i9677[12], i9677[13] )
  i9676.lightProbeUsage = i9677[14]
  i9676.reflectionProbeUsage = i9677[15]
  request.r(i9677[16], i9677[17], 0, i9676, 'mesh')
  i9676.meshCount = i9677[18]
  i9676.activeVertexStreamsCount = i9677[19]
  i9676.alignment = i9677[20]
  i9676.renderMode = i9677[21]
  i9676.sortMode = i9677[22]
  i9676.lengthScale = i9677[23]
  i9676.velocityScale = i9677[24]
  i9676.cameraVelocityScale = i9677[25]
  i9676.normalDirection = i9677[26]
  i9676.sortingFudge = i9677[27]
  i9676.minParticleSize = i9677[28]
  i9676.maxParticleSize = i9677[29]
  i9676.pivot = new pc.Vec3( i9677[30], i9677[31], i9677[32] )
  request.r(i9677[33], i9677[34], 0, i9676, 'trailMaterial')
  return i9676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i9682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i9683 = data
  i9682.name = i9683[0]
  i9682.tag = i9683[1]
  i9682.enabled = !!i9683[2]
  i9682.isStatic = !!i9683[3]
  i9682.layer = i9683[4]
  return i9682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i9684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i9685 = data
  request.r(i9685[0], i9685[1], 0, i9684, 'sharedMesh')
  return i9684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i9686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i9687 = data
  request.r(i9687[0], i9687[1], 0, i9686, 'additionalVertexStreams')
  i9686.enabled = !!i9687[2]
  request.r(i9687[3], i9687[4], 0, i9686, 'sharedMaterial')
  var i9689 = i9687[5]
  var i9688 = []
  for(var i = 0; i < i9689.length; i += 2) {
  request.r(i9689[i + 0], i9689[i + 1], 2, i9688, '')
  }
  i9686.sharedMaterials = i9688
  i9686.receiveShadows = !!i9687[6]
  i9686.shadowCastingMode = i9687[7]
  i9686.sortingLayerID = i9687[8]
  i9686.sortingOrder = i9687[9]
  i9686.lightmapIndex = i9687[10]
  i9686.lightmapSceneIndex = i9687[11]
  i9686.lightmapScaleOffset = new pc.Vec4( i9687[12], i9687[13], i9687[14], i9687[15] )
  i9686.lightProbeUsage = i9687[16]
  i9686.reflectionProbeUsage = i9687[17]
  return i9686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i9690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i9691 = data
  i9690.name = i9691[0]
  i9690.halfPrecision = !!i9691[1]
  i9690.vertexCount = i9691[2]
  i9690.aabb = i9691[3]
  var i9693 = i9691[4]
  var i9692 = []
  for(var i = 0; i < i9693.length; i += 1) {
    i9692.push( !!i9693[i + 0] );
  }
  i9690.streams = i9692
  i9690.vertices = i9691[5]
  var i9695 = i9691[6]
  var i9694 = []
  for(var i = 0; i < i9695.length; i += 1) {
    i9694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i9695[i + 0]) );
  }
  i9690.subMeshes = i9694
  var i9697 = i9691[7]
  var i9696 = []
  for(var i = 0; i < i9697.length; i += 16) {
    i9696.push( new pc.Mat4().setData(i9697[i + 0], i9697[i + 1], i9697[i + 2], i9697[i + 3],  i9697[i + 4], i9697[i + 5], i9697[i + 6], i9697[i + 7],  i9697[i + 8], i9697[i + 9], i9697[i + 10], i9697[i + 11],  i9697[i + 12], i9697[i + 13], i9697[i + 14], i9697[i + 15]) );
  }
  i9690.bindposes = i9696
  var i9699 = i9691[8]
  var i9698 = []
  for(var i = 0; i < i9699.length; i += 1) {
    i9698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i9699[i + 0]) );
  }
  i9690.blendShapes = i9698
  return i9690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i9704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i9705 = data
  i9704.triangles = i9705[0]
  return i9704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i9710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i9711 = data
  i9710.name = i9711[0]
  var i9713 = i9711[1]
  var i9712 = []
  for(var i = 0; i < i9713.length; i += 1) {
    i9712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i9713[i + 0]) );
  }
  i9710.frames = i9712
  return i9710
}

Deserializers["ScenarioFour.Path"] = function (request, data, root) {
  var i9714 = root || request.c( 'ScenarioFour.Path' )
  var i9715 = data
  var i9717 = i9715[0]
  var i9716 = []
  for(var i = 0; i < i9717.length; i += 2) {
  request.r(i9717[i + 0], i9717[i + 1], 2, i9716, '')
  }
  i9714._points = i9716
  return i9714
}

Deserializers["ScenarioFour.PathPoint"] = function (request, data, root) {
  var i9720 = root || request.c( 'ScenarioFour.PathPoint' )
  var i9721 = data
  i9720._time = i9721[0]
  return i9720
}

Deserializers["ScenarioFour.Bullet"] = function (request, data, root) {
  var i9722 = root || request.c( 'ScenarioFour.Bullet' )
  var i9723 = data
  i9722._flyTime = i9723[0]
  i9722._flySpeed = i9723[1]
  return i9722
}

Deserializers["ScenarioFour.Enemy"] = function (request, data, root) {
  var i9724 = root || request.c( 'ScenarioFour.Enemy' )
  var i9725 = data
  request.r(i9725[0], i9725[1], 0, i9724, '_animatedModel')
  request.r(i9725[2], i9725[3], 0, i9724, '_bulletTemplate')
  request.r(i9725[4], i9725[5], 0, i9724, '_shootPoint')
  request.r(i9725[6], i9725[7], 0, i9724, '_bloodEffect')
  return i9724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i9726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i9727 = data
  request.r(i9727[0], i9727[1], 0, i9726, 'animatorController')
  i9726.updateMode = i9727[2]
  var i9729 = i9727[3]
  var i9728 = []
  for(var i = 0; i < i9729.length; i += 2) {
  request.r(i9729[i + 0], i9729[i + 1], 2, i9728, '')
  }
  i9726.humanBones = i9728
  i9726.enabled = !!i9727[4]
  return i9726
}

Deserializers["ScenarioFour.EnemyAnimatedModel"] = function (request, data, root) {
  var i9732 = root || request.c( 'ScenarioFour.EnemyAnimatedModel' )
  var i9733 = data
  return i9732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i9734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i9735 = data
  i9734.enabled = !!i9735[0]
  request.r(i9735[1], i9735[2], 0, i9734, 'sharedMaterial')
  var i9737 = i9735[3]
  var i9736 = []
  for(var i = 0; i < i9737.length; i += 2) {
  request.r(i9737[i + 0], i9737[i + 1], 2, i9736, '')
  }
  i9734.sharedMaterials = i9736
  i9734.receiveShadows = !!i9735[4]
  i9734.shadowCastingMode = i9735[5]
  i9734.sortingLayerID = i9735[6]
  i9734.sortingOrder = i9735[7]
  i9734.lightmapIndex = i9735[8]
  i9734.lightmapSceneIndex = i9735[9]
  i9734.lightmapScaleOffset = new pc.Vec4( i9735[10], i9735[11], i9735[12], i9735[13] )
  i9734.lightProbeUsage = i9735[14]
  i9734.reflectionProbeUsage = i9735[15]
  request.r(i9735[16], i9735[17], 0, i9734, 'sharedMesh')
  var i9739 = i9735[18]
  var i9738 = []
  for(var i = 0; i < i9739.length; i += 2) {
  request.r(i9739[i + 0], i9739[i + 1], 2, i9738, '')
  }
  i9734.bones = i9738
  i9734.updateWhenOffscreen = !!i9735[19]
  i9734.localBounds = i9735[20]
  request.r(i9735[21], i9735[22], 0, i9734, 'rootBone')
  var i9741 = i9735[23]
  var i9740 = []
  for(var i = 0; i < i9741.length; i += 1) {
    i9740.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i9741[i + 0]) );
  }
  i9734.blendShapesWeights = i9740
  return i9734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i9744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i9745 = data
  i9744.weight = i9745[0]
  return i9744
}

Deserializers["ScenarioFour.Director"] = function (request, data, root) {
  var i9746 = root || request.c( 'ScenarioFour.Director' )
  var i9747 = data
  request.r(i9747[0], i9747[1], 0, i9746, '_girl')
  request.r(i9747[2], i9747[3], 0, i9746, '_cameras')
  request.r(i9747[4], i9747[5], 0, i9746, '_uiSwitcher')
  request.r(i9747[6], i9747[7], 0, i9746, '_enemies')
  request.r(i9747[8], i9747[9], 0, i9746, '_teleportEffectStatic')
  var i9749 = i9747[10]
  var i9748 = []
  for(var i = 0; i < i9749.length; i += 1) {
    i9748.push( request.d('ScenarioFour.CameraTiming', i9749[i + 0]) );
  }
  i9746._timings = i9748
  return i9746
}

Deserializers["ScenarioFour.CameraTiming"] = function (request, data, root) {
  var i9752 = root || request.c( 'ScenarioFour.CameraTiming' )
  var i9753 = data
  i9752._timing = i9753[0]
  i9752._cameraType = i9753[1]
  return i9752
}

Deserializers["ScenarioFour.Cameras"] = function (request, data, root) {
  var i9754 = root || request.c( 'ScenarioFour.Cameras' )
  var i9755 = data
  var i9757 = i9755[0]
  var i9756 = []
  for(var i = 0; i < i9757.length; i += 1) {
    i9756.push( request.d('ScenarioFour.CreoCamera', i9757[i + 0]) );
  }
  i9754._cameras = i9756
  request.r(i9755[1], i9755[2], 0, i9754, '_camerasFovList')
  request.r(i9755[3], i9755[4], 0, i9754, '_cameraFovChanger')
  return i9754
}

Deserializers["ScenarioFour.CreoCamera"] = function (request, data, root) {
  var i9760 = root || request.c( 'ScenarioFour.CreoCamera' )
  var i9761 = data
  request.r(i9761[0], i9761[1], 0, i9760, '_camera')
  i9760._type = i9761[2]
  return i9760
}

Deserializers["CameraFovChanger"] = function (request, data, root) {
  var i9762 = root || request.c( 'CameraFovChanger' )
  var i9763 = data
  return i9762
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i9764 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i9765 = data
  request.r(i9765[0], i9765[1], 0, i9764, 'm_LookAt')
  request.r(i9765[2], i9765[3], 0, i9764, 'm_Follow')
  i9764.m_Lens = request.d('Cinemachine.LensSettings', i9765[4], i9764.m_Lens)
  i9764.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i9765[5], i9764.m_Transitions)
  var i9767 = i9765[6]
  var i9766 = []
  for(var i = 0; i < i9767.length; i += 1) {
    i9766.push( i9767[i + 0] );
  }
  i9764.m_ExcludedPropertiesInInspector = i9766
  var i9769 = i9765[7]
  var i9768 = []
  for(var i = 0; i < i9769.length; i += 1) {
    i9768.push( i9769[i + 0] );
  }
  i9764.m_LockStageInInspector = i9768
  i9764.m_Priority = i9765[8]
  i9764.m_StandbyUpdate = i9765[9]
  i9764.m_LegacyBlendHint = i9765[10]
  request.r(i9765[11], i9765[12], 0, i9764, 'm_ComponentOwner')
  i9764.m_StreamingVersion = i9765[13]
  return i9764
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i9770 = root || request.c( 'Cinemachine.LensSettings' )
  var i9771 = data
  i9770.FieldOfView = i9771[0]
  i9770.OrthographicSize = i9771[1]
  i9770.NearClipPlane = i9771[2]
  i9770.FarClipPlane = i9771[3]
  i9770.Dutch = i9771[4]
  i9770.LensShift = new pc.Vec2( i9771[5], i9771[6] )
  return i9770
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i9772 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i9773 = data
  i9772.m_BlendHint = i9773[0]
  i9772.m_InheritPosition = !!i9773[1]
  i9772.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i9773[2], i9772.m_OnCameraLive)
  return i9772
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i9774 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i9775 = data
  i9774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9775[0], i9774.m_PersistentCalls)
  return i9774
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i9776 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i9777 = data
  var i9779 = i9777[0]
  var i9778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i9779.length; i += 1) {
    i9778.add(request.d('UnityEngine.Events.PersistentCall', i9779[i + 0]));
  }
  i9776.m_Calls = i9778
  return i9776
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i9782 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i9783 = data
  request.r(i9783[0], i9783[1], 0, i9782, 'm_Target')
  i9782.m_TargetAssemblyTypeName = i9783[2]
  i9782.m_MethodName = i9783[3]
  i9782.m_Mode = i9783[4]
  i9782.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i9783[5], i9782.m_Arguments)
  i9782.m_CallState = i9783[6]
  return i9782
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i9788 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i9789 = data
  return i9788
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i9790 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i9791 = data
  i9790.m_TrackedObjectOffset = new pc.Vec3( i9791[0], i9791[1], i9791[2] )
  i9790.m_LookaheadTime = i9791[3]
  i9790.m_LookaheadSmoothing = i9791[4]
  i9790.m_LookaheadIgnoreY = !!i9791[5]
  i9790.m_HorizontalDamping = i9791[6]
  i9790.m_VerticalDamping = i9791[7]
  i9790.m_ScreenX = i9791[8]
  i9790.m_ScreenY = i9791[9]
  i9790.m_DeadZoneWidth = i9791[10]
  i9790.m_DeadZoneHeight = i9791[11]
  i9790.m_SoftZoneWidth = i9791[12]
  i9790.m_SoftZoneHeight = i9791[13]
  i9790.m_BiasX = i9791[14]
  i9790.m_BiasY = i9791[15]
  i9790.m_CenterOnActivate = !!i9791[16]
  return i9790
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i9792 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i9793 = data
  i9792.m_BindingMode = i9793[0]
  i9792.m_FollowOffset = new pc.Vec3( i9793[1], i9793[2], i9793[3] )
  i9792.m_XDamping = i9793[4]
  i9792.m_YDamping = i9793[5]
  i9792.m_ZDamping = i9793[6]
  i9792.m_AngularDampingMode = i9793[7]
  i9792.m_PitchDamping = i9793[8]
  i9792.m_YawDamping = i9793[9]
  i9792.m_RollDamping = i9793[10]
  i9792.m_AngularDamping = i9793[11]
  return i9792
}

Deserializers["Cinemachine.CinemachineBasicMultiChannelPerlin"] = function (request, data, root) {
  var i9794 = root || request.c( 'Cinemachine.CinemachineBasicMultiChannelPerlin' )
  var i9795 = data
  request.r(i9795[0], i9795[1], 0, i9794, 'm_NoiseProfile')
  i9794.m_PivotOffset = new pc.Vec3( i9795[2], i9795[3], i9795[4] )
  i9794.m_AmplitudeGain = i9795[5]
  i9794.m_FrequencyGain = i9795[6]
  i9794.mNoiseOffsets = new pc.Vec3( i9795[7], i9795[8], i9795[9] )
  return i9794
}

Deserializers["ScenarioFour.Enemies"] = function (request, data, root) {
  var i9796 = root || request.c( 'ScenarioFour.Enemies' )
  var i9797 = data
  request.r(i9797[0], i9797[1], 0, i9796, '_enemyRight')
  request.r(i9797[2], i9797[3], 0, i9796, '_enemyLeft')
  return i9796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i9798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i9799 = data
  i9798.name = i9799[0]
  i9798.atlasId = i9799[1]
  i9798.mipmapCount = i9799[2]
  i9798.hdr = !!i9799[3]
  i9798.size = i9799[4]
  i9798.anisoLevel = i9799[5]
  i9798.filterMode = i9799[6]
  i9798.wrapMode = i9799[7]
  var i9801 = i9799[8]
  var i9800 = []
  for(var i = 0; i < i9801.length; i += 4) {
    i9800.push( UnityEngine.Rect.MinMaxRect(i9801[i + 0], i9801[i + 1], i9801[i + 2], i9801[i + 3]) );
  }
  i9798.rects = i9800
  return i9798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i9804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i9805 = data
  i9804.name = i9805[0]
  i9804.index = i9805[1]
  i9804.startup = !!i9805[2]
  return i9804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i9806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i9807 = data
  i9806.enabled = !!i9807[0]
  i9806.aspect = i9807[1]
  i9806.orthographic = !!i9807[2]
  i9806.orthographicSize = i9807[3]
  i9806.backgroundColor = new pc.Color(i9807[4], i9807[5], i9807[6], i9807[7])
  i9806.nearClipPlane = i9807[8]
  i9806.farClipPlane = i9807[9]
  i9806.fieldOfView = i9807[10]
  i9806.depth = i9807[11]
  i9806.clearFlags = i9807[12]
  i9806.cullingMask = i9807[13]
  i9806.rect = i9807[14]
  request.r(i9807[15], i9807[16], 0, i9806, 'targetTexture')
  return i9806
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i9808 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i9809 = data
  i9808.m_ShowDebugText = !!i9809[0]
  i9808.m_ShowCameraFrustum = !!i9809[1]
  i9808.m_IgnoreTimeScale = !!i9809[2]
  request.r(i9809[3], i9809[4], 0, i9808, 'm_WorldUpOverride')
  i9808.m_UpdateMethod = i9809[5]
  i9808.m_BlendUpdateMethod = i9809[6]
  i9808.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i9809[7], i9808.m_DefaultBlend)
  request.r(i9809[8], i9809[9], 0, i9808, 'm_CustomBlends')
  i9808.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i9809[10], i9808.m_CameraCutEvent)
  i9808.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i9809[11], i9808.m_CameraActivatedEvent)
  return i9808
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i9810 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i9811 = data
  i9810.m_Style = i9811[0]
  i9810.m_Time = i9811[1]
  i9810.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i9811[2] } )
  return i9810
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i9812 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i9813 = data
  i9812.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9813[0], i9812.m_PersistentCalls)
  return i9812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i9814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i9815 = data
  request.r(i9815[0], i9815[1], 0, i9814, 'clip')
  request.r(i9815[2], i9815[3], 0, i9814, 'outputAudioMixerGroup')
  i9814.playOnAwake = !!i9815[4]
  i9814.loop = !!i9815[5]
  i9814.time = i9815[6]
  i9814.volume = i9815[7]
  i9814.pitch = i9815[8]
  i9814.enabled = !!i9815[9]
  return i9814
}

Deserializers["SoundHandler"] = function (request, data, root) {
  var i9816 = root || request.c( 'SoundHandler' )
  var i9817 = data
  request.r(i9817[0], i9817[1], 0, i9816, '_audioSource')
  return i9816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i9818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i9819 = data
  i9818.enabled = !!i9819[0]
  i9818.type = i9819[1]
  i9818.color = new pc.Color(i9819[2], i9819[3], i9819[4], i9819[5])
  i9818.cullingMask = i9819[6]
  i9818.intensity = i9819[7]
  i9818.range = i9819[8]
  i9818.spotAngle = i9819[9]
  i9818.shadows = i9819[10]
  i9818.shadowNormalBias = i9819[11]
  i9818.shadowBias = i9819[12]
  i9818.shadowStrength = i9819[13]
  i9818.shadowResolution = i9819[14]
  i9818.lightmapBakeType = i9819[15]
  i9818.renderMode = i9819[16]
  request.r(i9819[17], i9819[18], 0, i9818, 'cookie')
  i9818.cookieSize = i9819[19]
  return i9818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i9820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i9821 = data
  i9820.pivot = new pc.Vec2( i9821[0], i9821[1] )
  i9820.anchorMin = new pc.Vec2( i9821[2], i9821[3] )
  i9820.anchorMax = new pc.Vec2( i9821[4], i9821[5] )
  i9820.sizeDelta = new pc.Vec2( i9821[6], i9821[7] )
  i9820.anchoredPosition3D = new pc.Vec3( i9821[8], i9821[9], i9821[10] )
  i9820.rotation = new pc.Quat(i9821[11], i9821[12], i9821[13], i9821[14])
  i9820.scale = new pc.Vec3( i9821[15], i9821[16], i9821[17] )
  return i9820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i9822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i9823 = data
  i9822.enabled = !!i9823[0]
  i9822.planeDistance = i9823[1]
  i9822.referencePixelsPerUnit = i9823[2]
  i9822.isFallbackOverlay = !!i9823[3]
  i9822.renderMode = i9823[4]
  i9822.renderOrder = i9823[5]
  i9822.sortingLayerName = i9823[6]
  i9822.sortingOrder = i9823[7]
  i9822.scaleFactor = i9823[8]
  request.r(i9823[9], i9823[10], 0, i9822, 'worldCamera')
  i9822.overrideSorting = !!i9823[11]
  i9822.pixelPerfect = !!i9823[12]
  i9822.targetDisplay = i9823[13]
  i9822.overridePixelPerfect = !!i9823[14]
  return i9822
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i9824 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i9825 = data
  i9824.m_UiScaleMode = i9825[0]
  i9824.m_ReferencePixelsPerUnit = i9825[1]
  i9824.m_ScaleFactor = i9825[2]
  i9824.m_ReferenceResolution = new pc.Vec2( i9825[3], i9825[4] )
  i9824.m_ScreenMatchMode = i9825[5]
  i9824.m_MatchWidthOrHeight = i9825[6]
  i9824.m_PhysicalUnit = i9825[7]
  i9824.m_FallbackScreenDPI = i9825[8]
  i9824.m_DefaultSpriteDPI = i9825[9]
  i9824.m_DynamicPixelsPerUnit = i9825[10]
  i9824.m_PresetInfoIsWorld = !!i9825[11]
  return i9824
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i9826 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i9827 = data
  i9826.m_IgnoreReversedGraphics = !!i9827[0]
  i9826.m_BlockingObjects = i9827[1]
  i9826.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i9827[2] )
  return i9826
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i9828 = root || request.c( 'ChooseHandler' )
  var i9829 = data
  request.r(i9829[0], i9829[1], 0, i9828, '_brain')
  request.r(i9829[2], i9829[3], 0, i9828, '_soundHandler')
  request.r(i9829[4], i9829[5], 0, i9828, '_ericSettings')
  request.r(i9829[6], i9829[7], 0, i9828, '_viperSettings')
  request.r(i9829[8], i9829[9], 0, i9828, '_ericScene')
  request.r(i9829[10], i9829[11], 0, i9828, '_ericSceneBackground')
  request.r(i9829[12], i9829[13], 0, i9828, '_viperScene')
  request.r(i9829[14], i9829[15], 0, i9828, '_viperSceneBackground')
  request.r(i9829[16], i9829[17], 0, i9828, '_chooseButton')
  var i9831 = i9829[18]
  var i9830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i9831.length; i += 2) {
  request.r(i9831[i + 0], i9831[i + 1], 1, i9830, '')
  }
  i9828._characters = i9830
  request.r(i9829[19], i9829[20], 0, i9828, '_frame')
  return i9828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i9834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i9835 = data
  i9834.cullTransparentMesh = !!i9835[0]
  return i9834
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i9836 = root || request.c( 'UnityEngine.UI.Image' )
  var i9837 = data
  request.r(i9837[0], i9837[1], 0, i9836, 'm_Sprite')
  i9836.m_Type = i9837[2]
  i9836.m_PreserveAspect = !!i9837[3]
  i9836.m_FillCenter = !!i9837[4]
  i9836.m_FillMethod = i9837[5]
  i9836.m_FillAmount = i9837[6]
  i9836.m_FillClockwise = !!i9837[7]
  i9836.m_FillOrigin = i9837[8]
  i9836.m_UseSpriteMesh = !!i9837[9]
  i9836.m_PixelsPerUnitMultiplier = i9837[10]
  request.r(i9837[11], i9837[12], 0, i9836, 'm_Material')
  i9836.m_Maskable = !!i9837[13]
  i9836.m_Color = new pc.Color(i9837[14], i9837[15], i9837[16], i9837[17])
  i9836.m_RaycastTarget = !!i9837[18]
  i9836.m_RaycastPadding = new pc.Vec4( i9837[19], i9837[20], i9837[21], i9837[22] )
  return i9836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i9838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i9839 = data
  i9838.m_Alpha = i9839[0]
  i9838.m_Interactable = !!i9839[1]
  i9838.m_BlocksRaycasts = !!i9839[2]
  i9838.m_IgnoreParentGroups = !!i9839[3]
  i9838.enabled = !!i9839[4]
  return i9838
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i9840 = root || request.c( 'UnityEngine.UI.Mask' )
  var i9841 = data
  i9840.m_ShowMaskGraphic = !!i9841[0]
  return i9840
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i9842 = root || request.c( 'UnityEngine.UI.Button' )
  var i9843 = data
  i9842.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i9843[0], i9842.m_OnClick)
  i9842.m_Navigation = request.d('UnityEngine.UI.Navigation', i9843[1], i9842.m_Navigation)
  i9842.m_Transition = i9843[2]
  i9842.m_Colors = request.d('UnityEngine.UI.ColorBlock', i9843[3], i9842.m_Colors)
  i9842.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i9843[4], i9842.m_SpriteState)
  i9842.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i9843[5], i9842.m_AnimationTriggers)
  i9842.m_Interactable = !!i9843[6]
  request.r(i9843[7], i9843[8], 0, i9842, 'm_TargetGraphic')
  return i9842
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i9844 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i9845 = data
  i9844.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i9845[0], i9844.m_PersistentCalls)
  return i9844
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i9846 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i9847 = data
  i9846.m_Mode = i9847[0]
  i9846.m_WrapAround = !!i9847[1]
  request.r(i9847[2], i9847[3], 0, i9846, 'm_SelectOnUp')
  request.r(i9847[4], i9847[5], 0, i9846, 'm_SelectOnDown')
  request.r(i9847[6], i9847[7], 0, i9846, 'm_SelectOnLeft')
  request.r(i9847[8], i9847[9], 0, i9846, 'm_SelectOnRight')
  return i9846
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i9848 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i9849 = data
  i9848.m_NormalColor = new pc.Color(i9849[0], i9849[1], i9849[2], i9849[3])
  i9848.m_HighlightedColor = new pc.Color(i9849[4], i9849[5], i9849[6], i9849[7])
  i9848.m_PressedColor = new pc.Color(i9849[8], i9849[9], i9849[10], i9849[11])
  i9848.m_SelectedColor = new pc.Color(i9849[12], i9849[13], i9849[14], i9849[15])
  i9848.m_DisabledColor = new pc.Color(i9849[16], i9849[17], i9849[18], i9849[19])
  i9848.m_ColorMultiplier = i9849[20]
  i9848.m_FadeDuration = i9849[21]
  return i9848
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i9850 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i9851 = data
  request.r(i9851[0], i9851[1], 0, i9850, 'm_HighlightedSprite')
  request.r(i9851[2], i9851[3], 0, i9850, 'm_PressedSprite')
  request.r(i9851[4], i9851[5], 0, i9850, 'm_SelectedSprite')
  request.r(i9851[6], i9851[7], 0, i9850, 'm_DisabledSprite')
  return i9850
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i9852 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i9853 = data
  i9852.m_NormalTrigger = i9853[0]
  i9852.m_HighlightedTrigger = i9853[1]
  i9852.m_PressedTrigger = i9853[2]
  i9852.m_SelectedTrigger = i9853[3]
  i9852.m_DisabledTrigger = i9853[4]
  return i9852
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i9854 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i9855 = data
  i9854.m_hasFontAssetChanged = !!i9855[0]
  request.r(i9855[1], i9855[2], 0, i9854, 'm_baseMaterial')
  i9854.m_maskOffset = new pc.Vec4( i9855[3], i9855[4], i9855[5], i9855[6] )
  i9854.m_text = i9855[7]
  i9854.m_isRightToLeft = !!i9855[8]
  request.r(i9855[9], i9855[10], 0, i9854, 'm_fontAsset')
  request.r(i9855[11], i9855[12], 0, i9854, 'm_sharedMaterial')
  var i9857 = i9855[13]
  var i9856 = []
  for(var i = 0; i < i9857.length; i += 2) {
  request.r(i9857[i + 0], i9857[i + 1], 2, i9856, '')
  }
  i9854.m_fontSharedMaterials = i9856
  request.r(i9855[14], i9855[15], 0, i9854, 'm_fontMaterial')
  var i9859 = i9855[16]
  var i9858 = []
  for(var i = 0; i < i9859.length; i += 2) {
  request.r(i9859[i + 0], i9859[i + 1], 2, i9858, '')
  }
  i9854.m_fontMaterials = i9858
  i9854.m_fontColor32 = UnityEngine.Color32.ConstructColor(i9855[17], i9855[18], i9855[19], i9855[20])
  i9854.m_fontColor = new pc.Color(i9855[21], i9855[22], i9855[23], i9855[24])
  i9854.m_enableVertexGradient = !!i9855[25]
  i9854.m_colorMode = i9855[26]
  i9854.m_fontColorGradient = request.d('TMPro.VertexGradient', i9855[27], i9854.m_fontColorGradient)
  request.r(i9855[28], i9855[29], 0, i9854, 'm_fontColorGradientPreset')
  request.r(i9855[30], i9855[31], 0, i9854, 'm_spriteAsset')
  i9854.m_tintAllSprites = !!i9855[32]
  request.r(i9855[33], i9855[34], 0, i9854, 'm_StyleSheet')
  i9854.m_TextStyleHashCode = i9855[35]
  i9854.m_overrideHtmlColors = !!i9855[36]
  i9854.m_faceColor = UnityEngine.Color32.ConstructColor(i9855[37], i9855[38], i9855[39], i9855[40])
  i9854.m_fontSize = i9855[41]
  i9854.m_fontSizeBase = i9855[42]
  i9854.m_fontWeight = i9855[43]
  i9854.m_enableAutoSizing = !!i9855[44]
  i9854.m_fontSizeMin = i9855[45]
  i9854.m_fontSizeMax = i9855[46]
  i9854.m_fontStyle = i9855[47]
  i9854.m_HorizontalAlignment = i9855[48]
  i9854.m_VerticalAlignment = i9855[49]
  i9854.m_textAlignment = i9855[50]
  i9854.m_characterSpacing = i9855[51]
  i9854.m_wordSpacing = i9855[52]
  i9854.m_lineSpacing = i9855[53]
  i9854.m_lineSpacingMax = i9855[54]
  i9854.m_paragraphSpacing = i9855[55]
  i9854.m_charWidthMaxAdj = i9855[56]
  i9854.m_enableWordWrapping = !!i9855[57]
  i9854.m_wordWrappingRatios = i9855[58]
  i9854.m_overflowMode = i9855[59]
  request.r(i9855[60], i9855[61], 0, i9854, 'm_linkedTextComponent')
  request.r(i9855[62], i9855[63], 0, i9854, 'parentLinkedComponent')
  i9854.m_enableKerning = !!i9855[64]
  i9854.m_enableExtraPadding = !!i9855[65]
  i9854.checkPaddingRequired = !!i9855[66]
  i9854.m_isRichText = !!i9855[67]
  i9854.m_parseCtrlCharacters = !!i9855[68]
  i9854.m_isOrthographic = !!i9855[69]
  i9854.m_isCullingEnabled = !!i9855[70]
  i9854.m_horizontalMapping = i9855[71]
  i9854.m_verticalMapping = i9855[72]
  i9854.m_uvLineOffset = i9855[73]
  i9854.m_geometrySortingOrder = i9855[74]
  i9854.m_IsTextObjectScaleStatic = !!i9855[75]
  i9854.m_VertexBufferAutoSizeReduction = !!i9855[76]
  i9854.m_useMaxVisibleDescender = !!i9855[77]
  i9854.m_pageToDisplay = i9855[78]
  i9854.m_margin = new pc.Vec4( i9855[79], i9855[80], i9855[81], i9855[82] )
  i9854.m_isUsingLegacyAnimationComponent = !!i9855[83]
  i9854.m_isVolumetricText = !!i9855[84]
  request.r(i9855[85], i9855[86], 0, i9854, 'm_Material')
  i9854.m_Maskable = !!i9855[87]
  i9854.m_Color = new pc.Color(i9855[88], i9855[89], i9855[90], i9855[91])
  i9854.m_RaycastTarget = !!i9855[92]
  i9854.m_RaycastPadding = new pc.Vec4( i9855[93], i9855[94], i9855[95], i9855[96] )
  return i9854
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i9860 = root || request.c( 'TMPro.VertexGradient' )
  var i9861 = data
  i9860.topLeft = new pc.Color(i9861[0], i9861[1], i9861[2], i9861[3])
  i9860.topRight = new pc.Color(i9861[4], i9861[5], i9861[6], i9861[7])
  i9860.bottomLeft = new pc.Color(i9861[8], i9861[9], i9861[10], i9861[11])
  i9860.bottomRight = new pc.Color(i9861[12], i9861[13], i9861[14], i9861[15])
  return i9860
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i9862 = root || request.c( 'JumpHandler' )
  var i9863 = data
  request.r(i9863[0], i9863[1], 0, i9862, '_landJump')
  request.r(i9863[2], i9863[3], 0, i9862, '_secondLandJump')
  request.r(i9863[4], i9863[5], 0, i9862, '_spawnPoint')
  request.r(i9863[6], i9863[7], 0, i9862, '_enemy')
  request.r(i9863[8], i9863[9], 0, i9862, '_finalPoint')
  return i9862
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i9864 = root || request.c( 'AnimationHandler' )
  var i9865 = data
  request.r(i9865[0], i9865[1], 0, i9864, '_jumpHandler')
  return i9864
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i9866 = root || request.c( 'EffectHandler' )
  var i9867 = data
  request.r(i9867[0], i9867[1], 0, i9866, '_jumpHandler')
  request.r(i9867[2], i9867[3], 0, i9866, '_canvas')
  request.r(i9867[4], i9867[5], 0, i9866, '_jumpSmoke')
  request.r(i9867[6], i9867[7], 0, i9866, '_light')
  request.r(i9867[8], i9867[9], 0, i9866, '_smoke')
  request.r(i9867[10], i9867[11], 0, i9866, '_enemyPool')
  request.r(i9867[12], i9867[13], 0, i9866, '_specialEnemy')
  return i9866
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i9868 = root || request.c( 'StartCamera' )
  var i9869 = data
  request.r(i9869[0], i9869[1], 0, i9868, '_startCamera')
  request.r(i9869[2], i9869[3], 0, i9868, '_path')
  request.r(i9869[4], i9869[5], 0, i9868, '_player')
  request.r(i9869[6], i9869[7], 0, i9868, '_canvas')
  return i9868
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i9870 = root || request.c( 'ResolutionHandler' )
  var i9871 = data
  request.r(i9871[0], i9871[1], 0, i9870, '_secondCamera')
  request.r(i9871[2], i9871[3], 0, i9870, '_fourthCamera')
  request.r(i9871[4], i9871[5], 0, i9870, '_fifthCamera')
  return i9870
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i9872 = root || request.c( 'CameraHandler' )
  var i9873 = data
  request.r(i9873[0], i9873[1], 0, i9872, '_jumpHandler')
  request.r(i9873[2], i9873[3], 0, i9872, '_firstCamera')
  request.r(i9873[4], i9873[5], 0, i9872, '_secondCamera')
  request.r(i9873[6], i9873[7], 0, i9872, '_thirdCamera')
  request.r(i9873[8], i9873[9], 0, i9872, '_fourthCamera')
  request.r(i9873[10], i9873[11], 0, i9872, '_fifthCamera')
  return i9872
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i9874 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i9875 = data
  request.r(i9875[0], i9875[1], 0, i9874, 'm_Path')
  i9874.m_PathPosition = i9875[2]
  i9874.m_PositionUnits = i9875[3]
  i9874.m_PathOffset = new pc.Vec3( i9875[4], i9875[5], i9875[6] )
  i9874.m_XDamping = i9875[7]
  i9874.m_YDamping = i9875[8]
  i9874.m_ZDamping = i9875[9]
  i9874.m_CameraUp = i9875[10]
  i9874.m_PitchDamping = i9875[11]
  i9874.m_YawDamping = i9875[12]
  i9874.m_RollDamping = i9875[13]
  i9874.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i9875[14], i9874.m_AutoDolly)
  return i9874
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i9876 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i9877 = data
  i9876.m_Enabled = !!i9877[0]
  i9876.m_PositionOffset = i9877[1]
  i9876.m_SearchRadius = i9877[2]
  i9876.m_SearchResolution = i9877[3]
  return i9876
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i9878 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i9879 = data
  i9878.m_Looped = !!i9879[0]
  var i9881 = i9879[1]
  var i9880 = []
  for(var i = 0; i < i9881.length; i += 1) {
    i9880.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i9881[i + 0]) );
  }
  i9878.m_Waypoints = i9880
  i9878.m_Resolution = i9879[2]
  i9878.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i9879[3], i9878.m_Appearance)
  return i9878
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i9884 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i9885 = data
  i9884.position = new pc.Vec3( i9885[0], i9885[1], i9885[2] )
  i9884.roll = i9885[3]
  return i9884
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i9886 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i9887 = data
  i9886.pathColor = new pc.Color(i9887[0], i9887[1], i9887[2], i9887[3])
  i9886.inactivePathColor = new pc.Color(i9887[4], i9887[5], i9887[6], i9887[7])
  i9886.width = i9887[8]
  return i9886
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i9888 = root || request.c( 'UIHandler' )
  var i9889 = data
  request.r(i9889[0], i9889[1], 0, i9888, '_jumpHandler')
  request.r(i9889[2], i9889[3], 0, i9888, '_powerButton')
  request.r(i9889[4], i9889[5], 0, i9888, '_cTAButton')
  request.r(i9889[6], i9889[7], 0, i9888, '_fade')
  request.r(i9889[8], i9889[9], 0, i9888, '_finalPanel')
  return i9888
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i9890 = root || request.c( 'EnemyPool' )
  var i9891 = data
  var i9893 = i9891[0]
  var i9892 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i9893.length; i += 2) {
  request.r(i9893[i + 0], i9893[i + 1], 1, i9892, '')
  }
  i9890._enemies = i9892
  return i9890
}

Deserializers["Stalker"] = function (request, data, root) {
  var i9896 = root || request.c( 'Stalker' )
  var i9897 = data
  request.r(i9897[0], i9897[1], 0, i9896, '_target')
  return i9896
}

Deserializers["Enemy"] = function (request, data, root) {
  var i9898 = root || request.c( 'Enemy' )
  var i9899 = data
  return i9898
}

Deserializers["ScenarioFour.Girl"] = function (request, data, root) {
  var i9900 = root || request.c( 'ScenarioFour.Girl' )
  var i9901 = data
  request.r(i9901[0], i9901[1], 0, i9900, '_path')
  request.r(i9901[2], i9901[3], 0, i9900, '_animatedModel')
  request.r(i9901[4], i9901[5], 0, i9900, '_model')
  request.r(i9901[6], i9901[7], 0, i9900, '_bulletTemplate')
  request.r(i9901[8], i9901[9], 0, i9900, '_shootPoint')
  return i9900
}

Deserializers["ScenarioFour.AnimatedModel"] = function (request, data, root) {
  var i9902 = root || request.c( 'ScenarioFour.AnimatedModel' )
  var i9903 = data
  return i9902
}

Deserializers["ScenarioFour.UISwitcher"] = function (request, data, root) {
  var i9904 = root || request.c( 'ScenarioFour.UISwitcher' )
  var i9905 = data
  request.r(i9905[0], i9905[1], 0, i9904, '_powerButton')
  request.r(i9905[2], i9905[3], 0, i9904, '_attackButton')
  request.r(i9905[4], i9905[5], 0, i9904, '_playButton')
  request.r(i9905[6], i9905[7], 0, i9904, '_finalPanel')
  return i9904
}

Deserializers["ScenarioFour.PulseTransform"] = function (request, data, root) {
  var i9906 = root || request.c( 'ScenarioFour.PulseTransform' )
  var i9907 = data
  return i9906
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i9908 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i9909 = data
  request.r(i9909[0], i9909[1], 0, i9908, 'm_FirstSelected')
  i9908.m_sendNavigationEvents = !!i9909[2]
  i9908.m_DragThreshold = i9909[3]
  return i9908
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i9910 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i9911 = data
  i9910.m_HorizontalAxis = i9911[0]
  i9910.m_VerticalAxis = i9911[1]
  i9910.m_SubmitButton = i9911[2]
  i9910.m_CancelButton = i9911[3]
  i9910.m_InputActionsPerSecond = i9911[4]
  i9910.m_RepeatDelay = i9911[5]
  i9910.m_ForceModuleActive = !!i9911[6]
  return i9910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i9912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i9913 = data
  i9912.ambientIntensity = i9913[0]
  i9912.reflectionIntensity = i9913[1]
  i9912.ambientMode = i9913[2]
  i9912.ambientLight = new pc.Color(i9913[3], i9913[4], i9913[5], i9913[6])
  i9912.ambientSkyColor = new pc.Color(i9913[7], i9913[8], i9913[9], i9913[10])
  i9912.ambientGroundColor = new pc.Color(i9913[11], i9913[12], i9913[13], i9913[14])
  i9912.ambientEquatorColor = new pc.Color(i9913[15], i9913[16], i9913[17], i9913[18])
  i9912.fogColor = new pc.Color(i9913[19], i9913[20], i9913[21], i9913[22])
  i9912.fogEndDistance = i9913[23]
  i9912.fogStartDistance = i9913[24]
  i9912.fogDensity = i9913[25]
  i9912.fog = !!i9913[26]
  request.r(i9913[27], i9913[28], 0, i9912, 'skybox')
  i9912.fogMode = i9913[29]
  var i9915 = i9913[30]
  var i9914 = []
  for(var i = 0; i < i9915.length; i += 1) {
    i9914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i9915[i + 0]) );
  }
  i9912.lightmaps = i9914
  i9912.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i9913[31], i9912.lightProbes)
  i9912.lightmapsMode = i9913[32]
  i9912.environmentLightingMode = i9913[33]
  i9912.ambientProbe = new pc.SphericalHarmonicsL2(i9913[34])
  i9912.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i9913[35])
  i9912.useReferenceAmbientProbe = !!i9913[36]
  request.r(i9913[37], i9913[38], 0, i9912, 'customReflection')
  request.r(i9913[39], i9913[40], 0, i9912, 'defaultReflection')
  i9912.defaultReflectionMode = i9913[41]
  i9912.defaultReflectionResolution = i9913[42]
  i9912.sunLightObjectId = i9913[43]
  i9912.pixelLightCount = i9913[44]
  i9912.defaultReflectionHDR = !!i9913[45]
  i9912.hasLightDataAsset = !!i9913[46]
  i9912.hasManualGenerate = !!i9913[47]
  return i9912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i9918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i9919 = data
  request.r(i9919[0], i9919[1], 0, i9918, 'lightmapColor')
  request.r(i9919[2], i9919[3], 0, i9918, 'lightmapDirection')
  return i9918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i9920 = root || new UnityEngine.LightProbes()
  var i9921 = data
  return i9920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i9928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i9929 = data
  var i9931 = i9929[0]
  var i9930 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i9931.length; i += 1) {
    i9930.add(i9931[i + 0]);
  }
  i9928.invalidShaderVariants = i9930
  i9928.name = i9929[1]
  i9928.guid = i9929[2]
  var i9933 = i9929[3]
  var i9932 = []
  for(var i = 0; i < i9933.length; i += 1) {
    i9932.push( i9933[i + 0] );
  }
  i9928.shaderDefinedKeywords = i9932
  var i9935 = i9929[4]
  var i9934 = []
  for(var i = 0; i < i9935.length; i += 1) {
    i9934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i9935[i + 0]) );
  }
  i9928.passes = i9934
  var i9937 = i9929[5]
  var i9936 = []
  for(var i = 0; i < i9937.length; i += 1) {
    i9936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i9937[i + 0]) );
  }
  i9928.usePasses = i9936
  var i9939 = i9929[6]
  var i9938 = []
  for(var i = 0; i < i9939.length; i += 1) {
    i9938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i9939[i + 0]) );
  }
  i9928.defaultParameterValues = i9938
  request.r(i9929[7], i9929[8], 0, i9928, 'unityFallbackShader')
  i9928.readDepth = !!i9929[9]
  i9928.isCreatedByShaderGraph = !!i9929[10]
  return i9928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i9944 = root || new pc.UnityShaderPass()
  var i9945 = data
  i9944.id = i9945[0]
  i9944.subShaderIndex = i9945[1]
  i9944.name = i9945[2]
  i9944.passType = i9945[3]
  i9944.usePass = !!i9945[4]
  i9944.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[5], i9944.zTest)
  i9944.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[6], i9944.zWrite)
  i9944.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[7], i9944.culling)
  i9944.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9945[8], i9944.blending)
  i9944.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9945[9], i9944.alphaBlending)
  i9944.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[10], i9944.colorWriteMask)
  i9944.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[11], i9944.offsetUnits)
  i9944.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[12], i9944.offsetFactor)
  i9944.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[13], i9944.stencilRef)
  i9944.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[14], i9944.stencilReadMask)
  i9944.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9945[15], i9944.stencilWriteMask)
  i9944.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9945[16], i9944.stencilOp)
  i9944.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9945[17], i9944.stencilOpFront)
  i9944.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9945[18], i9944.stencilOpBack)
  var i9947 = i9945[19]
  var i9946 = []
  for(var i = 0; i < i9947.length; i += 1) {
    i9946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i9947[i + 0]) );
  }
  i9944.tags = i9946
  var i9949 = i9945[20]
  var i9948 = []
  for(var i = 0; i < i9949.length; i += 1) {
    i9948.push( i9949[i + 0] );
  }
  i9944.passDefinedKeywords = i9948
  var i9951 = i9945[21]
  var i9950 = []
  for(var i = 0; i < i9951.length; i += 1) {
    i9950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9951[i + 0]) );
  }
  i9944.variants = i9950
  var i9953 = i9945[22]
  var i9952 = []
  for(var i = 0; i < i9953.length; i += 1) {
    i9952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9953[i + 0]) );
  }
  i9944.excludedVariants = i9952
  i9944.hasDepthReader = !!i9945[23]
  return i9944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9955 = data
  i9954.val = i9955[0]
  i9954.name = i9955[1]
  return i9954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9957 = data
  i9956.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9957[0], i9956.src)
  i9956.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9957[1], i9956.dst)
  i9956.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9957[2], i9956.op)
  return i9956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9959 = data
  i9958.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9959[0], i9958.pass)
  i9958.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9959[1], i9958.fail)
  i9958.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9959[2], i9958.zFail)
  i9958.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9959[3], i9958.comp)
  return i9958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9963 = data
  i9962.name = i9963[0]
  i9962.value = i9963[1]
  return i9962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9967 = data
  i9966.passId = i9967[0]
  i9966.subShaderIndex = i9967[1]
  var i9969 = i9967[2]
  var i9968 = []
  for(var i = 0; i < i9969.length; i += 1) {
    i9968.push( i9969[i + 0] );
  }
  i9966.keywords = i9968
  i9966.vertexProgram = i9967[3]
  i9966.fragmentProgram = i9967[4]
  i9966.readDepth = !!i9967[5]
  return i9966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9973 = data
  request.r(i9973[0], i9973[1], 0, i9972, 'shader')
  i9972.pass = i9973[2]
  return i9972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9977 = data
  i9976.name = i9977[0]
  i9976.type = i9977[1]
  i9976.value = new pc.Vec4( i9977[2], i9977[3], i9977[4], i9977[5] )
  i9976.textureValue = i9977[6]
  return i9976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9979 = data
  i9978.name = i9979[0]
  request.r(i9979[1], i9979[2], 0, i9978, 'texture')
  i9978.aabb = i9979[3]
  i9978.vertices = i9979[4]
  i9978.triangles = i9979[5]
  i9978.textureRect = UnityEngine.Rect.MinMaxRect(i9979[6], i9979[7], i9979[8], i9979[9])
  i9978.packedRect = UnityEngine.Rect.MinMaxRect(i9979[10], i9979[11], i9979[12], i9979[13])
  i9978.border = new pc.Vec4( i9979[14], i9979[15], i9979[16], i9979[17] )
  i9978.transparency = i9979[18]
  i9978.bounds = i9979[19]
  i9978.pixelsPerUnit = i9979[20]
  i9978.textureWidth = i9979[21]
  i9978.textureHeight = i9979[22]
  i9978.nativeSize = new pc.Vec2( i9979[23], i9979[24] )
  i9978.pivot = new pc.Vec2( i9979[25], i9979[26] )
  i9978.textureRectOffset = new pc.Vec2( i9979[27], i9979[28] )
  return i9978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i9980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i9981 = data
  i9980.name = i9981[0]
  return i9980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i9982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i9983 = data
  i9982.name = i9983[0]
  i9982.wrapMode = i9983[1]
  i9982.isLooping = !!i9983[2]
  i9982.length = i9983[3]
  var i9985 = i9983[4]
  var i9984 = []
  for(var i = 0; i < i9985.length; i += 1) {
    i9984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i9985[i + 0]) );
  }
  i9982.curves = i9984
  var i9987 = i9983[5]
  var i9986 = []
  for(var i = 0; i < i9987.length; i += 1) {
    i9986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i9987[i + 0]) );
  }
  i9982.events = i9986
  i9982.halfPrecision = !!i9983[6]
  return i9982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i9990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i9991 = data
  i9990.path = i9991[0]
  i9990.componentType = i9991[1]
  i9990.property = i9991[2]
  i9990.keys = i9991[3]
  var i9993 = i9991[4]
  var i9992 = []
  for(var i = 0; i < i9993.length; i += 1) {
    i9992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i9993[i + 0]) );
  }
  i9990.objectReferenceKeys = i9992
  return i9990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i9996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i9997 = data
  i9996.time = i9997[0]
  request.r(i9997[1], i9997[2], 0, i9996, 'value')
  return i9996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i10000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i10001 = data
  i10000.functionName = i10001[0]
  i10000.floatParameter = i10001[1]
  i10000.intParameter = i10001[2]
  i10000.stringParameter = i10001[3]
  request.r(i10001[4], i10001[5], 0, i10000, 'objectReferenceParameter')
  i10000.time = i10001[6]
  return i10000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i10002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i10003 = data
  i10002.name = i10003[0]
  var i10005 = i10003[1]
  var i10004 = []
  for(var i = 0; i < i10005.length; i += 1) {
    i10004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i10005[i + 0]) );
  }
  i10002.states = i10004
  var i10007 = i10003[2]
  var i10006 = []
  for(var i = 0; i < i10007.length; i += 1) {
    i10006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i10007[i + 0]) );
  }
  i10002.layers = i10006
  var i10009 = i10003[3]
  var i10008 = []
  for(var i = 0; i < i10009.length; i += 1) {
    i10008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i10009[i + 0]) );
  }
  i10002.parameters = i10008
  var i10011 = i10003[4]
  var i10010 = []
  for(var i = 0; i < i10011.length; i += 1) {
    i10010.push( i10011[i + 0] );
  }
  i10002.animationClips = i10010
  i10002.HasSubStateMachines = !!i10003[5]
  return i10002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i10014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i10015 = data
  i10014.cycleOffset = i10015[0]
  i10014.cycleOffsetParameter = i10015[1]
  i10014.cycleOffsetParameterActive = !!i10015[2]
  i10014.mirror = !!i10015[3]
  i10014.mirrorParameter = i10015[4]
  i10014.mirrorParameterActive = !!i10015[5]
  i10014.motionId = i10015[6]
  i10014.nameHash = i10015[7]
  i10014.fullPathHash = i10015[8]
  i10014.speed = i10015[9]
  i10014.speedParameter = i10015[10]
  i10014.speedParameterActive = !!i10015[11]
  i10014.tag = i10015[12]
  i10014.name = i10015[13]
  i10014.writeDefaultValues = !!i10015[14]
  var i10017 = i10015[15]
  var i10016 = []
  for(var i = 0; i < i10017.length; i += 1) {
    i10016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10017[i + 0]) );
  }
  i10014.transitions = i10016
  var i10019 = i10015[16]
  var i10018 = []
  for(var i = 0; i < i10019.length; i += 2) {
  request.r(i10019[i + 0], i10019[i + 1], 2, i10018, '')
  }
  i10014.behaviours = i10018
  return i10014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i10022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i10023 = data
  i10022.fullPath = i10023[0]
  i10022.canTransitionToSelf = !!i10023[1]
  i10022.duration = i10023[2]
  i10022.exitTime = i10023[3]
  i10022.hasExitTime = !!i10023[4]
  i10022.hasFixedDuration = !!i10023[5]
  i10022.interruptionSource = i10023[6]
  i10022.offset = i10023[7]
  i10022.orderedInterruption = !!i10023[8]
  i10022.destinationStateNameHash = i10023[9]
  i10022.destinationStateMachineId = i10023[10]
  i10022.isExit = !!i10023[11]
  i10022.mute = !!i10023[12]
  i10022.solo = !!i10023[13]
  var i10025 = i10023[14]
  var i10024 = []
  for(var i = 0; i < i10025.length; i += 1) {
    i10024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10025[i + 0]) );
  }
  i10022.conditions = i10024
  return i10022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i10030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i10031 = data
  i10030.blendingMode = i10031[0]
  i10030.defaultWeight = i10031[1]
  i10030.name = i10031[2]
  i10030.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10031[3], i10030.stateMachine)
  return i10030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i10032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i10033 = data
  i10032.id = i10033[0]
  i10032.defaultStateNameHash = i10033[1]
  var i10035 = i10033[2]
  var i10034 = []
  for(var i = 0; i < i10035.length; i += 1) {
    i10034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10035[i + 0]) );
  }
  i10032.entryTransitions = i10034
  var i10037 = i10033[3]
  var i10036 = []
  for(var i = 0; i < i10037.length; i += 1) {
    i10036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10037[i + 0]) );
  }
  i10032.anyStateTransitions = i10036
  return i10032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i10040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i10041 = data
  i10040.destinationStateNameHash = i10041[0]
  i10040.destinationStateMachineId = i10041[1]
  i10040.isExit = !!i10041[2]
  i10040.mute = !!i10041[3]
  i10040.solo = !!i10041[4]
  var i10043 = i10041[5]
  var i10042 = []
  for(var i = 0; i < i10043.length; i += 1) {
    i10042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10043[i + 0]) );
  }
  i10040.conditions = i10042
  return i10040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i10046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i10047 = data
  i10046.defaultBool = !!i10047[0]
  i10046.defaultFloat = i10047[1]
  i10046.defaultInt = i10047[2]
  i10046.name = i10047[3]
  i10046.nameHash = i10047[4]
  i10046.type = i10047[5]
  return i10046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i10050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i10051 = data
  i10050.mode = i10051[0]
  i10050.parameter = i10051[1]
  i10050.threshold = i10051[2]
  return i10050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i10052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i10053 = data
  i10052.name = i10053[0]
  i10052.bytes64 = i10053[1]
  i10052.data = i10053[2]
  return i10052
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i10054 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i10055 = data
  i10054.hashCode = i10055[0]
  request.r(i10055[1], i10055[2], 0, i10054, 'material')
  i10054.materialHashCode = i10055[3]
  request.r(i10055[4], i10055[5], 0, i10054, 'atlas')
  i10054.normalStyle = i10055[6]
  i10054.normalSpacingOffset = i10055[7]
  i10054.boldStyle = i10055[8]
  i10054.boldSpacing = i10055[9]
  i10054.italicStyle = i10055[10]
  i10054.tabSize = i10055[11]
  i10054.m_Version = i10055[12]
  i10054.m_SourceFontFileGUID = i10055[13]
  request.r(i10055[14], i10055[15], 0, i10054, 'm_SourceFontFile_EditorRef')
  request.r(i10055[16], i10055[17], 0, i10054, 'm_SourceFontFile')
  i10054.m_AtlasPopulationMode = i10055[18]
  i10054.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10055[19], i10054.m_FaceInfo)
  var i10057 = i10055[20]
  var i10056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i10057.length; i += 1) {
    i10056.add(request.d('UnityEngine.TextCore.Glyph', i10057[i + 0]));
  }
  i10054.m_GlyphTable = i10056
  var i10059 = i10055[21]
  var i10058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i10059.length; i += 1) {
    i10058.add(request.d('TMPro.TMP_Character', i10059[i + 0]));
  }
  i10054.m_CharacterTable = i10058
  var i10061 = i10055[22]
  var i10060 = []
  for(var i = 0; i < i10061.length; i += 2) {
  request.r(i10061[i + 0], i10061[i + 1], 2, i10060, '')
  }
  i10054.m_AtlasTextures = i10060
  i10054.m_AtlasTextureIndex = i10055[23]
  i10054.m_IsMultiAtlasTexturesEnabled = !!i10055[24]
  i10054.m_ClearDynamicDataOnBuild = !!i10055[25]
  var i10063 = i10055[26]
  var i10062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10063.length; i += 1) {
    i10062.add(request.d('UnityEngine.TextCore.GlyphRect', i10063[i + 0]));
  }
  i10054.m_UsedGlyphRects = i10062
  var i10065 = i10055[27]
  var i10064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10065.length; i += 1) {
    i10064.add(request.d('UnityEngine.TextCore.GlyphRect', i10065[i + 0]));
  }
  i10054.m_FreeGlyphRects = i10064
  i10054.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i10055[28], i10054.m_fontInfo)
  i10054.m_AtlasWidth = i10055[29]
  i10054.m_AtlasHeight = i10055[30]
  i10054.m_AtlasPadding = i10055[31]
  i10054.m_AtlasRenderMode = i10055[32]
  var i10067 = i10055[33]
  var i10066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i10067.length; i += 1) {
    i10066.add(request.d('TMPro.TMP_Glyph', i10067[i + 0]));
  }
  i10054.m_glyphInfoList = i10066
  i10054.m_KerningTable = request.d('TMPro.KerningTable', i10055[34], i10054.m_KerningTable)
  i10054.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i10055[35], i10054.m_FontFeatureTable)
  var i10069 = i10055[36]
  var i10068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10069.length; i += 2) {
  request.r(i10069[i + 0], i10069[i + 1], 1, i10068, '')
  }
  i10054.fallbackFontAssets = i10068
  var i10071 = i10055[37]
  var i10070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10071.length; i += 2) {
  request.r(i10071[i + 0], i10071[i + 1], 1, i10070, '')
  }
  i10054.m_FallbackFontAssetTable = i10070
  i10054.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i10055[38], i10054.m_CreationSettings)
  var i10073 = i10055[39]
  var i10072 = []
  for(var i = 0; i < i10073.length; i += 1) {
    i10072.push( request.d('TMPro.TMP_FontWeightPair', i10073[i + 0]) );
  }
  i10054.m_FontWeightTable = i10072
  var i10075 = i10055[40]
  var i10074 = []
  for(var i = 0; i < i10075.length; i += 1) {
    i10074.push( request.d('TMPro.TMP_FontWeightPair', i10075[i + 0]) );
  }
  i10054.fontWeights = i10074
  return i10054
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i10076 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i10077 = data
  i10076.m_FaceIndex = i10077[0]
  i10076.m_FamilyName = i10077[1]
  i10076.m_StyleName = i10077[2]
  i10076.m_PointSize = i10077[3]
  i10076.m_Scale = i10077[4]
  i10076.m_LineHeight = i10077[5]
  i10076.m_AscentLine = i10077[6]
  i10076.m_CapLine = i10077[7]
  i10076.m_MeanLine = i10077[8]
  i10076.m_Baseline = i10077[9]
  i10076.m_DescentLine = i10077[10]
  i10076.m_SuperscriptOffset = i10077[11]
  i10076.m_SuperscriptSize = i10077[12]
  i10076.m_SubscriptOffset = i10077[13]
  i10076.m_SubscriptSize = i10077[14]
  i10076.m_UnderlineOffset = i10077[15]
  i10076.m_UnderlineThickness = i10077[16]
  i10076.m_StrikethroughOffset = i10077[17]
  i10076.m_StrikethroughThickness = i10077[18]
  i10076.m_TabWidth = i10077[19]
  return i10076
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i10080 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i10081 = data
  i10080.m_Index = i10081[0]
  i10080.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10081[1], i10080.m_Metrics)
  i10080.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10081[2], i10080.m_GlyphRect)
  i10080.m_Scale = i10081[3]
  i10080.m_AtlasIndex = i10081[4]
  return i10080
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i10082 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i10083 = data
  i10082.m_Width = i10083[0]
  i10082.m_Height = i10083[1]
  i10082.m_HorizontalBearingX = i10083[2]
  i10082.m_HorizontalBearingY = i10083[3]
  i10082.m_HorizontalAdvance = i10083[4]
  return i10082
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i10084 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i10085 = data
  i10084.m_X = i10085[0]
  i10084.m_Y = i10085[1]
  i10084.m_Width = i10085[2]
  i10084.m_Height = i10085[3]
  return i10084
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i10088 = root || request.c( 'TMPro.TMP_Character' )
  var i10089 = data
  i10088.m_ElementType = i10089[0]
  i10088.m_Unicode = i10089[1]
  i10088.m_GlyphIndex = i10089[2]
  i10088.m_Scale = i10089[3]
  return i10088
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i10094 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i10095 = data
  i10094.Name = i10095[0]
  i10094.PointSize = i10095[1]
  i10094.Scale = i10095[2]
  i10094.CharacterCount = i10095[3]
  i10094.LineHeight = i10095[4]
  i10094.Baseline = i10095[5]
  i10094.Ascender = i10095[6]
  i10094.CapHeight = i10095[7]
  i10094.Descender = i10095[8]
  i10094.CenterLine = i10095[9]
  i10094.SuperscriptOffset = i10095[10]
  i10094.SubscriptOffset = i10095[11]
  i10094.SubSize = i10095[12]
  i10094.Underline = i10095[13]
  i10094.UnderlineThickness = i10095[14]
  i10094.strikethrough = i10095[15]
  i10094.strikethroughThickness = i10095[16]
  i10094.TabWidth = i10095[17]
  i10094.Padding = i10095[18]
  i10094.AtlasWidth = i10095[19]
  i10094.AtlasHeight = i10095[20]
  return i10094
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i10098 = root || request.c( 'TMPro.TMP_Glyph' )
  var i10099 = data
  i10098.id = i10099[0]
  i10098.x = i10099[1]
  i10098.y = i10099[2]
  i10098.width = i10099[3]
  i10098.height = i10099[4]
  i10098.xOffset = i10099[5]
  i10098.yOffset = i10099[6]
  i10098.xAdvance = i10099[7]
  i10098.scale = i10099[8]
  return i10098
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i10100 = root || request.c( 'TMPro.KerningTable' )
  var i10101 = data
  var i10103 = i10101[0]
  var i10102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i10103.length; i += 1) {
    i10102.add(request.d('TMPro.KerningPair', i10103[i + 0]));
  }
  i10100.kerningPairs = i10102
  return i10100
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i10106 = root || request.c( 'TMPro.KerningPair' )
  var i10107 = data
  i10106.xOffset = i10107[0]
  i10106.m_FirstGlyph = i10107[1]
  i10106.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10107[2], i10106.m_FirstGlyphAdjustments)
  i10106.m_SecondGlyph = i10107[3]
  i10106.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10107[4], i10106.m_SecondGlyphAdjustments)
  i10106.m_IgnoreSpacingAdjustments = !!i10107[5]
  return i10106
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i10108 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i10109 = data
  var i10111 = i10109[0]
  var i10110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i10111.length; i += 1) {
    i10110.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i10111[i + 0]));
  }
  i10108.m_GlyphPairAdjustmentRecords = i10110
  return i10108
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i10114 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i10115 = data
  i10114.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i10115[0], i10114.m_FirstAdjustmentRecord)
  i10114.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i10115[1], i10114.m_SecondAdjustmentRecord)
  i10114.m_FeatureLookupFlags = i10115[2]
  return i10114
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i10118 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i10119 = data
  i10118.sourceFontFileName = i10119[0]
  i10118.sourceFontFileGUID = i10119[1]
  i10118.pointSizeSamplingMode = i10119[2]
  i10118.pointSize = i10119[3]
  i10118.padding = i10119[4]
  i10118.packingMode = i10119[5]
  i10118.atlasWidth = i10119[6]
  i10118.atlasHeight = i10119[7]
  i10118.characterSetSelectionMode = i10119[8]
  i10118.characterSequence = i10119[9]
  i10118.referencedFontAssetGUID = i10119[10]
  i10118.referencedTextAssetGUID = i10119[11]
  i10118.fontStyle = i10119[12]
  i10118.fontStyleModifier = i10119[13]
  i10118.renderMode = i10119[14]
  i10118.includeFontFeatures = !!i10119[15]
  return i10118
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i10122 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i10123 = data
  request.r(i10123[0], i10123[1], 0, i10122, 'regularTypeface')
  request.r(i10123[2], i10123[3], 0, i10122, 'italicTypeface')
  return i10122
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i10124 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i10125 = data
  var i10127 = i10125[0]
  var i10126 = []
  for(var i = 0; i < i10127.length; i += 1) {
    i10126.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i10127[i + 0]) );
  }
  i10124.m_CustomBlends = i10126
  return i10124
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i10130 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i10131 = data
  i10130.m_From = i10131[0]
  i10130.m_To = i10131[1]
  i10130.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i10131[2], i10130.m_Blend)
  return i10130
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i10132 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i10133 = data
  var i10135 = i10133[0]
  var i10134 = []
  for(var i = 0; i < i10135.length; i += 1) {
    i10134.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i10135[i + 0]) );
  }
  i10132.PositionNoise = i10134
  var i10137 = i10133[1]
  var i10136 = []
  for(var i = 0; i < i10137.length; i += 1) {
    i10136.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i10137[i + 0]) );
  }
  i10132.OrientationNoise = i10136
  return i10132
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i10140 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i10141 = data
  i10140.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i10141[0], i10140.X)
  i10140.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i10141[1], i10140.Y)
  i10140.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i10141[2], i10140.Z)
  return i10140
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i10142 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i10143 = data
  i10142.Frequency = i10143[0]
  i10142.Amplitude = i10143[1]
  i10142.Constant = !!i10143[2]
  return i10142
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i10144 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i10145 = data
  var i10147 = i10145[0]
  var i10146 = []
  for(var i = 0; i < i10147.length; i += 1) {
    i10146.push( request.d('ScenarioFour.CameraFov', i10147[i + 0]) );
  }
  i10144._fovList = i10146
  return i10144
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i10150 = root || request.c( 'ScenarioFour.CameraFov' )
  var i10151 = data
  i10150._cameraType = i10151[0]
  i10150._landscape = i10151[1]
  i10150._portrait = i10151[2]
  return i10150
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i10152 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i10153 = data
  i10152.useSafeMode = !!i10153[0]
  i10152.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i10153[1], i10152.safeModeOptions)
  i10152.timeScale = i10153[2]
  i10152.useSmoothDeltaTime = !!i10153[3]
  i10152.maxSmoothUnscaledTime = i10153[4]
  i10152.rewindCallbackMode = i10153[5]
  i10152.showUnityEditorReport = !!i10153[6]
  i10152.logBehaviour = i10153[7]
  i10152.drawGizmos = !!i10153[8]
  i10152.defaultRecyclable = !!i10153[9]
  i10152.defaultAutoPlay = i10153[10]
  i10152.defaultUpdateType = i10153[11]
  i10152.defaultTimeScaleIndependent = !!i10153[12]
  i10152.defaultEaseType = i10153[13]
  i10152.defaultEaseOvershootOrAmplitude = i10153[14]
  i10152.defaultEasePeriod = i10153[15]
  i10152.defaultAutoKill = !!i10153[16]
  i10152.defaultLoopType = i10153[17]
  i10152.debugMode = !!i10153[18]
  i10152.debugStoreTargetId = !!i10153[19]
  i10152.showPreviewPanel = !!i10153[20]
  i10152.storeSettingsLocation = i10153[21]
  i10152.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i10153[22], i10152.modules)
  i10152.createASMDEF = !!i10153[23]
  i10152.showPlayingTweens = !!i10153[24]
  i10152.showPausedTweens = !!i10153[25]
  return i10152
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i10154 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i10155 = data
  i10154.logBehaviour = i10155[0]
  i10154.nestedTweenFailureBehaviour = i10155[1]
  return i10154
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i10156 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i10157 = data
  i10156.showPanel = !!i10157[0]
  i10156.audioEnabled = !!i10157[1]
  i10156.physicsEnabled = !!i10157[2]
  i10156.physics2DEnabled = !!i10157[3]
  i10156.spriteEnabled = !!i10157[4]
  i10156.uiEnabled = !!i10157[5]
  i10156.textMeshProEnabled = !!i10157[6]
  i10156.tk2DEnabled = !!i10157[7]
  i10156.deAudioEnabled = !!i10157[8]
  i10156.deUnityExtendedEnabled = !!i10157[9]
  i10156.epoOutlineEnabled = !!i10157[10]
  return i10156
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i10158 = root || request.c( 'TMPro.TMP_Settings' )
  var i10159 = data
  i10158.m_enableWordWrapping = !!i10159[0]
  i10158.m_enableKerning = !!i10159[1]
  i10158.m_enableExtraPadding = !!i10159[2]
  i10158.m_enableTintAllSprites = !!i10159[3]
  i10158.m_enableParseEscapeCharacters = !!i10159[4]
  i10158.m_EnableRaycastTarget = !!i10159[5]
  i10158.m_GetFontFeaturesAtRuntime = !!i10159[6]
  i10158.m_missingGlyphCharacter = i10159[7]
  i10158.m_warningsDisabled = !!i10159[8]
  request.r(i10159[9], i10159[10], 0, i10158, 'm_defaultFontAsset')
  i10158.m_defaultFontAssetPath = i10159[11]
  i10158.m_defaultFontSize = i10159[12]
  i10158.m_defaultAutoSizeMinRatio = i10159[13]
  i10158.m_defaultAutoSizeMaxRatio = i10159[14]
  i10158.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i10159[15], i10159[16] )
  i10158.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i10159[17], i10159[18] )
  i10158.m_autoSizeTextContainer = !!i10159[19]
  i10158.m_IsTextObjectScaleStatic = !!i10159[20]
  var i10161 = i10159[21]
  var i10160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10161.length; i += 2) {
  request.r(i10161[i + 0], i10161[i + 1], 1, i10160, '')
  }
  i10158.m_fallbackFontAssets = i10160
  i10158.m_matchMaterialPreset = !!i10159[22]
  request.r(i10159[23], i10159[24], 0, i10158, 'm_defaultSpriteAsset')
  i10158.m_defaultSpriteAssetPath = i10159[25]
  i10158.m_enableEmojiSupport = !!i10159[26]
  i10158.m_MissingCharacterSpriteUnicode = i10159[27]
  i10158.m_defaultColorGradientPresetsPath = i10159[28]
  request.r(i10159[29], i10159[30], 0, i10158, 'm_defaultStyleSheet')
  i10158.m_StyleSheetsResourcePath = i10159[31]
  request.r(i10159[32], i10159[33], 0, i10158, 'm_leadingCharacters')
  request.r(i10159[34], i10159[35], 0, i10158, 'm_followingCharacters')
  i10158.m_UseModernHangulLineBreakingRules = !!i10159[36]
  return i10158
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i10162 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i10163 = data
  var i10165 = i10163[0]
  var i10164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i10165.length; i += 1) {
    i10164.add(request.d('TMPro.TMP_Style', i10165[i + 0]));
  }
  i10162.m_StyleList = i10164
  return i10162
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i10168 = root || request.c( 'TMPro.TMP_Style' )
  var i10169 = data
  i10168.m_Name = i10169[0]
  i10168.m_HashCode = i10169[1]
  i10168.m_OpeningDefinition = i10169[2]
  i10168.m_ClosingDefinition = i10169[3]
  i10168.m_OpeningTagArray = i10169[4]
  i10168.m_ClosingTagArray = i10169[5]
  i10168.m_OpeningTagUnicodeArray = i10169[6]
  i10168.m_ClosingTagUnicodeArray = i10169[7]
  return i10168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i10170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i10171 = data
  var i10173 = i10171[0]
  var i10172 = []
  for(var i = 0; i < i10173.length; i += 1) {
    i10172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i10173[i + 0]) );
  }
  i10170.files = i10172
  i10170.componentToPrefabIds = i10171[1]
  return i10170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i10176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i10177 = data
  i10176.path = i10177[0]
  request.r(i10177[1], i10177[2], 0, i10176, 'unityObject')
  return i10176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i10178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i10179 = data
  var i10181 = i10179[0]
  var i10180 = []
  for(var i = 0; i < i10181.length; i += 1) {
    i10180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i10181[i + 0]) );
  }
  i10178.scriptsExecutionOrder = i10180
  var i10183 = i10179[1]
  var i10182 = []
  for(var i = 0; i < i10183.length; i += 1) {
    i10182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i10183[i + 0]) );
  }
  i10178.sortingLayers = i10182
  var i10185 = i10179[2]
  var i10184 = []
  for(var i = 0; i < i10185.length; i += 1) {
    i10184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i10185[i + 0]) );
  }
  i10178.cullingLayers = i10184
  i10178.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i10179[3], i10178.timeSettings)
  i10178.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i10179[4], i10178.physicsSettings)
  i10178.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i10179[5], i10178.physics2DSettings)
  i10178.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10179[6], i10178.qualitySettings)
  i10178.enableRealtimeShadows = !!i10179[7]
  i10178.autoInstantiatePrefabs = !!i10179[8]
  i10178.enableAutoInstancing = !!i10179[9]
  i10178.lightmapEncodingQuality = i10179[10]
  i10178.desiredColorSpace = i10179[11]
  return i10178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i10188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i10189 = data
  i10188.name = i10189[0]
  i10188.value = i10189[1]
  return i10188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i10192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i10193 = data
  i10192.id = i10193[0]
  i10192.name = i10193[1]
  i10192.value = i10193[2]
  return i10192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i10196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i10197 = data
  i10196.id = i10197[0]
  i10196.name = i10197[1]
  return i10196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i10198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i10199 = data
  i10198.fixedDeltaTime = i10199[0]
  i10198.maximumDeltaTime = i10199[1]
  i10198.timeScale = i10199[2]
  i10198.maximumParticleTimestep = i10199[3]
  return i10198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i10200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i10201 = data
  i10200.gravity = new pc.Vec3( i10201[0], i10201[1], i10201[2] )
  i10200.defaultSolverIterations = i10201[3]
  i10200.bounceThreshold = i10201[4]
  i10200.autoSyncTransforms = !!i10201[5]
  i10200.autoSimulation = !!i10201[6]
  var i10203 = i10201[7]
  var i10202 = []
  for(var i = 0; i < i10203.length; i += 1) {
    i10202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i10203[i + 0]) );
  }
  i10200.collisionMatrix = i10202
  return i10200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i10206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i10207 = data
  i10206.enabled = !!i10207[0]
  i10206.layerId = i10207[1]
  i10206.otherLayerId = i10207[2]
  return i10206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i10208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i10209 = data
  request.r(i10209[0], i10209[1], 0, i10208, 'material')
  i10208.gravity = new pc.Vec2( i10209[2], i10209[3] )
  i10208.positionIterations = i10209[4]
  i10208.velocityIterations = i10209[5]
  i10208.velocityThreshold = i10209[6]
  i10208.maxLinearCorrection = i10209[7]
  i10208.maxAngularCorrection = i10209[8]
  i10208.maxTranslationSpeed = i10209[9]
  i10208.maxRotationSpeed = i10209[10]
  i10208.timeToSleep = i10209[11]
  i10208.linearSleepTolerance = i10209[12]
  i10208.angularSleepTolerance = i10209[13]
  i10208.defaultContactOffset = i10209[14]
  i10208.autoSimulation = !!i10209[15]
  i10208.queriesHitTriggers = !!i10209[16]
  i10208.queriesStartInColliders = !!i10209[17]
  i10208.callbacksOnDisable = !!i10209[18]
  i10208.reuseCollisionCallbacks = !!i10209[19]
  i10208.autoSyncTransforms = !!i10209[20]
  var i10211 = i10209[21]
  var i10210 = []
  for(var i = 0; i < i10211.length; i += 1) {
    i10210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i10211[i + 0]) );
  }
  i10208.collisionMatrix = i10210
  return i10208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i10214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i10215 = data
  i10214.enabled = !!i10215[0]
  i10214.layerId = i10215[1]
  i10214.otherLayerId = i10215[2]
  return i10214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i10216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i10217 = data
  var i10219 = i10217[0]
  var i10218 = []
  for(var i = 0; i < i10219.length; i += 1) {
    i10218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10219[i + 0]) );
  }
  i10216.qualityLevels = i10218
  var i10221 = i10217[1]
  var i10220 = []
  for(var i = 0; i < i10221.length; i += 1) {
    i10220.push( i10221[i + 0] );
  }
  i10216.names = i10220
  i10216.shadows = i10217[2]
  i10216.anisotropicFiltering = i10217[3]
  i10216.antiAliasing = i10217[4]
  i10216.lodBias = i10217[5]
  i10216.shadowCascades = i10217[6]
  i10216.shadowDistance = i10217[7]
  i10216.shadowmaskMode = i10217[8]
  i10216.shadowProjection = i10217[9]
  i10216.shadowResolution = i10217[10]
  i10216.softParticles = !!i10217[11]
  i10216.softVegetation = !!i10217[12]
  i10216.activeColorSpace = i10217[13]
  i10216.desiredColorSpace = i10217[14]
  i10216.masterTextureLimit = i10217[15]
  i10216.maxQueuedFrames = i10217[16]
  i10216.particleRaycastBudget = i10217[17]
  i10216.pixelLightCount = i10217[18]
  i10216.realtimeReflectionProbes = !!i10217[19]
  i10216.shadowCascade2Split = i10217[20]
  i10216.shadowCascade4Split = new pc.Vec3( i10217[21], i10217[22], i10217[23] )
  i10216.streamingMipmapsActive = !!i10217[24]
  i10216.vSyncCount = i10217[25]
  i10216.asyncUploadBufferSize = i10217[26]
  i10216.asyncUploadTimeSlice = i10217[27]
  i10216.billboardsFaceCameraPosition = !!i10217[28]
  i10216.shadowNearPlaneOffset = i10217[29]
  i10216.streamingMipmapsMemoryBudget = i10217[30]
  i10216.maximumLODLevel = i10217[31]
  i10216.streamingMipmapsAddAllCameras = !!i10217[32]
  i10216.streamingMipmapsMaxLevelReduction = i10217[33]
  i10216.streamingMipmapsRenderersPerFrame = i10217[34]
  i10216.resolutionScalingFixedDPIFactor = i10217[35]
  i10216.streamingMipmapsMaxFileIORequests = i10217[36]
  i10216.currentQualityLevel = i10217[37]
  return i10216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i10226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i10227 = data
  i10226.weight = i10227[0]
  i10226.vertices = i10227[1]
  i10226.normals = i10227[2]
  i10226.tangents = i10227[3]
  return i10226
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i10228 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i10229 = data
  request.r(i10229[0], i10229[1], 0, i10228, 'm_ObjectArgument')
  i10228.m_ObjectArgumentAssemblyTypeName = i10229[2]
  i10228.m_IntArgument = i10229[3]
  i10228.m_FloatArgument = i10229[4]
  i10228.m_StringArgument = i10229[5]
  i10228.m_BoolArgument = !!i10229[6]
  return i10228
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i10230 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i10231 = data
  i10230.xPlacement = i10231[0]
  i10230.yPlacement = i10231[1]
  i10230.xAdvance = i10231[2]
  i10230.yAdvance = i10231[3]
  return i10230
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i10232 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i10233 = data
  i10232.m_GlyphIndex = i10233[0]
  i10232.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i10233[1], i10232.m_GlyphValueRecord)
  return i10232
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i10234 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i10235 = data
  i10234.m_XPlacement = i10235[0]
  i10234.m_YPlacement = i10235[1]
  i10234.m_XAdvance = i10235[2]
  i10234.m_YAdvance = i10235[3]
  return i10234
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

Deserializers.creativeName = "FinalDraft_v2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1148";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CRSEDPlayableAdRepack";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e78127db-bace-49a1-a7b8-533509fa5555";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

