<script>
	import { Canvas, InteractiveObject, OrbitControls, Object3DInstance, T } from '@threlte/core'
	import { spring } from 'svelte/motion'
	import { degToRad } from 'three/src/math/MathUtils'
	import { useGltf, GLTF } from '@threlte/extras'
	import {Material, Object3D} from "three";

	const scale = spring(1)

	// const { gltf: bumblebee1 } = useGltf('./bumblebee1.glb');
	// $: stats = JSON.stringify(Object.keys($bumblebee1?.nodes?.Plane || {}), null, 2);
	// $: position = JSON.stringify($bumblebee1?.nodes?.position, null, 2);
	// $: bscale = JSON.stringify($bumblebee1?.nodes?.scale, null, 2);

   	// const { gltf: bumblebee2 } = useGltf('./bumblebee2.glb')
</script>

<div>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<!-- Cube -->
<!--		<T.Group scale={$scale}>-->
<!--			<T.Mesh position.y={0.5} castShadow let:ref>-->
<!--				&lt;!&ndash; Add interaction &ndash;&gt;-->
<!--				<InteractiveObject-->
<!--						object={ref}-->
<!--						interactive-->
<!--						on:pointerenter={() => ($scale = 2)}-->
<!--						on:pointerleave={() => ($scale = 1)}-->
<!--				/>-->

<!--				<T.BoxGeometry />-->
<!--				<T.MeshStandardMaterial color="#333333" />-->
<!--			</T.Mesh>-->
<!--		</T.Group>-->

<!--		{#if bumblebee1?.nodes?.Plane}-->
<!--			<Object3DInstance object={bumblebee1.nodes} position={{x:0, y:0, z:0}}  />-->
<!--		{/if}-->
		<!-- Floor -->
<!--		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>-->
<!--			<T.CircleGeometry args={[3, 72]} />-->
<!--			<T.MeshStandardMaterial color="white" />-->
<!--		</T.Mesh>-->

<!--		<GLTF castShadow receiveShadow url={'./bumblebee1.glb'} position={{ y: 1 }} scale={0.3} />-->
		<GLTF castShadow receiveShadow url={'./bumblebee2.glb'} position={{ y: 1 }} scale={0.3} />
	</Canvas>
	<!--{#if $bumblebee1}-->
	<!--	<pre>{position}</pre>-->
	<!--	<pre>{bscale}</pre>-->
	<!--	<pre>{stats}</pre>-->
	<!--{/if}-->
</div>

<style>
	div {
		height: 100%;
		width: 100%;
		flex-grow: 1;
	}
</style>
