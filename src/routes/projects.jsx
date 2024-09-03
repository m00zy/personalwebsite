import Project from '../components/project';

function Projects() {

    const chessProject = {
        'name': 'Interactive Chess Board',
        'url': 'https://chess.maxwellzhudev.com/',
        'githubRepo': 'https://github.com/m00zy/ChessGame', 
    }

    const triviaProject = {
        'name': 'Trivia App',
        'url': 'https://trivia.maxwellzhudev.com/',
        'githubRepo': 'https://github.com/m00zy/TriviaApp', 
    }

    return (
        <div className='h-2/3 flex flex-row justify-evenly items-center'>
            <Project {...chessProject}/>
            <Project {...triviaProject}/>
        </div>
    );
}

export default Projects;