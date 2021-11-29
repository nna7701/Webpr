let browser = prompt('What is your browser?');
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
    default:
        alert('We hope that this page looks off!');
        break;
}