export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed037d6082f3e7d693a6e4a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-22ro3xy4',
                  apiId: 'ca976b00-66e4-4f32-ae5e-06e8d149baf9'
                },
                {
                  buildHookId: '5ed037d6af5f4987dc3170fc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-c4wbfsc7',
                  apiId: '90d6ba6a-56a6-43c0-96d9-3e110f38127d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anujgautam-nz/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-c4wbfsc7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
