1. server mongo api=>basic collection CRUD
2. object wrapper

This is a dev release.  It would not be secure through a persistant pervasive attack.
1. there are several hard-coded variables that in production would be moved to env var.
2. Ideally communication between front and back would be encrypted

Of course one could make the argument that technically the best place to stop a kill chain (defensively) 
is after recon and infiltration but before harvesting but i digress 