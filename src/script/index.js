import refood from '../data/refood';

  const dataRefood = [];
  const RENDER_EVENT = 'render-refood';

  refood.forEach(data => {
    data.cara_pengolahan.forEach(olah => {
        const itemRefood = {
          id_limbah: data.id_limbah,
          jenis: data.jenis,
          deskripsi: data.deskripsi,
          id_pengolahan: olah.id_pengolahan,
          teks: olah.teks,
          id_user: olah.id_user,
          nama_lengkap: olah.nama_lengkap,
        };

    dataRefood.push(itemRefood);
  });
});

  console.log(dataRefood);
