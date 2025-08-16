export default function GoogleButton({ loading, onClick, text = 'Sign in with Google' }: { loading?: boolean; onClick?: () => void; text?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-60 text-gray-700 font-medium text-sm transition shadow-sm"
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#EA4335" d="M12 10.8v3.6h5.06c-.22 1.16-.9 2.14-1.93 2.8l3.12 2.42C20.3 18.07 21.2 15.7 21.2 13c0-.7-.06-1.37-.18-2H12Z" />
          <path fill="#34A853" d="M6.56 14.32a5.18 5.18 0 0 1 0-4.64L3.3 7.18a9.02 9.02 0 0 0 0 9.64l3.26-2.5Z" />
          <path fill="#FBBC05" d="M12 5.4c1.04 0 1.98.36 2.72 1.06l2.04-2.04A8.58 8.58 0 0 0 12 2.2a8.8 8.8 0 0 0-8.7 5l3.26 2.5A5.2 5.2 0 0 1 12 5.4Z" />
          <path fill="#4285F4" d="M12 21.8c2.16 0 3.98-.7 5.34-1.92l-3.12-2.42c-.86 .56-1.94 .9-3.22 .9a5.2 5.2 0 0 1-4.44-2.54L3.3 16.82A8.8 8.8 0 0 0 12 21.8Z" />
        </svg>
      )}
      <span className="leading-none">{text}</span>
    </button>
  );
}
