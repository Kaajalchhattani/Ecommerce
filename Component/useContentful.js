import {createClient} from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'j1j82ynxb827',
    accessToken: '-zw8-Ya8JBnqhGeSuTFZ-e_Z3PExis5QUkHNwDzKelo',
    host: 'preview.contentful.com',
  });
  const getAuthors = async () => {
    try {
      console.log('true');
      const entries =
        
         await client.getEntries({
          content_type: 'componentSeo',
          select: 'fields',
        })

        
    




      const filtered = entries.items.map(item => {
        const url1 = item.fields.shareImages[0].fields.file.url;
        
        return {
          ...item.fields,
          url1,
          
        };
      });
      return filtered;
    } catch (error) {
      console.log(error);
    }
  };
  return {getAuthors};
};
export default useContentful;
