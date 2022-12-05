import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import Loading from './common/Loading';

interface CanvasProps {
  data: any;
  loading: boolean;
}

interface IPos {
  x: number;
  y: number;
}

const GalleryViewer = ({ data, loading }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [leftClick, setLeftClick] = useState<boolean>(false);
  const [rightClick, setRightClick] = useState<boolean>(false);
  const [pos, setPos] = useState<IPos>({ x: 0, y: 0 });
  const canvas = canvasRef.current;
  const context = canvas?.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [scale, setScale] = useState(1);
  const [deg, setDeg] = useState(0);
  const [initPos, setInitPos] = useState(0);

  useEffect(() => {
    const image = new Image();
    image.src = data?.download_url;
    image.onload = () => {
      context?.drawImage(image, 0, 0, width, height);
    };
  });

  const onMouseDown = ({ clientY, button }: MouseEvent) => {
    if (button === 0) {
      setInitPos(clientY);
      setLeftClick(true);
    }
    if (button === 2) {
      setRightClick(true);
    }
  };

  const onMouseUp = (event: MouseEvent) => {
    setLeftClick(false);
    setRightClick(false);
  };

  const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const calcValue = clientY - initPos;
    if (leftClick) {
      setScale((v) => v + calcValue / 1000);
    }
    if (rightClick) {
      if (pos.y < clientY) {
        setDeg((v) => v + calcValue / 100);
      }
      if (pos.y > clientY) {
        setDeg((v) => v - calcValue / 100);
      }
    }
    setPos({ x: clientX, y: clientY });
  };

  const onContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };

  if (loading) return <Loading />;

  return (
    <Container
      scale={scale}
      deg={deg}
    >
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onContextMenu={onContextMenu}
      ></canvas>
    </Container>
  );
};

const Container = styled.div<any>`
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(${(props: any) => props.scale})
      rotate(${(props) => props.deg}deg);
  }
`;

export default GalleryViewer;
