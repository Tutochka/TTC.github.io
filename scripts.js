function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('show');
    });

    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('show');
}

function openTab(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}
Prism.languages.zig = {
    comment: {
        pattern: /\/\/.*/i,
        greedy: true
    },
    string: {
        pattern: /"(?:\\.|[^"\\])*"/,
        greedy: true
    },
    number: /\b(?:0x[\da-fA-F]+|0b[01]+|\d+(\.\d*)?([eE][+-]?\d+)?)\b/,
    keyword: /\b(?:const|var|if|else|return|while|for|switch|case|fn|break|continue|true|false|null|try|catch|defer|async|await|declaration|comptime|use|pub|inline|noalias|extern)\b/,
    type: /\b(?:i8|u8|i16|u16|i32|u32|i64|u64|f32|f64|bool|void|anyerror|anytype|usize|isize|f128)\b/,
    operator: /[+\-*/%=<>!&|^~:]+/,
    punctuation: /[{}()\[\],.;?]/
};

// Ensure that the Prism script is run after the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    Prism.highlightAll();
});

function copyCode(codeId) {
    // Get the text of the code block
    var codeText = document.getElementById(codeId).innerText;

    // Create a temporary textarea element to copy the text
    var textArea = document.createElement("textarea");
    textArea.value = codeText;

    // Append the textarea to the body, select the text, and copy it
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(textArea);
}
