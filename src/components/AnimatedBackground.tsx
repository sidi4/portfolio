import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string = 'rgba(255, 255, 255, 0.5)';
      hue: number;
      brightness: number;
      alpha: number;
      pulseSpeed: number;
      pulseOffset: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1; // Slightly smaller particles
        this.speedX = Math.random() * 1 - 0.5; // Slower movement
        this.speedY = Math.random() * 1 - 0.5; // Slower movement
        this.hue = 0; // White particles (hue doesn't matter for white)
        this.brightness = 100; // Full brightness for white
        this.alpha = Math.random() * 0.4 + 0.1; // More subtle alpha
        this.pulseSpeed = Math.random() * 0.01 + 0.005; // Slower pulse
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.updateColor();
      }

      updateColor() {
        const pulse = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset);
        const currentAlpha = this.alpha * (0.6 + pulse * 0.4); // Subtle alpha pulse
        this.color = `rgba(255, 255, 255, ${currentAlpha})`; // White color
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > this.canvasWidth) this.x = 0;
        if (this.x < 0) this.x = this.canvasWidth;
        if (this.y > this.canvasHeight) this.y = 0;
        if (this.y < 0) this.y = this.canvasHeight;

        this.updateColor();
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // No separate glow effect, let particle alpha handle it
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100; // Adjusted for a sparser look like the image
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Slightly increased connection distance
            const opacity = (1 - distance / 120) * 0.15; // More subtle opacity for connections
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // No background drawing here, handled by canvas style
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#2C3E50', // Solid blue background matching the image
      }}
    />
  );
};

export default AnimatedBackground; 