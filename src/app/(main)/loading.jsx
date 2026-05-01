export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <span className="loading loading-bars loading-lg text-primary"></span>
            <h2 className="mt-4 text-xl font-semibold text-gray-600 animate-pulse">
                Loading Data...
            </h2>
        </div>
    );
}