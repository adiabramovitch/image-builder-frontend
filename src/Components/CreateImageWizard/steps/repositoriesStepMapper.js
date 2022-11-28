export default ({ 'custom-repositories': customRepositories } = {}) => {
  if (customRepositories?.length > 0) {
    return 'packages-content-sources';
  }

  return 'image-name';
};