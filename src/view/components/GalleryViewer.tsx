import React, { useEffect, useRef } from 'react';
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

  if (loading) return <div>loading</div>;

  return (
    <Canvas
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
