'use client';

import { useState } from 'react';

export default function AdminDocumentos() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadError, setUploadError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null,
    date: ''
  });

  // Multiple file upload state
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isMultipleUploading, setIsMultipleUploading] = useState(false);
  const [multipleUploadStatus, setMultipleUploadStatus] = useState('');
  const [multipleUploadError, setMultipleUploadError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd verify this against your backend
    // For now, we'll use a simple check
    if (secretKey === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY || secretKey === 'admin123') {
      setIsAuthenticated(true);
      setUploadError('');
    } else {
      setUploadError('Invalid secret key');
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Multiple file upload handlers
  const handleMultipleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setMultipleFiles(prev => [...prev, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setMultipleFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setMultipleFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleMultipleUpload = async (e) => {
    e.preventDefault();
    
    if (multipleFiles.length === 0) {
      setMultipleUploadError('Please select at least one file');
      return;
    }

    setIsMultipleUploading(true);
    setMultipleUploadError('');
    setMultipleUploadStatus('Uploading files...');

    try {
      const uploadPromises = multipleFiles.map(async (file, index) => {
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('name', `document_${index + 1}`);
        uploadFormData.append('description', `Multiple upload - File ${index + 1}`);
        uploadFormData.append('date', new Date().toISOString().split('T')[0]);

        const response = await fetch('/api/documentos/upload', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${secretKey}`
          },
          body: uploadFormData
        });

        const result = await response.json();
        return { success: response.ok, result, filename: file.name };
      });

      const results = await Promise.all(uploadPromises);
      const successful = results.filter(r => r.success);
      const failed = results.filter(r => !r.success);

      if (successful.length > 0) {
        setMultipleUploadStatus(`Successfully uploaded ${successful.length} file(s). ${failed.length > 0 ? `${failed.length} failed.` : ''}`);
        setMultipleFiles([]);
      } else {
        setMultipleUploadError('All uploads failed');
      }
    } catch (error) {
      setMultipleUploadError('Network error. Please try again.');
    } finally {
      setIsMultipleUploading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!formData.file || !formData.name || !formData.description || !formData.date) {
      setUploadError('All fields are required');
      return;
    }

    setIsUploading(true);
    setUploadError('');
    setUploadStatus('Uploading...');

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', formData.file);
      uploadFormData.append('name', formData.name);
      uploadFormData.append('description', formData.description);
      uploadFormData.append('date', formData.date);

      const response = await fetch('/api/documentos/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${secretKey}`
        },
        body: uploadFormData
      });

      const result = await response.json();

      if (response.ok) {
        setUploadStatus(`Success! File uploaded: ${result.filename} (Date: ${result.date})`);
        setFormData({ name: '', description: '', file: null, date: '' });
        // Reset file input
        const fileInput = document.getElementById('file-input');
        if (fileInput) fileInput.value = '';
      } else {
        setUploadError(result.error || 'Upload failed');
      }
    } catch (error) {
      setUploadError('Network error. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="w-full max-w-md px-4 py-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/20">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Admin Login
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your secret key to access the admin panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="secretKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Secret Key
                </label>
                <input
                  type="password"
                  id="secretKey"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your secret key"
                  required
                />
              </div>

              {uploadError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-sm text-red-600 dark:text-red-400">{uploadError}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl pb-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Admin - Documentos
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Upload and manage documents for the Condomínio Dona Mirai
          </p>
        </div>

        {/* Upload Form */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/20 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Upload New Document
          </h2>

            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Document Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g., Regulamento Interno"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Brief description of the document"
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Format: YYYY-MM-DD (e.g., 2025-10-29)
                </p>
              </div>

              <div>
                <label htmlFor="file-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  File
                </label>
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                />
              </div>

              {uploadStatus && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-sm text-green-600 dark:text-green-400">{uploadStatus}</p>
                </div>
              )}

              {uploadError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-sm text-red-600 dark:text-red-400">{uploadError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isUploading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
              >
                {isUploading ? 'Uploading...' : 'Upload Document'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> After uploading, you&apos;ll need to manually update the URL in the documentos.constant.js file to make the document available for download.
              </p>
            </div>
          </div>

        {/* Multiple File Upload Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/20 max-w-4xl mx-auto mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Multiple File Upload
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Upload multiple files at once. Files will be automatically named as document_1, document_2, etc.
          </p>

          {/* Drag and Drop Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
              isDragOver
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Drag and drop files here
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  or click to select files
                </p>
              </div>
              <input
                type="file"
                multiple
                onChange={handleMultipleFileChange}
                className="hidden"
                id="multiple-file-input"
              />
              <label
                htmlFor="multiple-file-input"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Select Files
              </label>
            </div>
          </div>

          {/* Selected Files List */}
          {multipleFiles.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Selected Files ({multipleFiles.length})
              </h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {multipleFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          {multipleFiles.length > 0 && (
            <div className="mt-6">
              <button
                onClick={handleMultipleUpload}
                disabled={isMultipleUploading}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
              >
                {isMultipleUploading ? 'Uploading...' : `Upload ${multipleFiles.length} File(s)`}
              </button>
            </div>
          )}

          {/* Status Messages */}
          {multipleUploadStatus && (
            <div className="mt-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
              <p className="text-sm text-green-600 dark:text-green-400">{multipleUploadStatus}</p>
            </div>
          )}

          {multipleUploadError && (
            <div className="mt-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <p className="text-sm text-red-600 dark:text-red-400">{multipleUploadError}</p>
            </div>
          )}

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              <strong>Note:</strong> Files will be automatically named as document_1, document_2, etc. You can rename them later in the documentos.constant.js file.
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setSecretKey('');
              setUploadStatus('');
              setUploadError('');
              setFormData({ name: '', description: '', file: null, date: '' });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
