import React from 'react';

interface PdfViewerProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-5xl h-[85vh] bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">{title ?? 'Project PDF'}</h3>
          <button
            onClick={onClose}
            aria-label="Close PDF viewer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 bg-slate-100 dark:bg-slate-900">
          {/* Using iframe for simplicity and broad browser compatibility. */}
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title={title ?? 'PDF viewer'}
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default PdfViewer;
