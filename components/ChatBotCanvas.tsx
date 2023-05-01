"use client";
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';

const Head = () => {
    const model = useGLTF("/head.glb");
    const animation = useAnimations(model.animations, model.scene);
    const action = animation.actions.Animation;
    //console.log(action);

    useEffect(() => {
        //action?.play();
        //action?.stop();
    }, [action]);

    return <primitive object={model.scene} scale={3} rotation-z={0.2} />;
};

const ChatBotCanvas = () => {
    return (
        <Canvas>
            <OrbitControls
                enableZoom={false}
                enableDamping
                maxPolarAngle={2}
                minAzimuthAngle={-Math.PI * 0.5}
                maxAzimuthAngle={Math.PI * 0.5}
            />
            <ambientLight />
            <Head />
        </Canvas>
    );
}

export default ChatBotCanvas;
