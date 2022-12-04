import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CanvasProps {
  data: any;
  loading: boolean;
}

const GalleryViewer = ({ data, loading }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const image = new Image();
    image.src = data?.download_url;
    image.onload = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context?.drawImage(image, 0, 0, width, height);
    };
  });

  const navigate = useNavigate();
  const onWheel = (event: any) => {
    if (event.deltaY > 0) {
      console.log('위로');
      if (data.id < 0) return;
      navigate(`/${Number(data.id) + 1}`);
    }
    if (event.deltaY < 0) {
      console.log('아래로');
      if (data.id > 29) return;
      navigate(`/${Number(data.id) - 1}`);
    }
  };

  if (loading) return <div>loading</div>;

  return (
    <Canvas
      onWheel={onWheel}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;

export default GalleryViewer;
