class Project {
  constructor(id, title, description, technologies, link, video, files) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.link = link;       // URL to project
    this.video = video;     // URL to demo video
    this.files = files;     // Array of file URLs
  }
}

module.exports = Project;