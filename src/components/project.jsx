export default function Project ({ name, url, githubRepo }) {
    return (
        <div className='flex flex-col font-mono'>
            <a className='text-4xl tracking-tight text-blue-500 hover:font-bold hover:text-blue-400' href={url}>{name}</a>
            <a className='text-xl hover:font-bold' href={githubRepo}>See on Github</a>
        </div>
    );
}