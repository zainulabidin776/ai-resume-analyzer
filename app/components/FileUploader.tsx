import {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf']},
        maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;



    return (
        <div className="w-full gradient-border hover:shadow-2xl transition-all duration-500">
            <div {...getRootProps()} className="transition-all duration-300">
                <input {...getInputProps()} />

                <div className="space-y-4 cursor-pointer">
                    {file ? (
                        <div className="uploader-selected-file animate-in slide-in-from-left duration-500 hover:shadow-lg transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                            <img src="/images/pdf.png" alt="pdf" className="size-10 animate-pulse" />
                            <div className="flex items-center space-x-3">
                                <div>
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-xs">
                                        {file.name}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className="p-2 cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-all duration-200 hover:scale-110" onClick={(e) => {
                                onFileSelect?.(null)
                            }}>
                                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
                            </button>
                        </div>
                    ): (
                        <div className={`uplader-drag-area ${isDragActive ? 'scale-105 bg-indigo-50 border-indigo-400' : ''} transition-all duration-300`}>
                            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
                                <img src="/icons/info.svg" alt="upload" className={`size-20 transition-all duration-300 ${isDragActive ? 'animate-bounce' : 'animate-float'}`} />
                            </div>
                            <p className="text-lg text-gray-500 transition-colors duration-300">
                                <span className="font-semibold text-indigo-600">
                                    {isDragActive ? 'Drop your PDF here' : 'Click to upload'}
                                </span> {!isDragActive && 'or drag and drop'}
                            </p>
                            <p className="text-lg text-gray-500">PDF (max {formatSize(maxFileSize)})</p>
                            {isDragActive && (
                                <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl animate-pulse"></div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default FileUploader