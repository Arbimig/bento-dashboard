import { useState, useRef } from 'react';
import ReactGridLayout, { getCompactor } from 'react-grid-layout';
import type { LayoutItem, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const initialLayout: LayoutItem[] = [
    { i: 'map', x: 0, y: 0, w: 6, h: 4 },
    { i: 'instagram', x: 6, y: 0, w: 6, h: 4 },
    { i: 'note', x: 0, y: 4, w: 4, h: 2 },
    { i: 'youtube', x: 4, y: 4, w: 2, h: 2 },
];

const getBentoStyle = (background: string, color: string) => ({
    background,
    borderRadius: '16px',
    color,
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontSize: '1.25rem',
    fontWeight: 600,
    transition: 'all 0.10s ease',
});

const dragHandleStyle = {
    position: 'absolute' as const,
    top: '12px',
    right: '12px',
    width: '32px',
    height: '32px',
    background: 'rgba(255,255,255,0.12)',
    borderRadius: '50%',
    cursor: 'grab',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    backdropFilter: 'blur(6px)',
    border: '1px solid rgba(255,255,255,0.18)',
    transition: 'all 0.10s ease',
};

export default function Board() {
    const [layout, setLayout] = useState<Layout>(() => {
        const saved = localStorage.getItem('bento-layout');
        try {
            return saved ? JSON.parse(saved) : initialLayout;
        } catch {
            return initialLayout;
        }
    });
    const isFirstChange = useRef(true);

    const handleLayoutChange = (newLayout: Layout) => {
        setLayout(newLayout);
        if (!isFirstChange.current) {
            localStorage.setItem('bento-layout', JSON.stringify(newLayout));
        }
        isFirstChange.current = false;
    };

    const resetLayout = () => {
        setLayout(initialLayout);
        localStorage.removeItem('bento-layout');
        isFirstChange.current = true;
    };

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={resetLayout} style={{ marginBottom: '16px' }}>Reset Layout</button>
            <div style={{ position: 'relative', margin: '0 auto', width: '1200px' }}>
                <ReactGridLayout
                    layout={layout}
                    onLayoutChange={handleLayoutChange}
                    gridConfig={{ cols: 12, rowHeight: 80, margin: [16, 16] }}
                    dragConfig={{ handle: ".drag-handle" }}
                    resizeConfig={{ enabled: false }}
                    compactor={getCompactor('vertical', false, false)}
                    width={1200}
                    style={{ transition: 'none' }}
                >
                    <div key="map" style={getBentoStyle('linear-gradient(135deg, #33619d 0%, #0c2141 100%)', '#e0f0ff')}>
                        <div className="drag-handle" style={dragHandleStyle}></div>
                        Map
                    </div>
                    <div key="instagram" style={getBentoStyle('linear-gradient(135deg, #833ab4 0%, #c13584 50%, #fd1d1d 100%)', '#ffffff')}>
                        <div className="drag-handle" style={dragHandleStyle}></div>
                        Instagram
                    </div>
                    <div key="note" style={getBentoStyle('linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', '#ecf0f1')}>
                        <div className="drag-handle" style={dragHandleStyle}></div>
                        Note
                    </div>
                    <div key="youtube" style={getBentoStyle('linear-gradient(135deg, #b31217 0%, #e52d27 100%)', '#ffffff')}>
                        <div className="drag-handle" style={dragHandleStyle}></div>
                        YouTube
                    </div>
                </ReactGridLayout>
            </div>
        </div>
    );
}