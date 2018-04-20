export class Artist {
    id: string;
    name: string;
    musicStyle: string;
    city: string;
    albums: Array<string> = new Array();
    image?: string;

    public asFormData(): FormData {
      const data = new FormData();
      data.append('name', this.name);
      data.append('musicStyle', this.musicStyle);
      data.append('city', this.city);
      for (let album of this.albums) {
                  data.append('album', album);
              }
              data.append('image', this.image);

              return data;
    }
}
